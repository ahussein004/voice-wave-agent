
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
    <section className="relative py-24 px-4 overflow-hidden bg-white text-gray-900">
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">What Industry Leaders Are Saying</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Top executives from leading companies share their insights on the future of voice AI technology
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Navigation arrows */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:-left-12 p-3 rounded-full bg-white/80 border border-voice-purple/20 hover:bg-white shadow-lg transition-all hover:scale-110"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-6 h-6 text-voice-purple" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 md:-right-12 p-3 rounded-full bg-white/80 border border-voice-purple/20 hover:bg-white shadow-lg transition-all hover:scale-110"
            aria-label="Next quote"
          >
            <ChevronRight className="w-6 h-6 text-voice-purple" />
          </button>
          
          {/* Quotes slideshow */}
          <div className="relative bg-gradient-to-r from-voice-purple/5 to-blue-500/5 rounded-2xl overflow-hidden shadow-xl min-h-[400px] flex items-center">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            
            <div className="relative z-10 w-full">
              <AnimatePresence mode="wait">
                {quotes.map((quote, index) => (
                  index === activeIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="p-8 md:p-12"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                        {/* Logo/company side */}
                        <div className="md:w-1/3 flex flex-col items-center">
                          <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-[220px] h-[120px] flex items-center justify-center mb-4">
                            {quote.logo.startsWith('http') ? (
                              <img 
                                src={quote.logo} 
                                alt={`${quote.company} logo`} 
                                className="max-h-16 max-w-full object-contain"
                              />
                            ) : (
                              <span className="text-2xl font-bold text-voice-purple">{quote.logo}</span>
                            )}
                          </div>
                          <div className="text-center">
                            <p className="font-bold text-lg text-voice-purple">{quote.author}</p>
                            <p className="text-sm text-gray-600">{quote.role}, {quote.company}</p>
                          </div>
                        </div>
                        
                        {/* Quote content side */}
                        <div className="md:w-2/3">
                          <div className="relative">
                            <div className="absolute -top-6 -left-2 text-6xl text-voice-purple/20">"</div>
                            <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed pl-6 relative z-10">
                              {quote.quote}
                            </blockquote>
                            <div className="absolute -bottom-10 -right-2 text-6xl text-voice-purple/20">"</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-voice-purple w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to quote ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-r from-voice-purple/5 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-voice-purple/10 to-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default StatsSection;
