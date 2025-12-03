import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Share2, Cpu } from 'lucide-react';

const appearAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const TechDeepDive = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      id: 'ingest',
      title: '1. Multi-Source Ingestion',
      icon: <Database className="h-5 w-5" />,
      description:
        'We normalize disparate webhook events into a unified canonical schema.',
      detail:
        'FlowPulse listens to GitHub `push` events, Linear `issue_update` webhooks, and Slack RTM streams. These are sanitized and stored in a time-series database, preserving timestamps and author metadata without storing sensitive code payloads.',
      code: `{
  "event": "pr_merged",
  "source": "github",
  "timestamp": "2024-11-28T10:42:00Z",
  "meta": {
    "repo": "frontend-v2",
    "author": "j_singh",
    "linked_tickets": ["LIN-342"]
  }
}`,
    },
    {
      id: 'graph',
      title: '2. Semantic Knowledge Graph',
      icon: <Share2 className="h-5 w-5" />,
      description:
        'We map relationships between code, conversation, and tasks.',
      detail:
        "Using vector embeddings, the engine detects that a Slack thread discussing 'Auth0 errors' is semantically related to the 'Fix Login Retry Logic' PR in GitHub, even if they aren't explicitly linked. This creates a graph of work context.",
      code: `{
  "node": "PR-405",
  "relations": [
    {
      "type": "discussed_in",
      "target": "Slack/#backend-ops",
      "confidence": 0.98,
      "context": "authentication latency"
    },
    {
      "type": "blocks",
      "target": "Ticket-LIN-88",
      "status": "critical"
    }
  ]
}`,
    },
    {
      id: 'analyze',
      title: '3. LLM Synthesis & Citations',
      icon: <Cpu className="h-5 w-5" />,
      description: 'Deterministic summarization with hard-linked sources.',
      detail:
        "Our model generates the daily briefing by traversing the graph. Crucially, every claim is 'grounded'—meaning if the AI says 'Backend is blocked,' it provides a clickable citation to the specific Pull Request or Slack message causing the block.",
      code: `{
  "insight": "Backend deployment stalled",
  "reason": "CI/CD pipeline failure detected",
  "sources": [
    { "id": "GH-Action-99", "url": "github.com/..." },
    { "id": "Slack-Msg-22", "url": "slack.com/..." }
  ],
  "action_required": true
}`,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.h2
            {...appearAnimationProps}
            className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Under the Hood
          </motion.h2>
          <motion.h3
            {...appearAnimationProps}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Not magic. Just rigorous data engineering.
          </motion.h3>
          <motion.p {...appearAnimationProps} className="text-gray-400 text-lg">
            Most &quot;AI&quot; tools hallucinate. FlowPulse AI is built on a{' '}
            <span className="text-white font-medium">
              Graph RAG (Retrieval-Augmented Generation)
            </span>{' '}
            architecture that prioritizes factual accuracy and source citation.
          </motion.p>
        </div>

        <motion.div
          {...appearAnimationProps}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column: Interactive Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group cursor-pointer rounded-xl p-6 border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gray-800 border-indigo-500 shadow-lg shadow-indigo-900/20'
                    : 'bg-gray-800/30 border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === index
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <h4
                    className={`text-lg font-bold ${
                      activeTab === index ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-400 pl-14 mb-2">{step.description}</p>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-14 overflow-hidden"
                    >
                      <p className="text-sm text-gray-400 pt-2 leading-relaxed border-t border-gray-700 mt-4">
                        {step.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: Code Visualization */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>

            <div className="relative bg-[#0d1117] rounded-xl border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-gray-500">pipeline_debug.json</div>
              </div>

              <div className="p-6 overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300"
                  >
                    <code>
                      {steps[activeTab].code.split('\n').map((line, i) => (
                        <div key={i} className="table-row">
                          <span className="table-cell select-none text-gray-700 text-right pr-4">
                            {i + 1}
                          </span>
                          <span className="table-cell">
                            {line.replace(
                              /"key":/g,
                              '<span class="text-indigo-400">"key"</span>:',
                            )}
                          </span>
                        </div>
                      ))}
                    </code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Badge */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-gray-800 border border-gray-600 p-4 rounded-lg shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-900/30 p-2 rounded-md">
                  <GitCommit className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-green-400 font-bold mb-1">
                    LIVE INGESTION
                  </div>
                  <div className="text-gray-300 text-xs">
                    Processing 142 events/sec from <strong>GitHub API</strong>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechDeepDive;
