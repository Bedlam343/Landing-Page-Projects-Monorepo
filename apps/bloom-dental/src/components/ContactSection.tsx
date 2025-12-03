'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus('success');
    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div
        className="container mx-auto grid lg:grid-cols-2 gap-16
            px-6 sm:px-8"
      >
        {/* Contact Form */}
        <div>
          <h2
            className="text-3xl font-bold text-brand-slate mb-6
              text-center md:text-left"
          >
            Request an Appointment
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we will contact you to confirm your
            appointment time.
          </p>

          {status === 'success' ? (
            <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-green-800">
              <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
              <p>
                Thank you. Our front desk will call you shortly to confirm
                details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/50 outline-none"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/50 outline-none"
                />
              </div>
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/50 outline-none"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="How can we help? (e.g. Checkup, Toothache, Implant)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/50 outline-none"
              ></textarea>

              {/* Spam Honeypot (hidden) */}
              <input type="text" name="website" className="hidden" />

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-brand-forest text-white font-bold py-4 rounded-xl hover:bg-green-900 transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Send Request'
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please call us instead.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Map & Info */}
        <div className="space-y-8">
          <div className="bg-brand-gray p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-brand-slate mb-4">
              Clinic Information
            </h3>
            <p className="mb-2">
              <strong>Address:</strong> 123 Dental Way, San Jose, CA 95112
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (408) 555-0192
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@bloomdental-demo.com
            </p>

            <h4 className="font-bold mb-2 mt-6">Hours:</h4>
            <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p className="text-sm text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
            <p className="text-sm text-gray-600">Sun: Closed</p>
          </div>

          {/* Map Placeholder */}
          <div className="h-[300px] w-full rounded-2xl overflow-hidden bg-gray-200 relative">
            {/* TODO: Replace src with real Google Maps Embed URL */}
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-121.88632868467422!3d37.33820819520111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc9999999999%3A0x9999999999999999!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              title="Bloom Dental Care Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
