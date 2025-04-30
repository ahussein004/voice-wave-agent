
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-voice-dark to-voice-dark/95 border-t border-voice-purple/10" id="cta-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1 rounded-full bg-white/10 border border-voice-purple/20 text-sm mb-6 text-voice-purple-light"
          >
            Get Started Today
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start Converting Calls Into Revenue Today
          </motion.h2>
          
          <motion.p 
            className="text-xl text-voice-cream/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Book your free demo to hear how our AI voice agents can transform your business
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Calendly on the left - taller */}
          <motion.div 
            className="w-full lg:w-3/5 bg-voice-dark/50 p-6 rounded-xl border border-voice-purple/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full h-[650px]"> {/* Increased height */}
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

          {/* Booking steps on the right - matched height */}
          <motion.div 
            className="w-full lg:w-2/5 flex"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-voice-dark/30 p-8 rounded-xl border border-voice-purple/20 backdrop-blur-sm flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">What to Expect</h3>
              
              <div className="space-y-8 flex-grow flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="bg-voice-purple/20 p-3 rounded-full mt-1">
                    <Check size={20} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-xl">Book a Time Slot</h4>
                    <p className="text-voice-cream/80 mt-2 text-lg">Select a convenient time from the calendar on the left</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-voice-purple/20 p-3 rounded-full mt-1">
                    <Check size={20} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-xl">Confirmation Email</h4>
                    <p className="text-voice-cream/80 mt-2 text-lg">You'll receive details about the demo and how to prepare</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-voice-purple/20 p-3 rounded-full mt-1">
                    <Check size={20} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-xl">30-Minute Demo Call</h4>
                    <p className="text-voice-cream/80 mt-2 text-lg">We'll showcase our AI voice agents tailored for your business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-voice-purple/20 p-3 rounded-full mt-1">
                    <Check size={20} className="text-voice-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-voice-cream text-xl">Follow-Up Plan</h4>
                    <p className="text-voice-cream/80 mt-2 text-lg">Within 24 hours, receive a custom implementation proposal</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-8">
                  <div className="p-4 bg-voice-purple/10 rounded-lg border border-voice-purple/30">
                    <p className="text-voice-cream/90 text-center font-medium">
                      Join over 2,400+ businesses already using VoiceWaveAI
                    </p>
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
