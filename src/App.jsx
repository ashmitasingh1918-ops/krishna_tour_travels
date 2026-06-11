import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Fleet from "./pages/Fleet";
// import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar />

       <Home />
       {/* <About />
       <Fleet />
       <Contact /> */}

      <Footer />
    </>
  );
}

export default App;