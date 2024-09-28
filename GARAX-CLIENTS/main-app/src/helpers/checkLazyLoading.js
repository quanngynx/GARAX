function isSupportLazyLoading() {
  if ("loading" in HTMLImageElement.prototype) 
    return alert("yes");
  else return alert("no");
}

export default isSupportLazyLoading;
