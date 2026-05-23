import { useLang } from "../../context/LanguageContext";

function GreenCity() {

  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-emerald-50 p-10">

      <h1 className="text-5xl font-bold text-center text-emerald-700">

        🌍
        {lang === "en"
          ? " Green City Mission"
          : " ग्रीन सिटी मिशन"}

      </h1>

    </div>
  );
}

export default GreenCity;