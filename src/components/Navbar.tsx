import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, toggleLang } = useLang();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-green-900 shadow-xl py-3"
          : "bg-green-700 py-4"
      }
      text-white`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          🌱 Greenverse NGO
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          <Link className="hover:text-yellow-300 transition" to="/">
            {lang === "en" ? "Home" : "होम"}
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/about">
            {lang === "en" ? "About" : "हमारे बारे में"}
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/projects">
            {lang === "en" ? "Projects" : "परियोजनाएँ"}
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/gallery">
            {lang === "en" ? "Gallery" : "गैलरी"}
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/donate">
            {lang === "en" ? "Donate" : "दान करें"}
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/contact">
            {lang === "en" ? "Contact" : "संपर्क"}
          </Link>

          {/* Language Button */}
          <button
            onClick={toggleLang}
            className="bg-white text-green-700 px-3 py-1 rounded-full font-bold hover:bg-yellow-200 transition"
          >
            {lang === "en" ? "हिंदी" : "EN"}
          </button>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-800 flex flex-col gap-4 px-6 py-4 transition-all duration-300
        ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >

        <Link onClick={closeMenu} to="/">
          {lang === "en" ? "Home" : "होम"}
        </Link>

        <Link onClick={closeMenu} to="/about">
          {lang === "en" ? "About" : "हमारे बारे में"}
        </Link>

        <Link onClick={closeMenu} to="/projects">
          {lang === "en" ? "Projects" : "परियोजनाएँ"}
        </Link>

        <Link onClick={closeMenu} to="/gallery">
          {lang === "en" ? "Gallery" : "गैलरी"}
        </Link>

        <Link onClick={closeMenu} to="/donate">
          {lang === "en" ? "Donate" : "दान करें"}
        </Link>

        <Link onClick={closeMenu} to="/contact">
          {lang === "en" ? "Contact" : "संपर्क"}
        </Link>

        {/* Mobile Language Button */}
        <button
          onClick={toggleLang}
          className="bg-white text-green-700 px-3 py-2 rounded-full font-bold"
        >
          {lang === "en" ? "हिंदी" : "EN"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;