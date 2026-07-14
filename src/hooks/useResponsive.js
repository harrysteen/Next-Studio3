import { useState, useEffect } from "react";

export default function useResponsive() {
  const [isMounted, setIsMounted] = useState(false);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMounted,
    width: isMounted ? width : 1200,
    isMobile: isMounted && width <= 480,
    isTablet: isMounted && width > 480 && width <= 768,
    isSmallDesktop: isMounted && width > 768 && width <= 1024,
    isDesktop: !isMounted || width > 1024,
  };
}
