import React, { useState } from "react";
import useEffectOnce from "./useEffectOnce";

export default function UseEffectOnceHook() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}
