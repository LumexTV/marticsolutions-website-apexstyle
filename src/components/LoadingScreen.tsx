import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Simple Brand Spinner */}
        <div className="w-12 h-12 border-4 border-apex-blue/20 border-t-apex-blue rounded-full animate-spin"></div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;