import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import Reviews from '@/components/Reviews';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Home = () => {
  // JSON-LD for LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Bloom Dental Care',
    image: 'https://www.bloomdentalcare-demo.com/clinic-interior.jpg', // TODO: Replace
    telephone: '(408) 555-0192',
    url: 'https://www.bloomdentalcare-demo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Dental Way',
      addressLocality: 'San Jose',
      addressRegion: 'CA',
      postalCode: '95112',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.3382,
      longitude: -121.8863,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
  };

  return (
    <main className="min-h-screen">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <Reviews />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Home;
