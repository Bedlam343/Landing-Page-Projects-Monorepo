'use client';

import TechDeepDive from './components/TechDeepDive';
import Footer from './components/Footer';
import FAQ from './components/Faq';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <TechDeepDive />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
