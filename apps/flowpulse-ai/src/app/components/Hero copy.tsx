import { motion } from 'framer-motion';
import {
  Github,
  Slack,
  Figma,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
  Search,
  Zap,
  ShieldAlert,
} from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New: Notion Integration Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Your Engineering Team’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              AI Chief of Staff.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Stop relying on status meetings. FlowPulse AI turns activity from
            GitHub, Slack, and Linear into a real-time execution pulse.
            <br />
            <span className="text-indigo-600 font-medium mt-2 block">
              100% Visibility. 0% Micromanagement.
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

        {/* --- Professional Dashboard Mockup --- */}
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
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md border border-gray-100 w-64">
                <Search className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-400">
                  Search repositories...
                </span>
              </div>
              <div className="w-10"></div> {/* Spacer for alignment */}
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
                      <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
                        +12%
                      </span>
                    </div>
                    <div className="flex items-end gap-2 h-32">
                      <div className="w-1/5 bg-indigo-50 rounded-t-sm h-[40%]"></div>
                      <div className="w-1/5 bg-indigo-100 rounded-t-sm h-[60%]"></div>
                      <div className="w-1/5 bg-indigo-200 rounded-t-sm h-[50%]"></div>
                      <div className="w-1/5 bg-indigo-400 rounded-t-sm h-[80%]"></div>
                      <div className="w-1/5 bg-indigo-600 rounded-t-sm h-[95%]"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-50">
                      42 PRs merged • 3 days remaining
                    </p>
                  </div>
                </div>

                {/* COLUMN 2: AI SUMMARY (Wider on mobile, center piece) */}
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
                      {/* Insight 1 */}
                      <div className="flex gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-500 shrink-0"></div>
                        <div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-semibold text-gray-900">
                              Checkout Refactor
                            </span>{' '}
                            is moving fast. 4 critical PRs merged by frontend
                            team this morning.
                          </p>
                        </div>
                      </div>
                      {/* Insight 2 */}
                      <div className="flex gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 shrink-0"></div>
                        <div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-semibold text-gray-900">
                              API Blocker:
                            </span>{' '}
                            Backend team has 12 mentions of &quot;Auth
                            Error&quot; in Slack #dev-ops.
                          </p>
                        </div>
                      </div>

                      {/* Sources Footer */}
                      <div className="pt-4 mt-2 flex items-center gap-3">
                        <span className="text-[10px] text-gray-400 font-medium">
                          SOURCES:
                        </span>
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full bg-gray-100 border border-white flex items-center justify-center z-30">
                            <Github className="h-3 w-3 text-gray-600" />
                          </div>
                          <div className="h-6 w-6 rounded-full bg-[#4A154B] border border-white flex items-center justify-center z-20">
                            <Slack className="h-3 w-3 text-white" />
                          </div>
                          <div className="h-6 w-6 rounded-full bg-[#5E51D8] border border-white flex items-center justify-center z-10 text-white text-[8px] font-bold">
                            L
                          </div>
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
                      <AlertTriangle className="h-16 w-16 text-red-500" />
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
                      <span className="font-semibold text-red-600 bg-red-50 px-1 rounded">
                        36 hours
                      </span>
                      .
                    </p>

                    <div className="flex items-center gap-2 mt-auto">
                      <img
                        src="https://i.pravatar.cc/150?u=a"
                        alt="Dev"
                        className="w-6 h-6 rounded-full border border-gray-200"
                      />
                      <ArrowRight className="h-3 w-3 text-gray-300" />
                      <img
                        src="https://i.pravatar.cc/150?u=b"
                        alt="Dev"
                        className="w-6 h-6 rounded-full border border-gray-200 opacity-60 grayscale"
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
