import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      />
      <span className="mt-4 text-gray-800 font-semibold">Carregando...</span>
    </motion.div>
  );
};

export default LoadingScreen;
