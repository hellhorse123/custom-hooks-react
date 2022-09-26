import useCookies from "./useCookies";

export default function UseCookiesHook() {
  const [value, update, remove] = useCookies("name", "Misha");

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("Sasha")}>Change name to Sasha</button>
      <button onClick={remove}>Delete name</button>
    </>
  );
}
