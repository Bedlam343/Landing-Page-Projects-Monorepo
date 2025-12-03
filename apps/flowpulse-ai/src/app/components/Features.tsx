import { motion } from 'motion/react';
import { Activity, Zap, Shield } from 'lucide-react';

const appearAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: 'Zero-Config Integrations',
      desc: 'Connect GitHub, Linear, Slack, and Figma in 5 minutes. No manual tagging, no workflow changes required.',
    },
    {
      icon: <Activity className="h-6 w-6 text-indigo-600" />,
      title: 'Real-Time Bottleneck Detection',
      desc: 'Spot stalled PRs and design approval loops 3 days before they become missed deadlines.',
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: 'Privacy First, Always',
      desc: 'We analyze work metadata (commits, tasks), not pixels. No screen recording, no keystroke logging.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            {...appearAnimationProps}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Deep Visibility. No Creepy Monitoring.
          </motion.h2>
          <motion.p
            {...appearAnimationProps}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Most tools force you to choose between blind trust and
            micromanagement. We built the third option.
          </motion.p>
        </div>
        <motion.div
          {...appearAnimationProps}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={i}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
