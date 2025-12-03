const Footer = () => {
  return (
    <footer className="bg-brand-slate text-white py-12 pb-24 md:pb-12 border-t border-gray-800">
      <div
        className="container mx-auto text-center md:text-left grid 
        md:grid-cols-4 gap-8 px-6 md:px-8"
      >
        <div>
          <h3 className="text-xl font-bold mb-4 text-brand-mint">
            Bloom Dental Care
          </h3>
          <p className="text-gray-400 text-sm">
            Serving San Jose families with compassion and excellence since 2015.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>General Dentistry</li>
            <li>Cosmetic Veneers</li>
            <li>Invisalign</li>
            <li>Emergency Care</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          {/* TODO: Add Social Icons */}
          <p className="text-gray-400 text-sm">
            Follow us on social media for dental tips and updates.
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-12 border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} Bloom Dental Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
