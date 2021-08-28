import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const element = document.getElementById("scroll-container");
    if (element) {
      element.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
