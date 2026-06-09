import { useLang } from "../context/LanguageContext";

function About() {
  const { lang } = useLang();

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-500 text-white py-28 px-6">

        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {lang === "en"
              ? "🌿 About Greenverse"
              : "🌿 Greenverse के बारे में"}
          </h1>

          <p className="mt-8 text-lg md:text-2xl max-w-4xl mx-auto text-green-100 leading-relaxed">
            {lang === "en"
              ? "Greenverse is a community-driven movement dedicated to restoring nature, planting trees, and building a sustainable future."
              : "Greenverse एक सामुदायिक अभियान है जो प्रकृति संरक्षण, वृक्षारोपण और सतत भविष्य निर्माण के लिए समर्पित है।"}
          </p>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              alt="Nature"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>

            <span className="text-green-600 font-semibold tracking-wider uppercase">
              {lang === "en" ? "Who We Are" : "हम कौन हैं"}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
              {lang === "en"
                ? "Together We Can Save Earth 🌍"
                : "मिलकर हम धरती को बचा सकते हैं 🌍"}
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {lang === "en"
                ? "We work with volunteers, students, and local communities to spread environmental awareness and organize tree plantation drives across cities and villages."
                : "हम स्वयंसेवकों, छात्रों और समुदायों के साथ मिलकर पर्यावरण जागरूकता फैलाने और वृक्षारोपण अभियान चलाने का कार्य करते हैं।"}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-4xl font-bold text-green-700">
                  10K+
                </h3>
                <p className="text-gray-600 mt-2">
                  {lang === "en" ? "Trees Planted" : "लगाए गए पेड़"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-4xl font-bold text-green-700">
                  50+
                </h3>
                <p className="text-gray-600 mt-2">
                  {lang === "en" ? "Communities" : "समुदाय"}
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition-all">

            <div className="text-6xl">🎯</div>

            <h2 className="text-3xl font-bold text-green-700 mt-4">
              {lang === "en" ? "Our Mission" : "हमारा मिशन"}
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              {lang === "en"
                ? "To inspire every individual to plant trees, reduce pollution and actively contribute to environmental conservation."
                : "हर व्यक्ति को वृक्षारोपण, प्रदूषण नियंत्रण और पर्यावरण संरक्षण के लिए प्रेरित करना।"}
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition-all">

            <div className="text-6xl">🌎</div>

            <h2 className="text-3xl font-bold text-green-700 mt-4">
              {lang === "en" ? "Our Vision" : "हमारा विजन"}
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              {lang === "en"
                ? "A greener, healthier and pollution-free world for future generations."
                : "आने वाली पीढ़ियों के लिए हरित, स्वस्थ और प्रदूषण मुक्त दुनिया बनाना।"}
            </p>

          </div>

        </div>

      </section>

      {/* TEAM */}
      <section className="bg-green-50 py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            {lang === "en"
              ? "💚 Our Volunteers"
              : "💚 हमारे स्वयंसेवक"}
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            {lang === "en"
              ? "Passionate people creating positive environmental impact."
              : "पर्यावरण संरक्षण के लिए समर्पित प्रेरणादायक लोग।"}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              {
                name: "Rahul",
                roleEn: "Tree Plantation Leader",
                roleHi: "वृक्षारोपण प्रमुख",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Priya",
                roleEn: "Awareness Coordinator",
                roleHi: "जागरूकता समन्वयक",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Aman",
                roleEn: "Environment Activist",
                roleHi: "पर्यावरण कार्यकर्ता",
                img: "https://randomuser.me/api/portraits/men/67.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto border-4 border-green-600"
                />

                <h3 className="mt-5 text-2xl font-bold text-green-700">
                  {member.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {lang === "en" ? member.roleEn : member.roleHi}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PREMIUM CTA */}
      <section className="relative overflow-hidden py-28 px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-800 to-lime-500"></div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[40px] p-12 text-center shadow-2xl">

            <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-white font-semibold">
              🌍 Green Future Starts Today
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              {lang === "en"
                ? "Plant Hope, Grow Tomorrow 🌱"
                : "आशा बोएं, भविष्य उगाएं 🌱"}
            </h2>

            <p className="mt-6 text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              {lang === "en"
                ? "Join thousands of nature lovers and help create a cleaner, greener and healthier planet."
                : "हजारों प्रकृति प्रेमियों के साथ जुड़ें और एक स्वच्छ, हरित एवं स्वस्थ पृथ्वी के निर्माण में योगदान दें।"}
            </p>

            <button className="mt-10 bg-white text-green-700 px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:bg-yellow-100 transition-all duration-300 shadow-xl">
              {lang === "en"
                ? "🚀 Join The Movement"
                : "🚀 अभियान से जुड़ें"}
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;