
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-voice-dark to-voice-dark/95 border-t border-voice-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Converting Calls Into Revenue Today
          </motion.h2>
          <motion.p 
            className="text-lg text-voice-cream/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book your free demo to hear how our AI voice agents can transform your business
          </motion.p>
        </div>

        <motion.div 
          className="w-full bg-voice-dark/50 p-6 rounded-xl border border-voice-purple/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="aspect-video w-full">
            <iframe 
              src="https://calendly.com/a-hu33ein/voice-ai-agency" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Schedule a Demo with VoiceWaveAI"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
