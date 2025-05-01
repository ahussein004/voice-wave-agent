
import React from "react";
import { motion } from "framer-motion";

const DemoHeader = () => {
  return (
    <motion.div
      id="demo-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto mb-20"
    >
      <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-voice-purple/20 text-sm mb-6 text-voice-purple-light">
        Industry-Specific Solutions
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-voice-purple-light to-voice-cream bg-clip-text text-transparent leading-tight">
        Experience Your AI Voice Agent In Action
      </h2>
      
      <p className="text-xl text-voice-cream/90 max-w-3xl mx-auto mb-10 leading-relaxed">
        See how our AI handles real-world scenarios, converts inquiries into bookings, 
        and delivers exceptional customer service with our interactive demos below.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-block px-5 py-3 rounded-lg bg-white/10 border border-voice-purple/30 text-base font-medium shadow-lg"
      >
        Select an industry below to explore our solutions
      </motion.div>
    </motion.div>
  );
};

export default DemoHeader;
