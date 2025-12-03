import { motion } from 'motion/react';

type StreamingTextProps = {
  text: string;
  delay?: number;
};

const StreamingText = ({ text, delay = 0 }: StreamingTextProps) => {
  const words = text.split(' ');
  return (
    <motion.p className="text-sm text-gray-700 leading-relaxed">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: delay + i * 0.05, // Staggered delay for streaming effect
            ease: 'easeOut',
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default StreamingText;
