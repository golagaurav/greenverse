import { useLang } from "../../context/LanguageContext";

function SchoolAwareness() {

  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-green-50">

      <section className="bg-gradient-to-r from-green-900 to-green-600 text-white py-24 text-center px-6">

        <h1 className="text-5xl font-bold">
          🏫
          {lang === "en"
            ? " School Awareness Program"
            : " स्कूल जागरूकता कार्यक्रम"}
        </h1>

      </section>

      <div className="max-w-5xl mx-auto py-16 px-6">

        <p className="text-lg text-gray-700 leading-relaxed">

          {lang === "en"
            ? "We educate students about environmental protection and sustainable living."
            : "हम छात्रों को पर्यावरण संरक्षण और सतत जीवनशैली के बारे में जागरूक करते हैं।"}

        </p>

      </div>

    </div>
  );
}

export default SchoolAwareness;