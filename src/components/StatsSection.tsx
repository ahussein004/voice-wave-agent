
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { QuoteCard } from "./quotes/QuoteCard";
import Autoplay from "embla-carousel-autoplay";
import { quotes } from "@/data/quotes";

const StatsSection = () => {
  // Autoplay plugin with 8 seconds delay
  const autoplayPlugin = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );
  
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white text-gray-900">
      <div className="container relative z-10 mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden max-w-4xl mx-auto"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
