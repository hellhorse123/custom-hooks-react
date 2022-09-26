import useScript from "./useScript";

export default function UseScriptHook() {
  const { loading, error, value } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return <div>{window.$(window).width()}</div>;
}
