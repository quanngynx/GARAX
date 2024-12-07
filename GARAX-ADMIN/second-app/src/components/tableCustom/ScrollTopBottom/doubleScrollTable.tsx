import { ReactElement, RefObject, useEffect, useRef } from "react";

interface IProps {
    children: ReactElement;
    childrenRef: RefObject<HTMLDivElement>;
  }

/**
 * Double scroll bar enhance for overflow X components
 * @param {Props} Props parameters
 * @returns {ReactElement} return UI Parent
 */
export function DoubleScrollBar({
    children,
    childrenRef,
  }: IProps): ReactElement {
    const scrollBoxRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  
    useEffect((): (() => void) => {
      const scrollBoxEL = (): void => {
        childrenRef?.current?.scrollTo({
          left: scrollBoxRef?.current?.scrollLeft,
        });
      };
      const scrollChildrenEL = (): void => {
        scrollBoxRef?.current?.scrollTo({
          left: childrenRef?.current?.scrollLeft,
        });
      };
  
      scrollBoxRef?.current?.addEventListener('scroll', scrollBoxEL);
      childrenRef?.current?.addEventListener('scroll', scrollChildrenEL);
  
      return () => {
        scrollBoxRef?.current?.removeEventListener<'scroll'>(
          'scroll',
          scrollBoxEL,
        );
        childrenRef?.current?.removeEventListener<'scroll'>(
          'scroll',
          scrollChildrenEL,
        );
      };
    });
  
    return (
        <div className="w-full">
        <div
          style={{
            overflowX: "scroll",
          }}
          className="w-full h-[12px]"
          ref={scrollBoxRef}
        >
          <div
            style={{
              minWidth: childrenRef?.current?.scrollWidth || "100%",
            }}
          ></div>
        </div>
        <div ref={childrenRef}>{children}</div>
      </div>
    );
  }