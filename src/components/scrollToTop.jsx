import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // detect route changes

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top-left
  }, [pathname]);

  return null; // this component renders nothing
};

export default ScrollToTop;
