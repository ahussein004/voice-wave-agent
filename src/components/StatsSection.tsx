
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi
} from "@/components/ui/carousel";
import { QuoteCard } from "./quotes/QuoteCard";
import { QuoteCarouselControls } from "./quotes/QuoteCarouselControls";
import { quotes } from "@/data/quotes";

const StatsSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 10000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  const handleCarouselChange = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
    setActiveQuote(index);
  };

  React.useEffect(() => {
    if (!carouselApi) return;
    
    const handleSelect = () => {
      setActiveQuote(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", handleSelect);
    
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-voice-dark via-voice-purple/5 to-gray-900"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-voice-purple/10 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
      
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
          <Carousel 
            opts={{ 
              loop: true, 
              align: "center",
              skipSnaps: false,
              dragFree: false
            }}
            plugins={[plugin]}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              <AnimatePresence mode="wait">
                {quotes.map((quote, index) => (
                  <CarouselItem key={quote.author} className="flex-[0_0_100%] min-w-0">
                    <QuoteCard quote={quote} />
                  </CarouselItem>
                ))}
              </AnimatePresence>
            </CarouselContent>
            
            <QuoteCarouselControls 
              quotes={quotes} 
              activeQuote={activeQuote} 
              onQuoteChange={handleCarouselChange} 
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
