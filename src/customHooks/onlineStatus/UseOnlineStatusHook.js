import useOnlineStatus from "./useOnlineStatus";

export default function UseOnlineStatusHook() {
  const online = useOnlineStatus();

  return <div>{online.toString()}</div>;
}

// хук позволяет проверять, в сети пользователь или нет