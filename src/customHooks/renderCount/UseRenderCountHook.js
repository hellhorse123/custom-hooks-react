import useRenderCount from "./useRenderCount";
import useToggle from "../toggle/useToggle";

export default function UseRenderCountHook() {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
