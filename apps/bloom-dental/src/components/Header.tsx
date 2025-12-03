import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-sm border-b
     border-gray-100"
    >
      <div
        className="container mx-auto flex items-center justify-between 
        h-20 px-6 sm:px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder Icon */}
          <div className="w-8 h-8 bg-brand-forest rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="text-xl font-bold text-brand-forest tracking-tight">
            Bloom Dental Care
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-brand-slate">
          <Link href="#services" className="hover:text-brand-forest transition">
            Services
          </Link>
          <Link href="#reviews" className="hover:text-brand-forest transition">
            Reviews
          </Link>
          <Link href="#contact" className="hover:text-brand-forest transition">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:408555019X"
            className="flex items-center gap-2 text-brand-forest font-semibold"
          >
            <Phone size={18} /> (408) 555-019X
          </a>
          <Link
            href="#contact" // Or Calendly Modal trigger
            className="bg-brand-forest text-white px-6 py-2.5 rounded-lg 
            font-bold hover:bg-green-900 transition shadow-lg 
            shadow-brand-mint/50"
          >
            Book Online
          </Link>
        </div>

        {/* Mobile Menu Icon (Placeholder for functionality) */}
        <button className="lg:hidden text-brand-forest" aria-label="Open Menu">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
