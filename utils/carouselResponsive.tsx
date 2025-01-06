import { useEffect, useState } from "react";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export function useIsDesktopOrAbove() {
  const [isDesktopOrAbove, setIsDesktopOrAbove] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1024
  );
  
    useEffect(() => {
      const handleResize = () => {
        setIsDesktopOrAbove(window.innerWidth >= 1024);
      };
  
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
      }
  
      // Cleanup event listener on component unmount
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
    }, []);
  
    return isDesktopOrAbove;
  }
