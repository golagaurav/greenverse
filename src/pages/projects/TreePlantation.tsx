import { useLang } from "../../context/LanguageContext";

function TreePlantation() {

  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-green-50">

      <section className="bg-gradient-to-r from-green-900 to-green-600 text-white py-24 text-center px-6">

        <h1 className="text-5xl font-bold">
          🌳
          {lang === "en"
            ? " Tree Plantation Drive"
            : " वृक्षारोपण अभियान"}
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          {lang === "en"
            ? "Planting trees to create a greener future."
            : "हरित भविष्य बनाने के लिए वृक्षारोपण अभियान।"}
        </p>

      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">

        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          alt="Tree Plantation"
          className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        />

        <div className="mt-10 bg-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-4xl font-bold text-green-700">

            {lang === "en"
              ? "About Campaign"
              : "अभियान के बारे में"}

          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">

            {lang === "en"
              ? "Greenverse organizes tree plantation drives across villages, schools, and cities to reduce pollution and improve biodiversity."
              : "Greenverse गाँवों, स्कूलों और शहरों में वृक्षारोपण अभियान चलाता है ताकि प्रदूषण कम हो और पर्यावरण बेहतर बने।"}

          </p>

        </div>

      </section>

    </div>
  );
}

export default TreePlantation;