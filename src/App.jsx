import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Blog from "./pages/Blog";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleTariff from "./pages/VehicleTariff";
import PackageDetails from "./pages/PackageDetails";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/vehicle/:id" element={<VehicleDetails />} />
        <Route path="/tariff/:id" element={<VehicleTariff />} />

        <Route
          path="/packages/:packageId"
          element={<PackageDetails />}
        />
      </Routes>

      <Footer />

      <a
        href="https://wa.me/8800770603?text=Hello%20Krishna%20Tour%20India,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default App;