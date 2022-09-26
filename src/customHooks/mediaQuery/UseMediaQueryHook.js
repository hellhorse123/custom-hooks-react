import useMediaQuery from "./useMediaQuery";

export default function UseMediaQueryHook() {
  const isLarge = useMediaQuery("(min-width: 200px)");
  return <div>Large: {isLarge.toString()}</div>;
}
