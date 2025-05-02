import React, { useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import { Headphones, ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!particlesRef.current) return;

    // Create particles
    const container = particlesRef.current;
    const particleCount = isMobile ? 15 : 30; // Reduced particle count on mobile

    // Clear existing particles
    container.innerHTML = '';

    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle-flow';

      // Randomize position and animation
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      container.appendChild(particle);
    }
  }, [isMobile]);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4 pt-20">
      {/* Enhanced background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-voice-dark via-voice-dark/95 to-voice-dark animate-gradient-x"></div>
      
      {/* Floating particles with improved visibility */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none opacity-70"></div>
      
      {/* Animated gradient circles in background */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-voice-purple/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-voice-purple/5 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Content container with improved layout */}
      <div className="container z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-16 md:pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col max-w-2xl"
        >
          <div className="mb-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="px-4 py-1 rounded-full bg-voice-purple/20 text-voice-purple-light text-sm inline-flex items-center border border-voice-purple/30"
            >
              <PhoneCall className="w-3 h-3 mr-1" /> AI-Powered Voice Solutions
            </motion.span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            Never Miss Another Call With 
            <span className="text-gradient bg-clip-text relative block mt-2">
              Industry-Leading AI Voice Agents
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-voice-purple-light to-transparent rounded-full"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-voice-cream/90 mb-8 max-w-xl leading-relaxed"
          >
            Transform your customer service with 24/7 AI voice assistants that book appointments, 
            answer questions, and drive revenue while you sleep.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#cta-section" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-voice-purple hover:bg-voice-purple-dark text-white font-medium px-6 py-6 sm:px-8 text-base sm:text-lg group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-voice-purple to-voice-purple-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </a>
            <a href="#demo-section" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-voice-purple text-voice-purple-light hover:bg-voice-purple/10 font-medium backdrop-blur-sm px-6 py-6 sm:px-8 text-base sm:text-lg">
                <Headphones className="mr-2 h-5 w-5" /> Hear It In Action
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center space-x-4 text-sm text-voice-cream/70"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border-2 border-voice-dark flex items-center justify-center shadow-lg" 
                  style={{ zIndex: 4 - i }}
                >
                  <span className="text-xs font-bold">👤</span>
                </div>
              ))}
            </div>
            <p className="text-voice-cream/80 text-xs sm:text-sm font-medium">Trusted by <span className="font-semibold text-voice-purple-light">2,400+</span> businesses</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative h-[500px] sm:h-[600px] w-full max-w-xs sm:max-w-md mt-4 lg:mt-0"
        >
          {/* Phone mockup with enhanced glow and animations */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="phone-glow opacity-80"></div>
            
            <div className="relative bg-gray-900 w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] rounded-[45px] border-[6px] border-gray-800 overflow-hidden shadow-2xl">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              
              {/* Phone screen */}
              <div className="absolute inset-0 bg-black/70 p-4">
                <div className="h-full w-full flex flex-col">
                  {/* Phone status bar with enhanced details */}
                  <div className="flex justify-between mb-4 text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-voice-purple-light/80 rounded-sm"></div>
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-voice-purple-light/80 rounded-sm"></div>
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-voice-purple-light/80 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Call interface with enhanced visuals */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <span className="text-xs sm:text-sm text-voice-cream/70">AI Voice Agent - Active Call</span>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-voice-cream">VoiceWave AI</h3>
                    
                    {/* Improved animated voice waves */}
                    <div className="my-4 sm:my-6 flex items-end justify-center h-12 sm:h-16 space-x-1">
                      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div 
                          key={i}
                          className="wave-animation bg-gradient-to-t from-voice-purple to-voice-purple-light rounded-full w-1.5 sm:w-2" 
                          style={{ 
                            height: `${Math.sin(i/2) * 25 + 12}px`, 
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-voice-cream/90 text-center mt-2 px-3 sm:px-4 bg-voice-purple/10 py-2 rounded-lg backdrop-blur-sm border border-voice-purple/20">
                      "How may I help you schedule your appointment today?"
                    </p>
                  </div>
                  
                  {/* Call buttons with improved styling */}
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors cursor-pointer backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-voice-purple flex items-center justify-center shadow-lg hover:bg-voice-purple-light transition-colors cursor-pointer backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced circular pulse animations */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] border-2 border-voice-purple/30 rounded-full animate-ping opacity-30"></div>
              <div className="absolute w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] border border-voice-purple/20 rounded-full animate-ping opacity-20" style={{animationDelay: '300ms'}}></div>
              <div className="absolute w-[400px] sm:w-[460px] h-[400px] sm:h-[460px] border border-voice-purple/10 rounded-full animate-ping opacity-15" style={{animationDelay: '600ms'}}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
