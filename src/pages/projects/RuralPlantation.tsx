import { useLang } from "../../context/LanguageContext";

function RuralPlantation() {

  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-lime-50 p-10">

      <h1 className="text-5xl font-bold text-center text-lime-700">

        🌾
        {lang === "en"
          ? " Rural Plantation Project"
          : " ग्रामीण वृक्षारोपण परियोजना"}

      </h1>

    </div>
  );
}

export default RuralPlantation;