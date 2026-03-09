import { useState, useEffect } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, getWhatsAppUrl, GENERAL_MESSAGE } from "@/lib/whatsapp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border border-border shadow-lg"
          : "bg-background/30 backdrop-blur-md border border-transparent"
      }`}
    >
      <span className="text-sm font-semibold tracking-[0.25em] text-foreground">CONCIERGE DXB</span>
      <div className="hidden md:flex items-center gap-8">
        {["services", "about", "contact"].map((section) => (
          <button key={section} onClick={() => scrollTo(section)} className="text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase font-medium">
            {section}
          </button>
        ))}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Instagram size={16} />
        </a>
        <a href={getWhatsAppUrl(GENERAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <MessageCircle size={16} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
