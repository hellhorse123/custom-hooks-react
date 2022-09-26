import React, { useRef } from "react";
import useLongPress from "./useLongPress";

export default function UseLongPressHook() {
  const elementRef = useRef()
  useLongPress(elementRef, () => alert("Long Press"))

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: "red",
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
