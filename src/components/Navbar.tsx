import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, toggleLang } = useLang();

  const menuItems = [
    {
      path: "/",
      en: "Home",
      hi: "होम",
    },
    {
      path: "/about",
      en: "About",
      hi: "हमारे बारे में",
    },
    {
      path: "/projects",
      en: "Projects",
      hi: "परियोजनाएँ",
    },
    {
      path: "/gallery",
      en: "Gallery",
      hi: "गैलरी",
    },
    {
      path: "/donate",
      en: "Donate",
      hi: "दान करें",
    },
    {
      path: "/contact",
      en: "Contact",
      hi: "संपर्क",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-900 shadow-xl py-3"
          : "bg-green-700 py-4"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold hover:opacity-90"
        >
          🌱 Greenverse NGO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition hover:text-yellow-300 ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : ""
                }`
              }
            >
              {lang === "en" ? item.en : item.hi}
            </NavLink>
          ))}

          <button
            onClick={toggleLang}
            className="bg-white text-green-700 px-3 py-1 rounded-full font-bold hover:bg-yellow-200 transition"
          >
            {lang === "en" ? "हिंदी" : "EN"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-800 flex flex-col gap-4 px-6 transition-all duration-300 ${
          open
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : ""
            }
          >
            {lang === "en" ? item.en : item.hi}
          </NavLink>
        ))}

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