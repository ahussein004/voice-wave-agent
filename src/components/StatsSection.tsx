
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { QuoteCard } from "./quotes/QuoteCard";
import Autoplay from "embla-carousel-autoplay";
import { quotes } from "@/data/quotes";
import { Phone } from "lucide-react";

const StatsSection = () => {
  // Autoplay plugin with 8 seconds delay
  const autoplayPlugin = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );
  
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white text-gray-900">
      <div className="container relative z-10 mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left side - Testimonials */}
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-voice-purple/5 to-blue-500/5 animate-pulse"></div>
            <div className="relative z-10 py-8 px-4">
              <h3 className="text-xl md:text-3xl font-semibold mb-6 text-center text-gradient">What Industry Leaders Are Saying</h3>
              <Carousel 
                opts={{ align: "start", loop: true, skipSnaps: false }} 
                plugins={[autoplayPlugin.current]}
                className="mx-auto"
              >
                <CarouselContent>
                  {quotes.map((quote, index) => (
                    <CarouselItem key={index} className="px-2 md:basis-full">
                      <QuoteCard quote={quote} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex flex-col items-center gap-6"
          >
            <h3 className="text-xl md:text-3xl font-semibold mb-2 text-center bg-gradient-to-r from-voice-purple to-blue-500 bg-clip-text text-transparent">
              Experience Our Voice Agents
            </h3>

            {/* Phone mockup 1 - Restaurant */}
            <PhoneMockup 
              industry="Restaurant" 
              color="from-[#F97316] to-[#FDBA74]" 
              message="I'd like to make a dinner reservation for tonight at 8 PM."
              delay={0.1}
            />

            {/* Phone mockup 2 - Medical */}
            <PhoneMockup 
              industry="Healthcare" 
              color="from-[#0EA5E9] to-[#7dd3fc]" 
              message="I need to schedule a follow-up appointment for next week."
              delay={0.3}
            />

            {/* Phone mockup 3 - Automotive */}
            <PhoneMockup 
              industry="Automotive" 
              color="from-[#84cc16] to-[#bef264]" 
              message="I'd like to book a service appointment for my vehicle."
              delay={0.5}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Phone mockup component to avoid repetition
const PhoneMockup = ({ industry, color, message, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative w-full max-w-xs transform hover:scale-105 transition-all duration-300"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${color} opacity-30 blur-lg rounded-xl`} />
      <div className="relative flex bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
        <div className="py-4 px-5 w-full">
          <div className="flex justify-between items-center mb-3">
            <div className={`text-xs font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {industry} Voice Agent
            </div>
            <div className="text-xs text-gray-400">2:28</div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-voice-purple flex items-center justify-center">
              <Phone size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white font-medium">VoiceWave AI</p>
              <p className="text-xs text-gray-400">Active Call</p>
            </div>
          </div>

          {/* Animated voice waves */}
          <div className="my-3 flex items-end justify-center h-8 space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-1 bg-voice-purple-light animate-wave rounded-full" 
                style={{ 
                  height: `${Math.random() * 16 + 8}px`,
                  animationDelay: `${i * 0.1}s` 
                }}
              ></div>
            ))}
          </div>

          <p className="text-xs text-gray-300 text-center mb-3">
            "{message}"
          </p>
          
          <div className="flex justify-around mb-1">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-voice-purple flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
