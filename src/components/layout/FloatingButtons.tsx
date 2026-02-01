import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "919082882276";
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in your tax consultation services. Please provide more details."
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button (Steady) */}
      <a
        href="tel:+919082882276"
        className="w-14 h-14 rounded-full bg-gold text-navy-dark flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300 hover:shadow-gold-lg"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
