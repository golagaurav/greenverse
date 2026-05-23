import { useLang } from "../context/LanguageContext";

function Home() {
  const { lang } = useLang();

  return (
    <div className="font-sans bg-green-50">

      {/* HERO SECTION */}
      <section
        className="relative text-white text-center py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            🌱 Greenverse NGO
          </h1>

          <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {lang === "en"
              ? "Plant Trees, Save Future 🌍 Join our mission to make the Earth greener and cleaner for future generations."
              : "पेड़ लगाओ, भविष्य बचाओ 🌍 हमारे मिशन से जुड़ें और धरती को आने वाली पीढ़ियों के लिए हरा-भरा बनाएं।"}
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:scale-105 hover:bg-yellow-100 transition duration-300 shadow-lg">
              {lang === "en" ? "Join Us 🤝" : "हमसे जुड़ें 🤝"}
            </button>

            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 hover:bg-gray-800 transition duration-300 shadow-lg">
              {lang === "en" ? "Donate 💚" : "दान करें 💚"}
            </button>

          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="grid md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto text-center">

        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-4xl font-bold text-green-700">
            10,000+
          </h2>

          <p className="mt-3 text-gray-700 text-lg">
            {lang === "en"
              ? "Trees Planted 🌳"
              : "लगाए गए पेड़ 🌳"}
          </p>

        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-4xl font-bold text-green-700">
            50+
          </h2>

          <p className="mt-3 text-gray-700 text-lg">
            {lang === "en"
              ? "Villages Covered 🏡"
              : "कवर किए गए गाँव 🏡"}
          </p>

        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-4xl font-bold text-green-700">
            1,000+
          </h2>

          <p className="mt-3 text-gray-700 text-lg">
            {lang === "en"
              ? "Volunteers 👥"
              : "स्वयंसेवक 👥"}
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-green-800">
            {lang === "en"
              ? "🌿 About Greenverse"
              : "🌿 Greenverse के बारे में"}
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            {lang === "en"
              ? "Greenverse is an environmental NGO focused on tree plantation, clean environment drives, and spreading awareness about nature conservation."
              : "Greenverse एक पर्यावरण NGO है जो वृक्षारोपण, स्वच्छ पर्यावरण अभियान और प्रकृति संरक्षण के प्रति जागरूकता फैलाने का कार्य करता है।"}
          </p>

        </div>

      </section>

      {/* WHY JOIN */}
      <section className="p-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center">

          <div className="text-5xl">🌱</div>

          <h3 className="font-bold text-2xl mt-4 text-green-700">
            {lang === "en"
              ? "Save Earth"
              : "धरती बचाओ"}
          </h3>

          <p className="mt-3 text-gray-600">
            {lang === "en"
              ? "Every tree planted helps secure our future."
              : "हर लगाया गया पेड़ हमारे भविष्य को सुरक्षित बनाता है।"}
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center">

          <div className="text-5xl">🤝</div>

          <h3 className="font-bold text-2xl mt-4 text-green-700">
            {lang === "en"
              ? "Join Community"
              : "समुदाय से जुड़ें"}
          </h3>

          <p className="mt-3 text-gray-600">
            {lang === "en"
              ? "Work with passionate people to create change."
              : "परिवर्तन लाने के लिए उत्साही लोगों के साथ काम करें।"}
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center">

          <div className="text-5xl">💚</div>

          <h3 className="font-bold text-2xl mt-4 text-green-700">
            {lang === "en"
              ? "Make Impact"
              : "बदलाव लाएं"}
          </h3>

          <p className="mt-3 text-gray-600">
            {lang === "en"
              ? "Create real environmental impact at ground level."
              : "जमीनी स्तर पर वास्तविक पर्यावरणीय बदलाव लाएं।"}
          </p>

        </div>

      </section>

      {/* FINAL CTA */}
      <section
        className="relative text-white text-center py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <h2 className="text-4xl md:text-5xl font-bold">
            {lang === "en"
              ? "🌍 Join Greenverse Mission Today"
              : "🌍 आज ही Greenverse मिशन से जुड़ें"}
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto">
            {lang === "en"
              ? "Your one small step can make the Earth greener and healthier 🌱"
              : "आपका एक छोटा कदम धरती को और अधिक हरा-भरा बना सकता है 🌱"}
          </p>

          <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-100 transition duration-300 shadow-lg">
            {lang === "en"
              ? "Become Volunteer"
              : "स्वयंसेवक बनें"}
          </button>

        </div>
      </section>

    </div>
  );
}

export default Home;