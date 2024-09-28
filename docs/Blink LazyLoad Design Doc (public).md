# **Blink LazyLoad**

Authors: [sclittle@chromium.org](mailto:sclittle@chromium.org), [rajendrant@chromium.org](mailto:rajendrant@chromium.org), [bengr@chromium.org](mailto:bengr@chromium.org)  
Last modified: 2019-04-05  
LazyLoad explainer: [https://github.com/scott-little/lazyload](https://github.com/scott-little/lazyload)

# **Overview**

### **Explainer**

[https://github.com/scott-little/lazyload](https://github.com/scott-little/lazyload)

### **Summary**

Web pages often have images or embedded content like ads out of view near the bottom of the page, and users don't always end up scrolling all the way down. [LazyLoad](https://github.com/scott-little/lazyload) is a Chrome optimization that supports deferring the load of below-the-fold images and iframes on the page until the user scrolls near them, in order to reduce data usage, speed up page loads, and reduce memory use.

Websites can use a ["loading" attribute](#web-platform-support) on \<img\> and \<iframe\> elements to control and interact with the browser's default lazy loading behavior. When the user scrolls, deferred frames and images that will be [visible soon](#load-in-distance-threshold) start loading, such that they're typically finished loading by the time the user scrolls all the way down to them.

### **Platforms**

All platforms will support lazily loading \<img\> and \<iframe\> elements with loading="lazy" set on them.

On Android Chrome with Data saver turned on, elements with loading="auto" or unset will also be lazily loaded if Chrome determines them to be [good candidates](#determining-what-content-is-well-suited-to-be-lazily-loaded) for lazy loading (according to heuristics). Setting loading="eager" on the image or iframe element will still prevent it from being lazily loaded though.

### **Team**

[sclittle@chromium.org](mailto:sclittle@chromium.org), [rajendrant@chromium.org](mailto:rajendrant@chromium.org), [bengr@chromium.org](mailto:bengr@chromium.org),

### **Bug**

[crbug.com/709494](https://crbug.com/709494).

### **Entry on the feature dashboard**

[https://www.chromestatus.com/features/5645767347798016](https://www.chromestatus.com/features/5645767347798016)

### **Code affected**

Frame and Image resource loading in Blink, and the Previews and Data Reduction Proxy components.

# **Design**

## **Web platform support** {#web-platform-support}

Websites can use a "loading" attribute ([explainer](https://github.com/scott-little/lazyload#ways-the-loading-attribute-can-be-used), [spec](https://github.com/whatwg/html/pull/3752)) on \<img\> and \<iframe\> elements to control and interact with the browser's default lazy loading behavior. There are also plans for having a way to control LazyLoad page-wide using [a feature policy](https://github.com/w3c/webappsec-feature-policy/issues/193).

## **Determining what content is well suited to be lazily loaded** {#determining-what-content-is-well-suited-to-be-lazily-loaded}

All platforms will lazily load \<img\> and \<iframe\> elements with [loading="lazy"](https://github.com/scott-little/lazyload#set-loadinglazy-on-an-imageiframe) set on them, and will avoid lazily loading \<img\> and \<iframe\> elements with [loading="eager"](https://github.com/scott-little/lazyload#set-loadingeager-on-an-imageiframe) set on them.

For platforms other than Android Chrome, and for Android Chrome users without Data Saver turned on, Chrome won't lazily load content unless it's marked for lazy loading with loading="lazy".

For Android Chrome users with Data Saver turned on, the automatic lazy loading behavior for \<img\> and \<iframe\> elements with [loading="auto"](https://github.com/scott-little/lazyload#set-loadingauto-or-leave-the-attribute-unset-on-an-imageiframe) set or with the "loading" attribute left unset depends on heuristics.

For iframes, LazyLoad targets third-party iframes that are intended to be shown to the user (e.g. banner ads). First-party iframes aren't targeted because these frames share javascript context with the embedding page. Chrome also avoids deferring iframes that are likely to be used for communication (e.g. for social media widgets) or analytics to avoid breaking their functionality, (e.g. tiny iframe dimensions, "display:none", etc.). See [here](https://docs.google.com/document/d/1ITh7UqhmfirprVtjEtpfhga5Qyfoh78UkRmW8r3CntM/edit#heading=h.383gyhgp4pty) for more details.

For images, \<img\> elements that have specified inline dimensions (as width/height attributes or in inline style) smaller than 10x10 are not deferred, in order to avoid deferring tracking pixels. Also, image elements created programmatically in JavaScript (e.g. "var img \= new Image()") aren't deferred, so that they load in as-expected. See [here](https://docs.google.com/document/d/1jF1eSOhqTEt0L1WBCccGwH9chxLd9d1Ez0zo11obj14/edit#heading=h.py8dg86wnylq) for more details.

## **Load-in distance threshold** {#load-in-distance-threshold}

If the user scrolls such that the edge of a deferred object on the page is within K pixels of the viewport, then that deferred object will be loaded in. The value of load-in distance threshold K will be determined through experimentation, with the goal of balancing the benefits of data, memory savings, and performance against potentially an increased wait for a visible element to finish loading in (see [visible load time metrics](#visible-load-time)). Any increased delays should be negligible and imperceptible.

K will vary based on:

* Frame vs. image  
* Whether Data Saver is enabled or disabled  
* The current network's effective connection type

The current default load-in distance thresholds can be found in the [code](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/frame/settings.json5?q=LoadingDistanceThresholdPx).

## **LazyFrames**

The LazyFrames ([design doc](https://docs.google.com/document/d/1ITh7UqhmfirprVtjEtpfhga5Qyfoh78UkRmW8r3CntM/edit)) mechanism in Blink defers certain iframes from being loaded until the user scrolls near them. LazyFrames defers frames by waiting to call FrameLoader::Load() until an installed IntersectionObserver fires when the user scrolls near the frame.

## **LazyImages**

The LazyImages mechanism ([design doc](https://docs.google.com/document/d/1jF1eSOhqTEt0L1WBCccGwH9chxLd9d1Ez0zo11obj14/edit)) in Blink defers loading of images until the user scrolls near them. To preserve the layout and avoid reflow jank when loading images in, LazyImages inserts appropriately sized rectangular placeholders where the images will be, using the [image placeholder mechanism](https://docs.google.com/document/d/1691W7yFDI1FJv69N2MEtaSzpnqO2EqkgGD3T0O-pQ08/) in Blink that was created for the LoFi feature. Deferral of CSS background images is also supported.

## **DevTools support**

When images are being lazily loaded, a message is logged to the console. No other DevTools integration is currently planned.

# **Metrics**

## **Success metrics**

### Page size

The loaded size of the page should be reduced with LazyLoad enabled, since only the frames and images that were about to be visible to the user would be fetched. Page size will be tracked with:

* PageLoad.Experimental.Bytes.Total and  
* PageLoad.Experimental.Bytes.Network

Also, every time an iframe or image is deferred or loaded in after having been deferred, new metrics to record how many bytes were attributable to that action:

* Blink.LazyLoad.(Frames|Images).DeferredBytes  
  * The number of bytes saved by deferring the object.  
* Blink.LazyLoad.(Frames|Images).UndeferredBytes  
  * The number of bytes that were originally saved by deferring the object that is now being loaded-in, such that DeferredBytes \- UndeferredBytes \= savings.  
* Blink.LazyLoad.(Frames|Images).VisibleUndeferredBytes  
  * Same as UndeferredBytes, but only recorded when the object becomes visible in the viewport, such that DeferredBytes \- VisibleUndeferredBytes \= maximum possible savings. This will be used to tune the load-in distance threshold.

### Performance metrics

Latency should improve when LazyLoad is enabled. Specifically, improvements are expected in time to first contentful paint, time to interactive, and page load time, which are reported by the following metrics:

* PageLoad.PaintTiming.NavigationToFirstContentfulPaint  
* PageLoad.Experimental.NavigationToInteractive

### Memory savings metrics

Memory.Experimental.Total2.PrivateMemoryFootprint records the total private memory used by all chrome processes. Loading fewer frames and images should result in a reduction in this metric. There should also be a decrease in the number of OOM crashes.

## **Regression metrics**

### Visible load time {#visible-load-time}

The following metrics will be added to track how long a user has to wait for a visible image or iframe to load. This will record the delay from the time that any part of the element becomes visible until the time the image is fully loaded (for images) or the iframe's onload event triggers (for frames). If the image or iframe is already loaded by the time the user scrolls to it, then 0ms will be recorded.

* Blink.VisibleLoadTime.AboveTheFold.Image  
* Blink.VisibleLoadTime.AboveThefold.Frame  
* Blink.VisibleLoadTime.BelowTheFold.Image  
* Blink.VisibleLoadTime.BelowTheFold.Frame

The \*.Frame variants will only track third-party iframes that would have been considered for deferral, i.e. according to [these heuristics](https://docs.google.com/document/d/1ITh7UqhmfirprVtjEtpfhga5Qyfoh78UkRmW8r3CntM/edit#heading=h.383gyhgp4pty) to avoid targeting analytics or communication iframes. There will also be sub-histograms for each level of effective connection type, i.e. \*.\[Slow2G|2G|3G|4G\], that get recorded if the current effective connection type matches.

The BelowTheFold.\* histograms track this delay only for images or frames that were deferred, while the Blink.VisibleLoadTime.Image/Frame histograms tracks the delay for all of these images and iframes, including the time that users have to wait for above-the-fold content to load as part of the initial page load.

# **Experiments and Rollout plan**

LazyLoad will be rolled out in two different phases, all controlled by the field trial "LazyLoad". There will be field trial params controlling the load-in distance threshold for each combination of Frame vs. Image, Data Saver on vs. off, and ECT.

First, there will be a dev channel experiment to determine appropriate load-in distance threshold values. Initially there will be 3 experiment groups: 0px load-in distance threshold, 1000px load-in distance threshold, and control. There will likely be multiple rounds of experimentation here with different param values, tuning the params each round to minimize negative impact on visible load time, according to the new Blink.VisibleLoadTime.\* histograms.

The second phase will be rolling out LazyLoad as a standard experiment-controlled rollout. The load-in distance threshold values that first get to stable channel will be biased towards minimizing negative effects on visible load time, as experiments continue on dev and beta channels to tune the parameters and find a more precise balance between visible load time and performance benefits.

# **Core principle considerations**

## **Speed**

LazyLoad should improve Chrome's performance in several ways. By deferring below-the-fold iframes and images until the user scrolls down to them, LazyLoad will:

* Speed up the load of above-the-fold content, since there will be less competition for network resources during the initial page load,  
* Save network data by avoiding downloading any deferred content that the user doesn't end up scrolling to,  
* Reduce memory usage.

## **Security**

There are no new security considerations with this feature, since it doesn't introduce any new places where untrusted data is being handled, nor does it introduce any new attack surfaces as far as we know.

# **Privacy considerations**

For LazyFrames, due to the extra load-in distance threshold, a deferred iframe on a page will be loaded in before a JavaScript intersection observer that the iframe installed inside itself would have fired, so slightly more information about the user's scrolling position on the embedding page is exposed.

For LazyImages, no new information is exposed with same-origin images, since the page could have just installed a JavaScript intersection observer itself, but a deferred cross-origin image gets an additional piece of information about the user's scrolling position when it gets fully loaded in as the user scrolls down near it.

No new information is exposed to Google outside of the performance metrics we collect.

# **Compatibility risks**

## **Counting impressions**

Ad networks that currently record an impression every time the ad is loaded instead of every time the user actually sees the ad (e.g. using the visibility API) could see a change in their metrics, mainly because LazyFrames could defer ads that would have otherwise been loaded in but never seen by the user. This could also affect the revenue of site owners that use these ads as well. Note that the distance-from-viewport threshold will be tuned such that a deferred frame will typically be loaded in by the time the user scrolls to it.

## **Body.OnLoad() doesn't wait for deferred frames or images**

Without LazyLoad, all iframes and images on the page would be fully loaded by the time body.OnLoad() triggers. LazyLoad changes this, so if e.g. a page relies on a below-the-fold iframe to be loaded by the time body.OnLoad() triggers, or if the page could timeout while waiting to communicate with a frame, then some communication between the page and the frame might break if that frame is deferred.

Note that for both LazyFrames and LazyImages, the deferred elements' individual load events will still wait for that iframe or image to be fully loaded, and LazyFrames will attempt to recognize and avoid deferring iframes that are used for communication or analytics according to [heuristics](https://docs.google.com/document/d/1ITh7UqhmfirprVtjEtpfhga5Qyfoh78UkRmW8r3CntM/edit#heading=h.383gyhgp4pty).

## **Compatibility with features that expect the whole page to be loaded**

Chrome features such as "Print" and "Save Page As" currently expect all elements on the page to be loaded before printing or saving the page. One way to mitigate this issue would be to automatically load in any deferred elements on the page when "Print" or "Save Page As" are clicked, then wait for everything to load before continuing, but that could introduce user-noticeable delay which might require some UX changes with those features.

For Offline Pages, it shouldn't be too hard to simply disable LazyLoad when a page is specifically loaded in the background to generate an offline page (e.g. in response to the user clicking "Download when Online" while they're offline), but offline pages that are generated automatically from a foreground page that a user is viewing would be missing any deferred elements.

# **Testing plan**

Both LazyFrames and LazyImages will go through the standard testing process. In addition, since LazyFrames can defer frames that would have otherwise loaded before body.OnLoad() and similar events trigger (see the Compatibility Risks section for more info), LazyFrames will have a series of WebKit layout tests that fully exercise and demonstrate this.

# **Follow-up work**

The success of this work will be measured by how much data savings, performance and memory improvements are seen with LazyLoad vs. how long have users needed to wait for deferred content to load in after it becomes visible. There will be follow up experiments to further tune these parameters, see the Experiments and Rollout Plan section for more details about that.

Also, usage of the "loading" attribute to prevent content from being lazily loaded will be analyzed, which could lead to tuning or adding to the [heuristics](https://docs.google.com/document/d/1ITh7UqhmfirprVtjEtpfhga5Qyfoh78UkRmW8r3CntM/edit#heading=h.383gyhgp4pty) for determining which frames or images should or shouldn't be deferred.

If LazyLoad for Android is successful, then LazyLoad should be considered for desktop platforms.
