import { useLang } from "../../context/LanguageContext";

function CleanEnvironment() {

  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-green-50 p-10">

      <h1 className="text-5xl font-bold text-center text-green-700">

        ♻️
        {lang === "en"
          ? " Clean Environment Campaign"
          : " स्वच्छ पर्यावरण अभियान"}

      </h1>

    </div>
  );
}

export default CleanEnvironment;