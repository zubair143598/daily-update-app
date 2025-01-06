import { useEffect, useState } from "react";

export default function useIsDesktopOrAbove() {
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