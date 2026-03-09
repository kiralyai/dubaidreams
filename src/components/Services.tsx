import { useEffect, useRef, useState } from "react";
import { Car, Ship, Plane, Mountain, Hotel, Home } from "lucide-react";
import { openWhatsApp, SERVICE_MESSAGES } from "@/lib/whatsapp";

import carImg from "@/assets/service-car-rentals.png";
import yachtImg from "@/assets/service-private-yachts.jpg";
import jetImg from "@/assets/service-private-jets.jpg";
import desertImg from "@/assets/service-desert-adventures.jpg";
import hotelImg from "@/assets/service-luxury-hotels.jpg";
import villaImg from "@/assets/service-villa.jpg";

const services = [
  { title: "Luxury Car Rentals", desc: "Experience Dubai in the world's most prestigious vehicles", img: carImg, icon: Car },
  { title: "Private Yachts", desc: "Cruise the Arabian Gulf in ultimate luxury", img: yachtImg, icon: Ship },
  { title: "Private Jet Bookings", desc: "Travel without limits, arrive in style", img: jetImg, icon: Plane },
  { title: "Desert Adventures", desc: "Private desert journeys with premium comfort", img: desertImg, icon: Mountain },
  { title: "Luxury Hotels", desc: "Access Dubai's most iconic stays", img: hotelImg, icon: Hotel },
  { title: "Exclusive Villas", desc: "Handpicked private villas with concierge support", img: villaImg, icon: Home },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="service-card group glass-card rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      <div className="relative h-56 overflow-hidden">
        <img ref={imgRef} src={service.img} alt={service.title} loading="lazy" className={`service-card-image w-full h-full object-cover ${visible ? "unzoomed" : ""}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center">
          <service.icon size={15} className="text-foreground" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold tracking-wide text-foreground mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground mb-5 font-light leading-relaxed">{service.desc}</p>
        <button
          onClick={() => openWhatsApp(SERVICE_MESSAGES[service.title] || "")}
          className="text-xs tracking-[0.25em] font-medium text-foreground border border-foreground/15 rounded-full px-6 py-2.5 hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-400 hover:shadow-[0_0_20px_hsl(0_0%_100%/0.06)]"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

const Services = () => (
  <section id="services" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.35em] text-muted-foreground mb-3 font-light">WHAT WE OFFER</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
      </div>
    </div>
  </section>
);

export default Services;
