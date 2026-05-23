import { useLang } from "../context/LanguageContext";
import { Link } from "react-router-dom";

function Projects() {
  const { lang } = useLang();

  const projects = [
    {
      icon: "🌳",
      titleEn: "Tree Plantation Drive",
      titleHi: "वृक्षारोपण अभियान",
      descEn:
        "Organizing large-scale plantation drives in villages, schools, and cities.",
      descHi:
        "गाँवों, स्कूलों और शहरों में बड़े स्तर पर वृक्षारोपण अभियान चलाना.",
      link: "/tree-plantation",
    },

    {
      icon: "🏫",
      titleEn: "School Awareness Program",
      titleHi: "स्कूल जागरूकता कार्यक्रम",
      descEn:
        "Educating students about environment protection and sustainability.",
      descHi:
        "छात्रों को पर्यावरण संरक्षण और सतत विकास के बारे में जागरूक करना.",
      link: "/school-awareness",
    },

    {
      icon: "♻️",
      titleEn: "Clean Environment Campaign",
      titleHi: "स्वच्छ पर्यावरण अभियान",
      descEn:
        "Running cleanliness drives to reduce pollution and waste.",
      descHi:
        "प्रदूषण और कचरे को कम करने के लिए स्वच्छता अभियान चलाना.",
      link: "/clean-environment",
    },

    {
      icon: "🌍",
      titleEn: "Green City Mission",
      titleHi: "ग्रीन सिटी मिशन",
      descEn:
        "Making urban areas greener through plantation and awareness.",
      descHi:
        "वृक्षारोपण और जागरूकता के माध्यम से शहरों को हरित बनाना.",
      link: "/green-city",
    },

    {
      icon: "🌾",
      titleEn: "Rural Plantation Project",
      titleHi: "ग्रामीण वृक्षारोपण परियोजना",
      descEn:
        "Supporting farmers and villages with eco-friendly plantation drives.",
      descHi:
        "किसानों और गाँवों को पर्यावरण-अनुकूल वृक्षारोपण में सहयोग देना.",
      link: "/rural-plantation",
    },

    {
      icon: "🚯",
      titleEn: "Plastic Free Drive",
      titleHi: "प्लास्टिक मुक्त अभियान",
      descEn:
        "Encouraging people to reduce plastic usage for a cleaner Earth.",
      descHi:
        "स्वच्छ धरती के लिए लोगों को प्लास्टिक उपयोग कम करने के लिए प्रेरित करना.",
      link: "/plastic-free",
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold">
          {lang === "en"
            ? "🌱 Our Projects"
            : "🌱 हमारी परियोजनाएँ"}
        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
          {lang === "en"
            ? "Explore Greenverse initiatives focused on tree plantation, clean environment, and sustainable future 🌍"
            : "Greenverse की उन पहलों को देखें जो वृक्षारोपण, स्वच्छ पर्यावरण और सतत भविष्य पर केंद्रित हैं 🌍"}
        </p>

      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-6xl text-center">
                {project.icon}
              </div>

              <h2 className="text-2xl font-bold text-green-700 text-center mt-6">
                {lang === "en"
                  ? project.titleEn
                  : project.titleHi}
              </h2>

              <p className="mt-5 text-gray-600 text-center leading-relaxed">
                {lang === "en"
                  ? project.descEn
                  : project.descHi}
              </p>

              {/* LINK BUTTON */}
              <Link to={project.link}>
                <button className="mt-8 w-full bg-gradient-to-r from-green-700 to-green-500 text-white py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl transition duration-300">

                  {lang === "en"
                    ? "Learn More 🌱"
                    : "और जानें 🌱"}

                </button>
              </Link>

            </div>
          ))}

        </div>

      </section>

      {/* IMPACT SECTION */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-green-800">
            {lang === "en"
              ? "🌍 Our Environmental Impact"
              : "🌍 हमारा पर्यावरणीय प्रभाव"}
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-5xl font-extrabold text-green-700">10K+</h3>
              <p className="mt-4 text-gray-700">
                {lang === "en" ? "Trees Planted 🌳" : "लगाए गए पेड़ 🌳"}
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-5xl font-extrabold text-green-700">50+</h3>
              <p className="mt-4 text-gray-700">
                {lang === "en" ? "Villages Covered 🏡" : "कवर किए गए गाँव 🏡"}
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-5xl font-extrabold text-green-700">1K+</h3>
              <p className="mt-4 text-gray-700">
                {lang === "en" ? "Volunteers 👥" : "स्वयंसेवक 👥"}
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-5xl font-extrabold text-green-700">100+</h3>
              <p className="mt-4 text-gray-700">
                {lang === "en" ? "Campaigns 🌍" : "अभियान 🌍"}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          {lang === "en"
            ? "💚 Join Our Mission"
            : "💚 हमारे मिशन से जुड़ें"}
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          {lang === "en"
            ? "Together we can create a cleaner, greener, and healthier Earth."
            : "मिलकर हम एक स्वच्छ, हरित और स्वस्थ धरती बना सकते हैं।"}
        </p>

        <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-100 transition duration-300 shadow-lg">
          {lang === "en"
            ? "Become Volunteer 🤝"
            : "स्वयंसेवक बनें 🤝"}
        </button>

      </section>

    </div>
  );
}

export default Projects;