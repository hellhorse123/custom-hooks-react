import useCopyToClipboard from "./useCopyToClipboard";

export default function UseCopyToClipboardHook() {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <>
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </>
  );
}
