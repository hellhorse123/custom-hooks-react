import useStateWithValidation from "./useStateWithValidation";

export default function UseStateWithValidationHook() {
  const [username, setUsername, isValid] = useStateWithValidation(
    (name) => name.length > 5,
    ""
  );

  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}

//хук привязан к проверке длины имени, его также можно подключить к другим полям
