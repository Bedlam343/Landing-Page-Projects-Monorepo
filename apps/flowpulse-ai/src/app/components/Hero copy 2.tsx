import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Slack,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
  Search,
  Zap,
  ShieldAlert,
  Activity,
} from 'lucide-react';
import Image from 'next/image';
import StreamingText from './ui/StreamingText';

// --- Helper: Typewriter Effect for Search Bar ---
const SearchSimulator = () => {
  const [text, setText] = useState('');

  return (
    <span className="text-gray-500 text-xs flex items-center">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-3 bg-indigo-500 ml-0.5"
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Your Engineering Team’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              AI Chief of Staff.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Turn noisy activity from GitHub, Slack, and Linear into a clear
            daily briefing.
            <span className="block text-gray-900 font-medium mt-1">
              No status meetings. No micromanagement.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-transform hover:scale-105 shadow-xl shadow-indigo-200">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors">
              View Live Demo
            </button>
          </div>
        </motion.div>

        {/* --- Animated Dashboard Mockup --- */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full"></div>

          {/* Main App Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-20 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Window Chrome / Header */}
            <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                {/* LOGO ADDED HERE */}
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-indigo-600" />
                  <span className="font-bold text-gray-900 text-sm">
                    FlowPulse AI
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md border border-gray-100 w-64">
                <Search className="h-3 w-3 text-gray-400" />
                <SearchSimulator />
              </div>

              {/* Right Side: Spacer/Profile (optional) */}
              <div className="w-10"></div>
            </div>

            {/* Dashboard Canvas */}
            <div className="p-6 md:p-8 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* COLUMN 1: METRICS */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 px-1">
                    <TrendingUp className="h-4 w-4 text-indigo-500" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Team Velocity
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm h-full hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-600 font-medium text-sm">
                        Sprint Progress
                      </span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded"
                      >
                        +12%
                      </motion.span>
                    </div>
                    {/* Velocity Bars Animation */}
                    <div className="flex items-end gap-2 h-32">
                      {[40, 60, 50, 80, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            ease: 'easeOut',
                          }}
                          className={`w-1/5 rounded-t-sm ${
                            i === 4 ? 'bg-indigo-600' : 'bg-indigo-100'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-50 flex justify-between">
                      <span>42 PRs merged</span>
                      <span className="text-gray-300">3d left</span>
                    </p>
                  </div>
                </div>

                {/* COLUMN 2: AI SUMMARY (Streaming Text) */}
                <div className="flex flex-col gap-3 md:col-span-1">
                  <div className="flex items-center gap-2 px-1">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      AI Executive Brief
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-0 border border-gray-100 shadow-sm overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                      <span className="font-semibold text-gray-900 text-sm">
                        Daily Pulse
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">
                        GEN: 9:03 AM
                      </span>
                    </div>
                    <div className="p-5 space-y-4">
                      {/* Streaming Insight 1 */}
                      <div className="flex gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900 font-semibold mb-1">
                            Checkout Refactor
                          </p>
                          <StreamingText
                            text="Momentum is high. 4 critical PRs were merged by the frontend team this morning."
                            delay={1}
                          />
                        </div>
                      </div>
                      {/* Streaming Insight 2 */}
                      <div className="flex gap-3">
                        <div className="mt-1">
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900 font-semibold mb-1">
                            API Blocker
                          </p>
                          <StreamingText
                            text='Backend team has flagged 12 "Auth Errors" in Slack #dev-ops channel.'
                            delay={2.5}
                          />
                        </div>
                      </div>

                      {/* Live Source Fluctuations */}
                      <div className="pt-4 mt-2 border-t border-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-gray-400 font-bold tracking-wider">
                            LIVE INGESTION
                          </span>
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { color: 'bg-gray-800', width: '60%' },
                            { color: 'bg-[#4A154B]', width: '40%' },
                            { color: 'bg-[#5E51D8]', width: '25%' },
                          ].map((bar, i) => (
                            <div
                              key={i}
                              className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden"
                            >
                              <motion.div
                                initial={{ width: bar.width }}
                                animate={{
                                  width: [
                                    bar.width,
                                    `${parseInt(bar.width) + 15}%`,
                                    bar.width,
                                  ],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2 + i,
                                  ease: 'easeInOut',
                                }}
                                className={`h-full ${bar.color} rounded-full`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 3: ALERTS */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 px-1">
                    <ShieldAlert className="h-4 w-4 text-red-500" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Risk Monitor
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-red-100 shadow-sm h-full relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <AlertTriangle className="h-16 w-16 text-red-500" />
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-red-50 p-1.5 rounded-md">
                        <Clock className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-xs font-bold text-red-600 uppercase">
                        Stalled Review
                      </span>
                    </div>

                    <h4 className="text-gray-900 font-bold text-sm mb-1">
                      PR #402: Payment Logic
                    </h4>
                    <p className="text-xs text-gray-500 mb-4">
                      Waiting for review for{' '}
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="font-semibold text-red-600 bg-red-50 px-1 rounded inline-block"
                      >
                        36 hours
                      </motion.span>
                      .
                    </p>

                    <div className="flex items-center gap-2 mt-auto">
                      <Image
                        width={25}
                        height={25}
                        src="https://i.pravatar.cc/150?u=a"
                        alt="Dev"
                        className="rounded-full border border-gray-200"
                      />
                      <ArrowRight className="h-3 w-3 text-gray-300" />
                      <Image
                        width={25}
                        height={25}
                        src="https://i.pravatar.cc/150?u=b"
                        alt="Dev"
                        className="rounded-full border border-gray-200 opacity-60 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
