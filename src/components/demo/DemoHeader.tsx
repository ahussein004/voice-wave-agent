
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
      className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 px-4"
    >
      <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-voice-purple/20 text-sm mb-6 text-voice-purple-light">
        Advanced Voice AI Technology
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-voice-purple-light to-voice-cream bg-clip-text text-transparent leading-tight">
        Experience Our Emotionally Intelligent AI Voice Agent
      </h2>
      
      <p className="text-lg sm:text-xl text-voice-cream/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        Watch how our AI understands emotional cues, handles complex situations, and seamlessly 
        transitions between automated responses and human support when needed.
      </p>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="inline-block px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white/10 border border-voice-purple/30 text-sm sm:text-base font-medium shadow-lg"
      >
        Select an industry below to explore our solutions
      </motion.div>
    </motion.div>
  );
};

export default DemoHeader;
