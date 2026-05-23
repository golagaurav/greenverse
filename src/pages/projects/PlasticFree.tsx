import { useLang } from "../../context/LanguageContext";

function PlasticFree() {

  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-green-50">

      <h1 className="text-5xl font-bold text-center text-cyan-700">

        🚯
        {lang === "en"
          ? " Plastic Free Drive"
          : " प्लास्टिक मुक्त अभियान"}

      </h1>

    </div>
  );
}

export default PlasticFree;