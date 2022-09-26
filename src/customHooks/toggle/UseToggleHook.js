import React from "react";
import useToggle from "./useToggle";

export default function UseToggleHook() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="box">
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}
