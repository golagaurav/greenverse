import { useLang } from "../context/LanguageContext";

function Contact() {
  const { lang } = useLang();

  return (
    <div className="bg-green-50 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold">

          {lang === "en"
            ? "📞 Contact Greenverse"
            : "📞 Greenverse से संपर्क करें"}

        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">

          {lang === "en"
            ? "Have questions, ideas, or want to join our mission? We'd love to hear from you 🌱"
            : "कोई सवाल, सुझाव या हमारे मिशन से जुड़ना चाहते हैं? हम आपसे सुनना पसंद करेंगे 🌱"}

        </p>

      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>

            <h2 className="text-4xl font-bold text-green-800">

              {lang === "en"
                ? "Let's Connect 💚"
                : "आइए जुड़ें 💚"}

            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">

              {lang === "en"
                ? "Greenverse welcomes volunteers, supporters, students, and organizations to work together for a greener future."
                : "Greenverse स्वयंसेवकों, समर्थकों, छात्रों और संगठनों का स्वागत करता है ताकि हम मिलकर हरित भविष्य बना सकें।"}

            </p>

            {/* CONTACT CARDS */}
            <div className="mt-10 space-y-6">

              <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">

                <h3 className="text-2xl font-bold text-green-700">
                  📍 {lang === "en" ? "Address" : "पता"}
                </h3>

                <p className="mt-2 text-gray-600">
                  Greenverse NGO, Sikandrabad, Bulandshahr, Uttar Pradesh, India
                </p>

              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">

                <h3 className="text-2xl font-bold text-green-700">
                  📧 Email
                </h3>

                <p className="mt-2 text-gray-600">
                  support@greenverse.org
                </p>

              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">

                <h3 className="text-2xl font-bold text-green-700">
                  📱 {lang === "en" ? "Phone" : "फ़ोन"}
                </h3>

                <p className="mt-2 text-gray-600">
                  +91 9720206082
                </p>

              </div>

            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="bg-white shadow-2xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-700 text-center">

              {lang === "en"
                ? "Send Us Message"
                : "हमें संदेश भेजें"}

            </h2>

            <form className="mt-8 flex flex-col gap-5">

              <input
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                type="text"
                placeholder={
                  lang === "en"
                    ? "Your Name"
                    : "आपका नाम"
                }
              />

              <input
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                type="email"
                placeholder={
                  lang === "en"
                    ? "Your Email"
                    : "आपका ईमेल"
                }
              />

              <input
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                type="text"
                placeholder={
                  lang === "en"
                    ? "Subject"
                    : "विषय"
                }
              />

              <textarea
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                rows={6}
                placeholder={
                  lang === "en"
                    ? "Your Message"
                    : "आपका संदेश"
                }
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-green-500 text-white py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition duration-300"
              >

                {lang === "en"
                  ? "Send Message 🚀"
                  : "संदेश भेजें 🚀"}

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* MAP / CTA SECTION */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">

          {lang === "en"
            ? "🌍 Together We Can Make Earth Green"
            : "🌍 मिलकर धरती को हरा-भरा बनाएं"}

        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">

          {lang === "en"
            ? "Every volunteer and every tree makes a difference."
            : "हर स्वयंसेवक और हर पेड़ बदलाव लाता है।"}

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

export default Contact;