import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const appearAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const FAQ = () => {
  // State to track which question is currently open.
  // Set to null initially (all closed), or use an index/ID.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Is this employee monitoring software?',
      a: "Absolutely not. We do not record screens, log keystrokes, or take webcam photos. We strictly analyze work metadata (Git commits, public Slack channels, Linear tickets) to visualize workflow patterns, not police individual behavior. It is designed for 'Team Alignment,' not 'Surveillance.'",
    },
    {
      q: 'Does FlowPulse AI store my actual source code?',
      a: 'No. We never clone or store your repositories. Our integration analyzes metadata (commit timestamps, PR descriptions, file types changed) and then discards the raw payloads. Your IP remains on your servers.',
    },
    {
      q: 'How long does the setup take?',
      a: 'About 5 minutes. You authenticate via OAuth with your tools (GitHub, Slack, etc.) and we historically ingest the last 30 days of data instantly, so you get insights on Day 1.',
    },
    {
      q: "Who counts as a 'User' for billing?",
      a: "We only bill for 'Active Contributors'—people who actively commit code or complete tasks in the connected tools. Product Managers or Stakeholders who just view the dashboard are free.",
    },
    {
      q: 'Do I need to change how my team works?',
      a: 'Zero changes required. No manual time-tracking, no special tagging, and no new habits. Keep using Jira/Linear/GitHub exactly as you do now. FlowPulse AI runs silently in the background.',
    },
    {
      q: 'What happens to my data if I cancel?',
      a: 'If you cancel, we immediately delete all ingestion tokens. Your metadata is retained for 30 days in case you reactivate, after which it is permanently purged from our databases.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-xl mb-4">
            <HelpCircle className="h-6 w-6 text-indigo-600" />
          </div>
          <motion.h2
            {...appearAnimationProps}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p {...appearAnimationProps} className="text-lg text-gray-600">
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <motion.div {...appearAnimationProps} className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl transition-all duration-200 ${
                activeIndex === i
                  ? 'border-indigo-200 bg-indigo-50/30'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-medium ${
                    activeIndex === i ? 'text-indigo-900' : 'text-gray-900'
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === i
                      ? 'transform rotate-180 text-indigo-600'
                      : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...appearAnimationProps}
          className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100"
        >
          <p className="text-gray-900 font-medium mb-2">
            Still have questions?
          </p>
          <p className="text-gray-600 mb-6">
            We’re happy to help. Chat with our engineering team directly.
          </p>
          <button className="text-indigo-600 font-bold hover:text-indigo-700 underline underline-offset-4">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
