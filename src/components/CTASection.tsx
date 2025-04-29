
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-voice-dark to-voice-dark/95 border-t border-voice-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
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

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Calendly on the left */}
          <motion.div 
            className="w-full lg:w-3/5 bg-voice-dark/50 p-6 rounded-xl border border-voice-purple/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          {/* Booking steps on the right */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-voice-dark/30 p-6 rounded-xl border border-voice-purple/20 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">What to Expect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-voice-purple/20 p-2 rounded-full mt-1">
                    <Check size={18} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-lg">Book a Time Slot</h4>
                    <p className="text-voice-cream/70 mt-1">Select a convenient time from the calendar on the left</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-voice-purple/20 p-2 rounded-full mt-1">
                    <Check size={18} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-lg">Confirmation Email</h4>
                    <p className="text-voice-cream/70 mt-1">You'll receive details about the demo and how to prepare</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-voice-purple/20 p-2 rounded-full mt-1">
                    <Check size={18} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-lg">30-Minute Demo Call</h4>
                    <p className="text-voice-cream/70 mt-1">We'll showcase our AI voice agents tailored for your business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-voice-purple/20 p-2 rounded-full mt-1">
                    <Check size={18} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-lg">Follow-Up Plan</h4>
                    <p className="text-voice-cream/70 mt-1">Within 24 hours, receive a custom implementation proposal</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
