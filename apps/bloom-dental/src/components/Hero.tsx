import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative bg-brand-gray pt-12 pb-20 md:pt-24 
      md:pb-32 overflow-hidden px-6 sm:px-8"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-brand-mint/50">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-brand-slate">
              4.9 Google Rating • 1,400+ Patients
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-slate leading-tight">
            Bloom Dental Care – Family Dentist in{' '}
            <span className="text-brand-forest">San Jose</span>
          </h1>

          <p className="text-lg text-gray-600 md:max-w-md">
            Gentle, modern dentistry for the whole family. From checkups to
            cosmetic makeovers, we make your smile our priority.
          </p>

          <div className="flex flex-col xl:flex-row gap-4 pt-4">
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 hover:bg-green-900
              text-white px-8 py-4 rounded-xl font-bold text-lg 
              transition shadow-xl hover:translate-y-[-2px] bg-brand-forest"
            >
              <Calendar size={20} /> Book Appointment
            </Link>
            <a
              href="tel:4085550192"
              className="flex items-center justify-center gap-2 bg-white text-brand-slate border-2 border-brand-slate/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition"
            >
              <Phone size={20} /> (408) 555-019X
            </a>
          </div>

          {/* Insurance Logos Placeholder */}
          <div className="pt-8 opacity-70">
            <p className="text-sm text-gray-700 mb-3 select-none">
              We accept most major insurance plans:
            </p>
            <div className="flex gap-6 grayscale select-none">
              {/* TODO: Replace with real SVG logos */}
              <div className="font-bold text-gray-600">DELTA</div>
              <div className="font-bold text-gray-600">CIGNA</div>
              <div className="font-bold text-gray-600">AETNA</div>
              <div className="font-bold text-gray-600">METLIFE</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <Image
            src="/images/girls_smiling.png"
            alt="Friendly dentist treating a patient at Bloom Dental Care"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Decorative Blob */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-mint rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
