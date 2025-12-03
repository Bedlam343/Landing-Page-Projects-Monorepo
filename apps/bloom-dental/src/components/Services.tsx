import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

// Service Data with specific grid spans for the "Bento" look
const services = [
  {
    title: 'General Dentistry',
    desc: 'Comprehensive exams, cleanings, and preventative care for long-term health.',
    image: '/images/general_dentistry.png',
    colSpan: 'md:col-span-2', // Wide card
  },
  {
    title: 'Cosmetic Veneers',
    desc: 'Transform your smile with custom-crafted porcelain veneers.',
    image: '/images/veneers.png',
    colSpan: 'md:col-span-1', // Standard card
  },
  {
    title: 'Invisalign',
    desc: 'Clear, comfortable aligners for a straighter smile without braces.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600',
    colSpan: 'md:col-span-1', // Standard card
  },
  {
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking solutions for missing teeth.',
    image: '/images/dental_implants.png',
    colSpan: 'md:col-span-1', // Standard card
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional in-office whitening for instant brightness.',
    image: '/images/smiling_man_white_teeth.jpg',
    colSpan: 'md:col-span-2', // Wide card
  },
  {
    title: 'Pediatric Care',
    desc: 'Gentle, fun, and fear-free dentistry for children of all ages.',
    image:
      'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600',
    colSpan: 'md:col-span-1', // Standard card
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-slate tracking-tight mb-4">
              World-Class{' '}
              <span className="text-brand-forest">Dental Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Experience modern dentistry designed for your comfort. From
              routine checkups to complex restorations, we do it all under one
              roof.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 font-bold text-brand-forest hover:text-brand-mint transition-colors"
          >
            View Full Service Menu <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${service.colSpan}`}
            >
              {/* Background Image with Zoom Effect */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient Overlay - Always visible but gets darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content Positioned at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-mint transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-2 border-brand-mint/0 group-hover:border-brand-mint/50 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-brand-forest"
          >
            View Full Service Menu <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
