
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import SpecialOffers from "./components/SpecialOffers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f3ed]">
     
      <Navbar />
<main className="pt-[76px]"></main>
      <main>
        
        <Hero />
        <About />
        <Menu />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
