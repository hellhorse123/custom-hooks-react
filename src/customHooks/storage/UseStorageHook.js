import { useLocalStorage, useSessionStorage } from "./useStorage";

export default function UseStorageHook() {
  const [name, setName, removeName] = useSessionStorage("name", "Misha");
  const [age, setAge, removeAge] = useLocalStorage("age", 22);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("Fedor")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>remove Name</button>
      <button onClick={removeAge}>remove Age</button>
    </div>
  );
}
