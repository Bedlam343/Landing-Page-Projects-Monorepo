import { Activity, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-50 py-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Activity className="h-6 w-6 text-indigo-600" />
        <span className="font-bold text-gray-900">FlowPulse AI</span>
      </div>
      <p className="text-gray-500 text-sm">
        © 2025 FlowPulse AI. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-gray-500 hover:text-indigo-600">
          Twitter
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600">
          LinkedIn
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600">
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
