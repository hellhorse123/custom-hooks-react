import React, { useState } from "react";
import useEventListener from "../eventListener/useEventListener";

export default function useWindowSize(ref, rootMargin = "0px") {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
}
