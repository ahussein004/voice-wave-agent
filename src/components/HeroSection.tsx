
import React from 'react';
import { Button } from "./ui/button";
import { Headphones, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4 pt-20">
      {/* Enhanced background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
      
      {/* Background particles/decorative elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-purple-800/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        ></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-[20%] w-4 h-4 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-1/2 right-[15%] w-3 h-3 bg-indigo-400 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-32 left-[30%] w-5 h-5 bg-blue-400 rounded-full blur-sm animate-pulse"></div>
      </div>
      
      {/* Content container with improved layout */}
      <div className="container z-10 flex flex-col items-center lg:flex-row lg:items-center justify-between gap-12 lg:gap-16 pt-16 md:pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col max-w-2xl lg:items-start text-center lg:text-left"
        >
          <div className="mb-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-300 text-sm inline-flex items-center border border-indigo-500/30"
            >
              <span className="mr-1.5 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span> AI-Powered Voice Solutions
            </motion.span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            Never Miss Another Call With 
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Industry-Leading AI Voice Agents
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            Transform your customer service with 24/7 AI voice assistants that book appointments, 
            answer questions, and drive revenue while you sleep.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-16 w-full sm:w-auto lg:justify-start justify-center"
          >
            <a href="#cta-section" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-8 py-6 sm:px-10 text-base sm:text-lg group relative overflow-hidden border-0 shadow-lg hover:shadow-indigo-500/30">
                <span className="relative z-10 flex items-center">
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
            <a href="#demo-section" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-indigo-400/30 text-indigo-300 hover:bg-indigo-950/30 font-medium backdrop-blur-sm px-8 py-6 sm:px-10 text-base sm:text-lg">
                <Headphones className="mr-2 h-5 w-5" /> Hear It In Action
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center space-x-4 text-sm text-gray-400 lg:mt-0 mt-4 lg:self-start self-center"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center shadow-lg" 
                  style={{ zIndex: 4 - i }}
                >
                  <span className="text-xs font-bold">👤</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-xs sm:text-sm font-medium">Trusted by <span className="font-semibold text-indigo-400">2,400+</span> businesses</p>
          </motion.div>
        </motion.div>
        
        {/* Replacing phone mockup with interactive 3D visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative h-[400px] sm:h-[450px] w-full max-w-md mt-8 lg:mt-0"
        >
          {/* 3D Voice Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central glowing orb */}
              <div className="absolute w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
              
              {/* Circular audio visualization */}
              <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {/* Audio waves */}
                <div className="absolute inset-0">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/30"
                      style={{
                        width: `${140 + i * 3}px`,
                        height: `${140 + i * 3}px`,
                        opacity: 0.1 + (i % 3) * 0.05,
                        animationDuration: `${3 + i % 5}s`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Animated sound wave bars */}
                <div className="relative flex items-center justify-center gap-1 h-32">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 sm:w-1.5 bg-gradient-to-t from-indigo-600 to-purple-400 rounded-full"
                      style={{
                        height: `${15 + Math.sin(i / 2) * 40}px`,
                        animationDuration: `${1 + (i % 5) * 0.2}s`,
                        animationDelay: `${i * 0.05}s`,
                        animation: `audio-wave ${1 + (i % 3) * 0.4}s ease-in-out infinite alternate`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Glowing rings */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-indigo-500/30 animate-ping-slow"
                    style={{
                      width: `${280 + i * 40}px`,
                      height: `${280 + i * 40}px`,
                      animationDelay: `${i * 0.3}s`,
                      opacity: 0.4 - i * 0.1
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Floating text bubbles */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  y: [20, 0, 0, -20]
                }}
                transition={{ 
                  duration: 4,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute top-10 right-16 px-4 py-2 bg-gray-900/80 backdrop-blur-md border border-indigo-500/20 rounded-lg text-sm text-white shadow-lg"
              >
                "How may I help you today?"
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  y: [20, 0, 0, -20]
                }}
                transition={{ 
                  duration: 4,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 3
                }}
                className="absolute bottom-10 left-16 px-4 py-2 bg-gray-900/80 backdrop-blur-md border border-indigo-500/20 rounded-lg text-sm text-white shadow-lg"
              >
                "I'll book that appointment for you!"
              </motion.div>
              
              {/* Particle effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-indigo-400 rounded-full w-1 h-1 animate-particle-flow" 
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 5}s`,
                      opacity: Math.random() * 0.6
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
