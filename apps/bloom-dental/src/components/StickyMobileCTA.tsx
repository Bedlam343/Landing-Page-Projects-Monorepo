import { Phone, Calendar } from 'lucide-react';

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden flex gap-3">
      <a
        href="tel:4085550192"
        className="flex-1 bg-white text-brand-slate border-2 border-brand-slate/10 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2"
      >
        <Phone size={18} /> Call
      </a>
      <a
        href="#contact"
        className="flex-[2] bg-brand-forest text-white py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2"
      >
        <Calendar size={18} /> Book Now
      </a>
    </div>
  );
};

export default StickyMobileCTA;
