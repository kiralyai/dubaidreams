import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="noise-overlay">
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s ease 0.1s" }}>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
