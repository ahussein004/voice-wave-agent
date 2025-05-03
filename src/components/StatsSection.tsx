
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { quotes } from "@/data/quotes";

const StatsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto advance slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? quotes.length - 1 : current - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % quotes.length);
  };

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900/95 to-voice-dark text-gray-100">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[url('/bg-dots.png')] opacity-10"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-voice-purple/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-gradient-radial from-voice-purple/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">What Industry Leaders Are Saying</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Top executives from leading companies share their insights on the future of voice AI technology
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-0">
          {/* Navigation arrows with enhanced styling */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:-left-12 p-3 rounded-full bg-gradient-to-r from-indigo-600/80 to-purple-500/80 text-white hover:from-indigo-600 hover:to-purple-500 shadow-lg transition-all hover:scale-110 group"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-white transition-colors" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 md:-right-12 p-3 rounded-full bg-gradient-to-r from-indigo-600/80 to-purple-500/80 text-white hover:from-indigo-600 hover:to-purple-500 shadow-lg transition-all hover:scale-110 group"
            aria-label="Next quote"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-white transition-colors" />
          </button>
          
          {/* Redesigned quotes slideshow with glass morphism */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl min-h-[450px] flex items-center backdrop-blur-md border border-indigo-500/20">
            {/* Enhanced background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90"></div>
            <div className="absolute inset-0 bg-[url('/bg-dots.png')] opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 backdrop-blur-sm"></div>
            
            <div className="relative z-10 w-full">
              <AnimatePresence mode="wait">
                {quotes.map((quote, index) => (
                  index === activeIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="p-8 md:p-16"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
                        {/* Logo/company side with glass morphism design */}
                        <div className="md:w-1/3 flex flex-col items-center">
                          <div className="bg-white/10 rounded-xl p-6 shadow-lg w-full max-w-[220px] h-[120px] flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md hover:transform hover:scale-105 transition-all duration-300 group">
                            {quote.logo.startsWith('http') ? (
                              <motion.img 
                                src={quote.logo} 
                                alt={`${quote.company} logo`} 
                                className="max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              />
                            ) : (
                              <motion.span 
                                className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110"
                                whileHover={{ scale: 1.05 }}
                              >
                                {quote.logo}
                              </motion.span>
                            )}
                          </div>
                          <div className="text-center">
                            <p className="font-bold text-xl text-white">{quote.author}</p>
                            <p className="text-base text-indigo-200">{quote.role}, {quote.company}</p>
                          </div>
                        </div>
                        
                        {/* Quote content side with enhanced typography */}
                        <div className="md:w-2/3">
                          <div className="relative">
                            <div className="absolute -top-8 -left-2 text-7xl text-indigo-500/20 font-serif">"</div>
                            <motion.blockquote 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="text-xl md:text-2xl text-white italic leading-relaxed pl-6 relative z-10 font-light"
                            >
                              {quote.quote}
                            </motion.blockquote>
                            <div className="absolute -bottom-14 -right-2 text-7xl text-indigo-500/20 font-serif">"</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Enhanced dot indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all ${
                  index === activeIndex 
                    ? "bg-gradient-to-r from-indigo-600 to-purple-500 w-10 h-3 rounded-full shadow-md" 
                    : "bg-gray-600 w-3 h-3 rounded-full hover:bg-indigo-500/50"
                }`}
                aria-label={`Go to quote ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
