import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const appearAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      desc: 'For solo builders & tiny teams',
      features: [
        'Connect 2 Data Sources',
        'Daily AI Summary (1 Project)',
        'Activity Feed (7 days)',
        'Community Support',
      ],
      cta: 'Start for Free',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/user/mo',
      desc: 'For high-velocity startups',
      features: [
        'Unlimited Data Sources',
        'Deep-dive Org Summaries',
        'Real-time Anomaly Alerts',
        'Team Heatmaps',
        'Priority Support',
      ],
      cta: 'Start Pro Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For security & scale',
      features: [
        'SSO & SAML',
        'Custom AI Model Tuning',
        'Onboarding Engineer',
        'SLA & Compliance',
        'Unlimited History',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            {...appearAnimationProps}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p {...appearAnimationProps} className="text-lg text-gray-600">
            Start for free, scale when you need the intelligence.
          </motion.p>
        </div>
        <motion.div
          {...appearAnimationProps}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-indigo-900 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlight ? 'text-indigo-200' : 'text-gray-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? 'text-indigo-200' : 'text-gray-500'
                }`}
              >
                {plan.desc}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 ${
                        plan.highlight ? 'text-indigo-400' : 'text-green-500'
                      }`}
                    />
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.highlight
                    ? 'bg-indigo-500 hover:bg-indigo-400 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
