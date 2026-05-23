import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

import TreePlantation from "./pages/projects/TreePlantation";
import SchoolAwareness from "./pages/projects/SchoolAwareness";
import CleanEnvironment from "./pages/projects/CleanEnvironment";
import GreenCity from "./pages/projects/GreenCity";
import RuralPlantation from "./pages/projects/RuralPlantation";
import PlasticFree from "./pages/projects/PlasticFree";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>

      <BrowserRouter>

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="pt-20 min-h-screen flex flex-col">

          <div className="flex-grow">

            <Routes>

              {/* MAIN PAGES */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />

              {/* PROJECT DETAIL PAGES */}
              <Route path="/tree-plantation" element={<TreePlantation />} />
              <Route path="/school-awareness" element={<SchoolAwareness />} />
              <Route path="/clean-environment" element={<CleanEnvironment />} />
              <Route path="/green-city" element={<GreenCity />} />
              <Route path="/rural-plantation" element={<RuralPlantation />} />
              <Route path="/plastic-free" element={<PlasticFree />} />

            </Routes>

          </div>

          {/* FOOTER */}
          <Footer />

        </div>

      </BrowserRouter>

    </LanguageProvider>
  );
}

export default App;