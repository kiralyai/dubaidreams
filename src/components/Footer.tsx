import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, getWhatsAppUrl, GENERAL_MESSAGE } from "@/lib/whatsapp";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold tracking-[0.25em] text-foreground mb-1">CONCIERGE DXB</h3>
            <p className="text-xs text-muted-foreground font-light">Your Luxury Gateway to Dubai</p>
          </div>
          <div className="flex items-center gap-8">
            {["services", "about", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors uppercase font-medium">
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={16} />
            </a>
            <a href={getWhatsAppUrl(GENERAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground font-light">© 2026 Concierge DxB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
