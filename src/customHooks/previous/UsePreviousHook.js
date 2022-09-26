import React, {useState} from "react";
import usePrevious from "./usePrevious";

export default function UsePreviousHook() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Mikhail")
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>{count} - {previousCount}</div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
      <button onClick={() => setName("Fedor")}>Change Name</button>
    </div>
  );
}

// подходит для сохранения предыдущего состояния в части кода и доступа к нему