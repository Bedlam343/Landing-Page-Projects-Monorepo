// File: components/Reviews.tsx
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah J.',
    text: 'Best dentist in San Jose! The staff is so welcoming and Dr. Bloom explained everything clearly.',
    date: '2 weeks ago',
  },
  {
    name: 'Mike T.',
    text: 'I was terrified of the dentist until I came here. The sedation options made my root canal a breeze.',
    date: '1 month ago',
  },
  {
    name: 'Elena R.',
    text: 'My Invisalign results are amazing. Highly recommend their cosmetic team!',
    date: '3 months ago',
  },
  {
    name: 'David K.',
    text: 'Brought my two kids (5 and 8) here. The pediatric room is great, and they actually enjoyed the visit.',
    date: '1 week ago',
  },
  {
    name: 'Priya M.',
    text: 'Transparent billing, no hidden fees. Finally found a dentist I can trust with my insurance.',
    date: '2 months ago',
  },
  {
    name: 'James L.',
    text: 'Had a dental emergency on a Sunday. They got me in first thing Monday morning. Lifesavers!',
    date: '4 months ago',
  },
  {
    name: 'Anita S.',
    text: 'The office is stunningly clean and modern. Watching Netflix during my cleaning was a nice touch.',
    date: '3 weeks ago',
  },
  {
    name: 'Robert B.',
    text: "Professional, efficient, and gentle. I've done two implants here and the recovery was faster than expected.",
    date: '5 months ago',
  },
  {
    name: 'Lisa W.',
    text: 'Gentle hygienists! Usually I dread cleanings due to sensitivity, but this was completely pain-free.',
    date: '1 month ago',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-brand-gray/30 overflow-hidden">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-brand-slate mb-4">
          What Our Patients Say
        </h2>
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-brand-mint/50">
          <span className="font-bold text-brand-forest">4.9/5.0</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-600">
            Based on 450+ Google Reviews
          </span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient Masks (Fade edges) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none md:w-40"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none md:w-40"></div>

        {/* Scrolling Track */}
        {/* We map the reviews TWICE to create the seamless loop. 
            The animation translates X to -50% (the end of the first set) then resets instantly. */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-6">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white
               p-6 rounded-2xl shadow-sm border border-gray-100 
               hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} fill="currentColor" size={16} />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed line-clamp-3">
                  &quot;{r.text}&quot;
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <span className="font-bold text-brand-slate text-sm">
                  {r.name}
                </span>
                <span className="text-xs text-brand-forest/80 flex items-center gap-1 bg-brand-mint/20 px-2 py-1 rounded-full">
                  <CheckCircle2 size={12} /> Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-brand-forest font-bold hover:underline"
        >
          Read all 450+ reviews on Google Maps →
        </a>
      </div>
    </section>
  );
}
