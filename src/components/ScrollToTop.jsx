import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to scroll to (0,0) on the X and Y axis
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the route (pathname) changes

  return null; // This component doesn't render anything
};


export default ScrollToTop;