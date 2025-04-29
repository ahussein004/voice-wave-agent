
import React from "react";
import { motion } from "framer-motion";

const DemoHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-voice-purple-light to-voice-cream bg-clip-text text-transparent">
        Experience Your AI Voice Agent In Action
      </h2>
      <p className="text-lg text-voice-cream/80 mb-6">
        See how our AI handles real-world scenarios, converts inquiries into bookings, and delivers exceptional customer service with our interactive demos below.
      </p>
      <div className="inline-block px-4 py-2 rounded-lg bg-white/10 border border-voice-purple/20 text-sm">
        Select an industry below to explore
      </div>
    </motion.div>
  );
};

export default DemoHeader;
