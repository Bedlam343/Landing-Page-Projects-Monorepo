import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Badge>Student Marketplace Reimagined</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-[1.1]">
            Buy, Sell, & Trade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Within Your Campus
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            The exclusive marketplace for students. Verified .edu emails only.
            No platform fees. Safe meetup zones. Turn your dorm clutter into
            cash.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="accent">
              Start Selling <ArrowRight size={18} />
            </Button>
            <Button variant="secondary">Browse Items</Button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-white"
                >
                  Wait
                </div>
              ))}
            </div>
            <p>Trusted by students at 50+ universities</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Abstract 3D Composition Placeholder */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-10 w-48 h-64 bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-2xl rotate-6 z-20 flex flex-col gap-3"
            >
              <div className="w-full h-32 bg-slate-700 rounded-lg animate-pulse" />
              <div className="w-3/4 h-4 bg-slate-700 rounded" />
              <div className="w-1/2 h-4 bg-slate-700 rounded" />
              <div className="mt-auto flex justify-between">
                <div className="w-8 h-8 rounded-full bg-amber-400" />
                <div className="w-16 h-8 rounded bg-indigo-600" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-20 left-10 w-56 h-40 bg-slate-900/90 backdrop-blur rounded-xl border border-indigo-500/30 p-4 shadow-2xl -rotate-6 z-30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-500/20 rounded-full text-indigo-400">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-white font-bold">Verified Student</span>
              </div>
              <p className="text-slate-400 text-sm">
                Only verified .edu emails can join this transaction.
              </p>
            </motion.div>

            {/* Decorative blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-amber-400 rounded-full blur-[100px] opacity-20 z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
