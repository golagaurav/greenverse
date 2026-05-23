import { useLang } from "../context/LanguageContext";

function Donate() {
  const { lang } = useLang();

  return (
    <div className="bg-green-50 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold">

          {lang === "en"
            ? "💚 Support Greenverse"
            : "💚 Greenverse को सहयोग दें"}

        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">

          {lang === "en"
            ? "Your contribution helps us plant trees, protect nature, and build a greener future 🌱"
            : "आपका सहयोग हमें पेड़ लगाने, प्रकृति बचाने और हरित भविष्य बनाने में मदद करता है 🌱"}

        </p>

      </section>

      {/* DONATION CONTENT */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-4xl font-bold text-green-800 leading-tight">

              {lang === "en"
                ? "Every Donation Makes Impact 🌍"
                : "हर दान बदलाव लाता है 🌍"}

            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">

              {lang === "en"
                ? "Greenverse uses donations to organize plantation drives, awareness campaigns, and environmental protection activities across villages and cities."
                : "Greenverse दान का उपयोग वृक्षारोपण अभियान, जागरूकता कार्यक्रम और पर्यावरण संरक्षण गतिविधियों के लिए करता है।"}

            </p>

            {/* IMPACT CARDS */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition">

                <h3 className="text-4xl font-bold text-green-700">
                  🌳
                </h3>

                <p className="mt-3 text-gray-700 font-semibold">

                  {lang === "en"
                    ? "Tree Plantation"
                    : "वृक्षारोपण"}

                </p>

              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition">

                <h3 className="text-4xl font-bold text-green-700">
                  ♻️
                </h3>

                <p className="mt-3 text-gray-700 font-semibold">

                  {lang === "en"
                    ? "Clean Environment"
                    : "स्वच्छ पर्यावरण"}

                </p>

              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition">

                <h3 className="text-4xl font-bold text-green-700">
                  👥
                </h3>

                <p className="mt-3 text-gray-700 font-semibold">

                  {lang === "en"
                    ? "Volunteer Support"
                    : "स्वयंसेवक सहयोग"}

                </p>

              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition">

                <h3 className="text-4xl font-bold text-green-700">
                  🌍
                </h3>

                <p className="mt-3 text-gray-700 font-semibold">

                  {lang === "en"
                    ? "Awareness Campaigns"
                    : "जागरूकता अभियान"}

                </p>

              </div>

            </div>

          </div>

          {/* DONATION BOX */}
          <div className="bg-white shadow-2xl rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-green-700 text-center">

              {lang === "en"
                ? "Donation Details"
                : "दान विवरण"}

            </h2>

            <div className="mt-8 space-y-5 text-gray-700 text-lg">

              <div className="bg-green-50 p-5 rounded-2xl">

                <h3 className="font-bold text-green-700">

                  {lang === "en"
                    ? "Bank Account"
                    : "बैंक खाता"}

                </h3>

                <p className="mt-2">
                  Greenverse NGO
                </p>

                <p>
                  A/C No: 1234567890
                </p>

                <p>
                  IFSC: ABCD0001234
                </p>

              </div>

              <div className="bg-green-50 p-5 rounded-2xl">

                <h3 className="font-bold text-green-700">
                  UPI ID
                </h3>

                <p className="mt-2 text-2xl font-bold text-green-800">
                  greenverse@upi
                </p>

              </div>

            </div>

            {/* DONATE BUTTON */}
            <button className="w-full mt-8 bg-gradient-to-r from-green-700 to-green-500 text-white py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition duration-300">

              {lang === "en"
                ? "Donate Now 💚"
                : "अभी दान करें 💚"}

            </button>

          </div>

        </div>

      </section>

      {/* QUOTE SECTION */}
      <section className="bg-white py-20 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-green-800">

            {lang === "en"
              ? "🌱 Small Help, Big Change"
              : "🌱 छोटी मदद, बड़ा बदलाव"}

          </h2>

          <p className="mt-8 text-2xl italic text-gray-700 leading-relaxed">

            {lang === "en"
              ? '"The best time to plant a tree was 20 years ago. The second best time is now."'
              : '"पेड़ लगाने का सबसे अच्छा समय 20 साल पहले था, दूसरा सबसे अच्छा समय अभी है।"'}

          </p>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">

          {lang === "en"
            ? "💚 Become Part of Greenverse"
            : "💚 Greenverse का हिस्सा बनें"}

        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">

          {lang === "en"
            ? "Together we can create a greener and healthier Earth for future generations."
            : "मिलकर हम आने वाली पीढ़ियों के लिए हरित और स्वस्थ धरती बना सकते हैं।"}

        </p>

        <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-100 transition duration-300 shadow-lg">

          {lang === "en"
            ? "Join Mission 🌍"
            : "मिशन से जुड़ें 🌍"}

        </button>

      </section>

    </div>
  );
}

export default Donate;