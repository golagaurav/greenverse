import { useLang } from "../context/LanguageContext";

function About() {
  const { lang } = useLang();

  return (
    <div className="bg-green-50 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold">

          {lang === "en"
            ? "🌿 About Greenverse"
            : "🌿 Greenverse के बारे में"}

        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">

          {lang === "en"
            ? "Greenverse is a movement dedicated to protecting nature, planting trees, and creating a greener future for everyone."
            : "Greenverse एक ऐसा अभियान है जो प्रकृति संरक्षण, वृक्षारोपण और हरित भविष्य बनाने के लिए समर्पित है।"}

        </p>

      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              alt="Nature"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* RIGHT TEXT */}
          <div>

            <h2 className="text-4xl font-bold text-green-800 leading-tight">

              {lang === "en"
                ? "Together We Can Save Earth 🌍"
                : "मिलकर हम धरती को बचा सकते हैं 🌍"}

            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">

              {lang === "en"
                ? "Greenverse works with volunteers, students, and communities to spread awareness about environmental protection and organize plantation drives across villages and cities."
                : "Greenverse स्वयंसेवकों, छात्रों और समुदायों के साथ मिलकर पर्यावरण संरक्षण के प्रति जागरूकता फैलाने और गाँवों व शहरों में वृक्षारोपण अभियान चलाने का कार्य करता है।"}

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="bg-white shadow-lg px-6 py-4 rounded-2xl">
                <h3 className="text-3xl font-bold text-green-700">
                  10K+
                </h3>

                <p className="text-gray-600">

                  {lang === "en"
                    ? "Trees Planted"
                    : "लगाए गए पेड़"}

                </p>
              </div>

              <div className="bg-white shadow-lg px-6 py-4 rounded-2xl">
                <h3 className="text-3xl font-bold text-green-700">
                  50+
                </h3>

                <p className="text-gray-600">

                  {lang === "en"
                    ? "Communities"
                    : "समुदाय"}

                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          {/* MISSION */}
          <div className="bg-white shadow-xl rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="text-6xl">🎯</div>

            <h2 className="text-3xl font-bold text-green-700 mt-4">

              {lang === "en"
                ? "Our Mission"
                : "हमारा मिशन"}

            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-lg">

              {lang === "en"
                ? "To inspire every individual to plant trees, reduce pollution, and actively participate in environmental conservation."
                : "हर व्यक्ति को पेड़ लगाने, प्रदूषण कम करने और पर्यावरण संरक्षण में सक्रिय भागीदारी के लिए प्रेरित करना।"}

            </p>

          </div>

          {/* VISION */}
          <div className="bg-white shadow-xl rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="text-6xl">🌍</div>

            <h2 className="text-3xl font-bold text-green-700 mt-4">

              {lang === "en"
                ? "Our Vision"
                : "हमारा विजन"}

            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-lg">

              {lang === "en"
                ? "To build a greener, healthier, and pollution-free world for future generations."
                : "आने वाली पीढ़ियों के लिए एक हरित, स्वस्थ और प्रदूषण मुक्त दुनिया बनाना।"}

            </p>

          </div>

        </div>

      </section>

      {/* TEAM SECTION */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-green-800">

            {lang === "en"
              ? "💚 Our Volunteers"
              : "💚 हमारे स्वयंसेवक"}

          </h2>

          <p className="mt-4 text-gray-600 text-lg">

            {lang === "en"
              ? "Passionate people working together to protect nature."
              : "प्रकृति संरक्षण के लिए साथ मिलकर काम करने वाले उत्साही लोग।"}

          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-green-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Volunteer"
                className="w-28 h-28 rounded-full mx-auto border-4 border-green-600"
              />

              <h3 className="mt-4 text-2xl font-bold text-green-700">
                Rahul
              </h3>

              <p className="text-gray-600 mt-2">

                {lang === "en"
                  ? "Tree Plantation Leader"
                  : "वृक्षारोपण प्रमुख"}

              </p>

            </div>

            <div className="bg-green-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Volunteer"
                className="w-28 h-28 rounded-full mx-auto border-4 border-green-600"
              />

              <h3 className="mt-4 text-2xl font-bold text-green-700">
                Priya
              </h3>

              <p className="text-gray-600 mt-2">

                {lang === "en"
                  ? "Awareness Coordinator"
                  : "जागरूकता समन्वयक"}

              </p>

            </div>

            <div className="bg-green-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

              <img
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="Volunteer"
                className="w-28 h-28 rounded-full mx-auto border-4 border-green-600"
              />

              <h3 className="mt-4 text-2xl font-bold text-green-700">
                Aman
              </h3>

              <p className="text-gray-600 mt-2">

                {lang === "en"
                  ? "Environment Activist"
                  : "पर्यावरण कार्यकर्ता"}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">

          {lang === "en"
            ? "🌱 Be Part of the Change"
            : "🌱 बदलाव का हिस्सा बनें"}

        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">

          {lang === "en"
            ? "Together we can make the Earth greener and healthier."
            : "मिलकर हम धरती को अधिक हरा-भरा और स्वस्थ बना सकते हैं।"}

        </p>

        <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-100 transition duration-300 shadow-lg">

          {lang === "en"
            ? "Join Greenverse"
            : "Greenverse से जुड़ें"}

        </button>

      </section>

    </div>
  );
}

export default About;