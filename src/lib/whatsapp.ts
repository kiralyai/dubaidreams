export const WHATSAPP_NUMBER = "971524511328";
export const INSTAGRAM_URL = "https://www.instagram.com/dxb_concierge";

export const SERVICE_MESSAGES: Record<string, string> = {
  "Luxury Car Rentals": "Hi Concierge DxB, I'm interested in Luxury Car Rentals. Please share availability and pricing.",
  "Private Yachts": "Hi Concierge DxB, I'm interested in Private Yacht Booking. Please share yacht options, duration, and pricing.",
  "Private Jet Bookings": "Hi Concierge DxB, I'm interested in Private Jet Booking. Please share aircraft options and pricing.",
  "Desert Adventures": "Hi Concierge DxB, I'm interested in a Desert Adventure. Please share packages and pricing.",
  "Luxury Hotels": "Hi Concierge DxB, I'm interested in Luxury Hotels. Please share recommendations and rates.",
  "Exclusive Villas": "Hi Concierge DxB, I'm interested in an Exclusive Villa. Please share options and pricing.",
};

export const HERO_MESSAGE = "Hi Concierge DxB, I'd like to book a luxury experience in Dubai. Please contact me.";
export const GENERAL_MESSAGE = "Hi Concierge DxB, I have a question about your services.";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
