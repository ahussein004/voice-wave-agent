
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { QuoteCard } from "./quotes/QuoteCard";
import { QuoteCarouselControls } from "./quotes/QuoteCarouselControls";
import { quotes } from "@/data/quotes";

const StatsSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  
  // Create autoplay plugin instance first before passing it to useEmblaCarousel
  const autoplayPlugin = Autoplay({ delay: 6000, stopOnInteraction: false });
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [autoplayPlugin]
  );
  
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setActiveQuote(emblaApi.selectedScrollSnap());
      });
    }
    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-voice-dark via-voice-purple/5 to-gray-900" />
      
      <div className="container relative z-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-voice-purple/20 rounded-full px-3 py-1 mb-4 backdrop-blur-sm border border-voice-purple/30">
            <span className="h-2 w-2 rounded-full bg-voice-purple-light animate-pulse mr-2" />
            <span className="text-sm font-medium text-voice-cream/90">Industry Leaders' Vision</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">The Future of AI Voice Agents</h2>
          <p className="text-voice-cream/70 max-w-lg mx-auto">
            Leading tech visionaries share their insights on the transformative power of AI voice technology
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {quotes.map((quote) => (
                <div 
                  key={quote.author} 
                  className="flex-[0_0_100%] min-w-0"
                >
                  <QuoteCard quote={quote} />
                </div>
              ))}
            </div>
          </div>

          <QuoteCarouselControls 
            quotes={quotes}
            activeQuote={activeQuote}
            emblaApi={emblaApi}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
