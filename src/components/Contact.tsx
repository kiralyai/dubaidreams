import { useEffect, useRef, useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, getWhatsAppUrl, GENERAL_MESSAGE } from "@/lib/whatsapp";

const Contact = () => {
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
    <section id="contact" className="py-24 md:py-32 px-6" ref={ref}>
      <div
        className="max-w-2xl mx-auto text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-xs tracking-[0.35em] text-muted-foreground mb-3 font-light">GET IN TOUCH</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">Let's Create Magic</h2>
        <p className="text-sm text-muted-foreground font-light mb-10 max-w-lg mx-auto leading-relaxed">
          Ready for an extraordinary experience? Reach out and let us curate your perfect Dubai adventure.
        </p>

        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground font-light focus:outline-none focus:border-foreground/20 transition-colors" />
          <input type="email" placeholder="Your Email" className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground font-light focus:outline-none focus:border-foreground/20 transition-colors" />
          <textarea rows={4} placeholder="Tell us about your dream experience..." className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground font-light focus:outline-none focus:border-foreground/20 transition-colors resize-none" />
          <button type="submit" className="w-full py-4 rounded-xl bg-foreground text-primary-foreground text-xs tracking-[0.25em] font-semibold hover:bg-foreground/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(0_0%_100%/0.15)]">
            SEND MESSAGE
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-8">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-xs tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300">
            <Instagram size={14} /> INSTAGRAM
          </a>
          <a href={getWhatsAppUrl(GENERAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-xs tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300">
            <MessageCircle size={14} /> WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
