import React, { useRef } from "react";
import useSize from "./useSize";

export default function UseSizeHook() {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </>
  );
}
//данный хук привязан к проверке размера области textarea