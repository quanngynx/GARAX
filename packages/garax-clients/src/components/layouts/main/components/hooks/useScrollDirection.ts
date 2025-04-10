import { useEffect, useState } from "react";

export function useScrollDirectionV2(headerHeight: number) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY <= headerHeight) {
        setScrollDirection("up");
      } else {
        if (scrollDirection !== "down") {
          setScrollDirection("down");
        }
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, headerHeight]);

  return scrollDirection;
}