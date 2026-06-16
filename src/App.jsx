import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import VehicleDetails from "./pages/VehicleDetails";
import PackageDetails from "./pages/PackageDetails.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vehicle-details" element={<VehicleDetails />} />
        <Route path="/packages/:packageId" element={<PackageDetails />}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;