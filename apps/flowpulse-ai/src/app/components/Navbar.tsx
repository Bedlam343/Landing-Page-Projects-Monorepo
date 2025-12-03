import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="flex items-center gap-2 text-xl font-bold text-indigo-900">
              <Activity className="h-6 w-6 text-indigo-600" />
              FlowPulse AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Pricing
            </a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg"
        >
          <a href="#features" className="block text-gray-600 font-medium">
            Features
          </a>
          <a href="#pricing" className="block text-gray-600 font-medium">
            Pricing
          </a>
          <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
