import React, { useRef } from "react";
import useHover from "./useHover";

export default function UseHoverHook() {
  const elementRef = useRef()
  const hovered = useHover(elementRef)

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? "blue" : "red",
        width: 100,
        height: 100,
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
      }}
    >
    </div>
  );
}
