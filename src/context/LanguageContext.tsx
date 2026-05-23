import { createContext, useContext, useState } from "react";

type Lang = "en" | "hi";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);