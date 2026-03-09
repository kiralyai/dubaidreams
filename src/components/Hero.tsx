import heroBanner from "@/assets/hero-banner.jpg";
import { ChevronDown } from "lucide-react";
import { openWhatsApp, HERO_MESSAGE } from "@/lib/whatsapp";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(220 20% 2.5% / 0.7) 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-6 text-gradient-silver">
          Concierge DxB
        </h1>
        <p className="text-xs md:text-sm tracking-[0.35em] text-muted-foreground font-light mb-10 leading-relaxed uppercase">
          Your Exclusive Gateway to Dubai's Finest Luxury Experiences
        </p>
        <button
          onClick={() => openWhatsApp(HERO_MESSAGE)}
          className="px-10 py-3.5 rounded-full border border-foreground/20 text-foreground text-xs tracking-[0.3em] font-medium hover:bg-foreground/10 hover:border-foreground/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(0_0%_100%/0.1)]"
        >
          BOOK NOW
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.3em] font-light">SCROLL</span>
        <ChevronDown size={16} className="animate-scroll-indicator" />
      </div>
    </section>
  );
};

export default Hero;
