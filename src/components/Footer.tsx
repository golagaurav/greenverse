import { useLang } from "../context/LanguageContext";
import { Link } from "react-router-dom";

function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-gradient-to-r from-green-950 via-green-900 to-green-800 text-white mt-10">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        {/* NGO INFO */}
        <div>

          <h2 className="text-3xl font-extrabold text-green-400">
            🌱 Greenverse NGO
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            {lang === "en"
              ? "Together we can create a greener, cleaner and healthier Earth for future generations."
              : "मिलकर हम आने वाली पीढ़ियों के लिए धरती को अधिक हरा-भरा और स्वच्छ बना सकते हैं।"}
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-2xl font-bold text-green-300 mb-4">
            {lang === "en" ? "Quick Links" : "त्वरित लिंक"}
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">

            <Link
              to="/"
              className="hover:text-green-400 transition duration-300"
            >
              {lang === "en" ? "Home" : "होम"}
            </Link>

            <Link
              to="/about"
              className="hover:text-green-400 transition duration-300"
            >
              {lang === "en" ? "About" : "हमारे बारे में"}
            </Link>

            <Link
              to="/projects"
              className="hover:text-green-400 transition duration-300"
            >
              {lang === "en" ? "Projects" : "प्रोजेक्ट्स"}
            </Link>

            <Link
              to="/gallery"
              className="hover:text-green-400 transition duration-300"
            >
              {lang === "en" ? "Gallery" : "गैलरी"}
            </Link>

            <Link
              to="/contact"
              className="hover:text-green-400 transition duration-300"
            >
              {lang === "en" ? "Contact" : "संपर्क"}
            </Link>

          </div>

        </div>

        {/* CTA */}
        <div>

          <h3 className="text-2xl font-bold text-green-300 mb-4">
            {lang === "en" ? "Support Us" : "हमारा सहयोग करें"}
          </h3>

          <p className="text-gray-300 mb-5">
            {lang === "en"
              ? "Become a volunteer or donate to support our mission."
              : "हमारे मिशन को समर्थन देने के लिए स्वयंसेवक बनें या दान करें।"}
          </p>

          <Link
            to="/donate"
            className="inline-block bg-green-400 text-black font-bold px-6 py-3 rounded-full hover:bg-green-300 hover:scale-105 transition duration-300 shadow-lg"
          >
            {lang === "en"
              ? "Donate Now 💚"
              : "अभी दान करें 💚"}
          </Link>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-green-700 py-4 text-center text-gray-400 text-sm px-4">

        © 2026 Greenverse NGO |
        {" "}
        {lang === "en"
          ? "All Rights Reserved 🌍"
          : "सर्वाधिकार सुरक्षित 🌍"}

      </div>

    </footer>
  );
}

export default Footer;