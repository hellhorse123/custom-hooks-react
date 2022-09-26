import useTranslation from "./useTranslation";

export default function UseTranslationHook() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("ru")}>Change to Russian</button>
      <button onClick={() => setLanguage("en")}>Change to English</button>
    </>
  );
}
// хук меняет язык слов с помощью localStorage