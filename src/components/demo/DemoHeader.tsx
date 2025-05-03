
import React from "react";
import { motion } from "framer-motion";

const DemoHeader = () => {
  return (
    <motion.div
      id="demo-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 px-4 pt-20 sm:pt-24"
    >
      <motion.div 
        className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 text-sm mb-6 text-indigo-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Industry-Specific Solutions
      </motion.div>
      
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Experience Your AI Voice Agent In Action
      </motion.h2>
      
      <motion.p 
        className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        See how our AI handles real-world scenarios, converts inquiries into bookings, 
        and delivers exceptional customer service with our interactive demos below.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/30 text-base font-medium shadow-lg"
      >
        <span className="block">Select an industry below to explore our AI voice solutions</span>
        <span className="text-sm text-indigo-300 mt-1 block">Complete with smart features like emotion detection and SMS notifications</span>
      </motion.div>
    </motion.div>
  );
};

export default DemoHeader;
