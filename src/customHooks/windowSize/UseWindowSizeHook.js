import useWindowSize from "./useWindowSize";

export default function UseWindowSizeHook() {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width} x {height}
    </div>
  );
}
