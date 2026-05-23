import { useLang } from "../context/LanguageContext";

function Gallery() {
  const { lang } = useLang();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      titleEn: "Tree Plantation Drive",
      titleHi: "वृक्षारोपण अभियान",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      titleEn: "Forest Protection",
      titleHi: "वन संरक्षण",
    },
    {
      src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
      titleEn: "Nature Awareness",
      titleHi: "प्रकृति जागरूकता",
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
      titleEn: "Green Earth Mission",
      titleHi: "ग्रीन अर्थ मिशन",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      titleEn: "Environment Campaign",
      titleHi: "पर्यावरण अभियान",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      titleEn: "Volunteer Activities",
      titleHi: "स्वयंसेवक गतिविधियाँ",
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white text-center py-24 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold">

          {lang === "en"
            ? "📸 Greenverse Gallery"
            : "📸 Greenverse गैलरी"}

        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">

          {lang === "en"
            ? "Explore our plantation drives, awareness campaigns, and environmental activities 🌱"
            : "हमारे वृक्षारोपण अभियान, जागरूकता कार्यक्रम और पर्यावरण गतिविधियों को देखें 🌱"}

        </p>

      </section>

      {/* GALLERY SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={img.src}
                  alt={lang === "en" ? img.titleEn : img.titleHi}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6 text-center">

                <h2 className="text-2xl font-bold text-green-700">

                  {lang === "en"
                    ? img.titleEn
                    : img.titleHi}

                </h2>

                <p className="mt-3 text-gray-600">

                  {lang === "en"
                    ? "Together we are making Earth greener 🌍"
                    : "मिलकर हम धरती को हरा-भरा बना रहे हैं 🌍"}

                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-green-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <h2 className="text-5xl font-extrabold text-green-700">
              10K+
            </h2>

            <p className="mt-4 text-gray-700 text-lg">

              {lang === "en"
                ? "Trees Planted 🌳"
                : "लगाए गए पेड़ 🌳"}

            </p>

          </div>

          <div className="bg-green-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <h2 className="text-5xl font-extrabold text-green-700">
              50+
            </h2>

            <p className="mt-4 text-gray-700 text-lg">

              {lang === "en"
                ? "Awareness Campaigns 🌍"
                : "जागरूकता अभियान 🌍"}

            </p>

          </div>

          <div className="bg-green-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <h2 className="text-5xl font-extrabold text-green-700">
              1K+
            </h2>

            <p className="mt-4 text-gray-700 text-lg">

              {lang === "en"
                ? "Volunteers 💚"
                : "स्वयंसेवक 💚"}

            </p>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">

          {lang === "en"
            ? "🌱 Join Our Green Mission"
            : "🌱 हमारे ग्रीन मिशन से जुड़ें"}

        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">

          {lang === "en"
            ? "Every tree planted today creates a better tomorrow."
            : "आज लगाया गया हर पेड़ बेहतर कल बनाता है।"}

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

export default Gallery;