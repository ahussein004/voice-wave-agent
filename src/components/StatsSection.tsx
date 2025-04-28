
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
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"
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
      
      <div className="container relative z-10 mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-12">
            <img 
              src="/lovable-uploads/a265555e-1ef0-4e77-994f-caab3a1432a9.png" 
              alt="Real World Logo" 
              className="h-24 w-24 object-contain animate-pulse-slow"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              What is The <span className="text-orange-500">Real World?</span>
            </h2>
          </motion.div>
          
          <div className="relative rounded-xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/5 animate-pulse"></div>
            <div className="relative z-10 py-8 px-4">
              <Carousel 
                opts={{ align: "start", loop: true, skipSnaps: false }} 
                plugins={[autoplayPlugin.current]}
                className="mx-auto"
              >
                <CarouselContent>
                  {quotes.map((quote, index) => (
                    <CarouselItem key={index} className="px-2 md:basis-full">
                      <QuoteCard 
                        quote={{
                          ...quote,
                          // Override the quote content
                          quote: index === 0 
                            ? "The Real World is a global community where like-minded individuals work toward achieving their personal goals."
                            : index === 1 
                            ? "Every member receives advanced training and mentoring from our team of experienced industry specialists."
                            : "Develop essential business skills with the help of our coaches through our comprehensive education system.",
                        }} 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all">
              JOIN NOW
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
