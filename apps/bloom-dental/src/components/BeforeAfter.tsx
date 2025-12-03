'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <section className="py-20 bg-brand-slate text-white">
      <div
        className="container mx-auto px-6 sm:px-8 grid lg:grid-cols-2 
        gap-6 sm:gap-12 items-center"
      >
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center
            lg:text-left"
          >
            Real Results, Real Smiles
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            See the difference our cosmetic treatments make. From whitening to
            full restorative work, we transform smiles.
          </p>
        </div>

        <ReactCompareSlider
          itemOne={
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <Image
                src="/images/teeth_before.png"
                alt="Teeth before treatment"
                fill
                className="object-cover animate-in fade-in duration-500"
              />
            </div>
          }
          itemTwo={
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <Image
                src="/images/teeth_after.png"
                alt="Teeth after treatment"
                fill
                className="object-cover animate-in fade-in duration-500"
              />
            </div>
          }
        />
      </div>
    </section>
  );
};

export default BeforeAfter;
