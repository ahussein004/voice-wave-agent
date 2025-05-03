import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const CTASection = () => {
  return <section className="py-32 bg-gradient-to-br from-gray-900 to-voice-dark border-t border-indigo-500/10" id="cta-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.4
        }} className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 text-sm mb-6 text-indigo-300">
            Get Started Today
          </motion.div>
          
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: 0.1
        }}>
            Start Converting Calls Into Revenue Today
          </motion.h2>
          
          <motion.p className="text-lg sm:text-xl text-gray-300" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: 0.2
        }}>
            Book your free demo to hear how our AI voice agents can transform your business
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Calendly on the left - matching height with enhanced styling */}
          <motion.div className="w-full lg:w-3/5 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 sm:p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: 0.2
        }}>
            <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden border border-indigo-500/10"> 
              <iframe src="https://calendly.com/a-hu33ein/voice-ai-agency" width="100%" height="100%" frameBorder="0" title="Schedule a Demo with VoiceWaveAI" className="rounded-lg"></iframe>
            </div>
          </motion.div>

          {/* Booking steps on the right - matched height with glass morphism */}
          <motion.div className="w-full lg:w-2/5 flex" initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: 0.3
        }}>
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-4 sm:p-6 md:p-8 rounded-xl border border-indigo-500/20 backdrop-blur-sm flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">What to Expect</h3>
                
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <motion.div className="flex items-start gap-3 sm:gap-4" initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.4
                }}>
                    <div className="bg-indigo-600/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0">
                      <Check size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg sm:text-xl">Book a Time Slot</h4>
                      <p className="text-gray-300 mt-1 sm:mt-2 text-base sm:text-lg">Select a convenient time from the calendar on the left</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start gap-3 sm:gap-4" initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.5
                }}>
                    <div className="bg-indigo-600/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0">
                      <Check size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg sm:text-xl">Confirmation Email</h4>
                      <p className="text-gray-300 mt-1 sm:mt-2 text-base sm:text-lg">You'll receive details about the demo and how to prepare</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start gap-3 sm:gap-4" initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.6
                }}>
                    <div className="bg-indigo-600/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0">
                      <Check size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg sm:text-xl">30-Minute Demo Call</h4>
                      <p className="text-gray-300 mt-1 sm:mt-2 text-base sm:text-lg">We'll showcase our AI voice agents tailored for your business</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start gap-3 sm:gap-4" initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.7
                }}>
                    <div className="bg-indigo-600/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0">
                      <Check size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg sm:text-xl">Follow-Up Plan</h4>
                      <p className="text-gray-300 mt-1 sm:mt-2 text-base sm:text-lg">Within 24 hours, receive a custom implementation proposal</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div className="mt-6 sm:mt-8" initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.8
            }}>
                <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30 backdrop-blur-sm shadow-lg">
                  <p className="text-white text-center font-medium text-base sm:text-lg">
                    Join over 2,400+ businesses already using VoiceSora
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add extra padding at the bottom to prevent cutoff */}
      
    </section>;
};
export default CTASection;