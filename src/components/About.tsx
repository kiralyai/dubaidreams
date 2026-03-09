import { useEffect, useRef, useState } from "react";
import { Star, Clock, Shield, Compass } from "lucide-react";

const features = [
  { icon: Star, title: "Exclusive Access", desc: "VIP entry to Dubai's most sought-after venues and experiences" },
  { icon: Clock, title: "Premium Service", desc: "24/7 dedicated concierge support for your every need" },
  { icon: Shield, title: "Trusted Partner", desc: "Verified luxury providers with impeccable reputation" },
  { icon: Compass, title: "Tailored Experiences", desc: "Bespoke itineraries crafted for discerning clients" },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Main card */}
        <div
          className="glass-card rounded-2xl p-8 md:p-14 text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-xs tracking-[0.35em] text-muted-foreground mb-4 font-light">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">Your Plug in Dubai</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-4 max-w-2xl mx-auto text-sm md:text-base">
            Concierge DxB is your exclusive gateway to the extraordinary. We curate unforgettable luxury experiences across Dubai—from pristine supercars and private yachts to desert adventures and palatial accommodations.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            Whether you seek adrenaline, elegance, or complete privacy, our white-glove service ensures every detail is handled seamlessly.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-xl p-6 group hover:scale-[1.02] transition-transform duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
              }}
            >
              <div className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center mb-4">
                <f.icon size={18} className="text-foreground" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-foreground mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
