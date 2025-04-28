
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { QuoteCard } from "./quotes/QuoteCard";
import Autoplay from "embla-carousel-autoplay";
import { quotes } from "@/data/quotes";
import { getIndustryData } from "@/components/demo/industryData";
import PhoneInterface from "./demo/PhoneInterface";

const StatsSection = () => {
  // Autoplay plugin with 8 seconds delay
  const autoplayPlugin = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );

  // Define industry data for the three vertically stacked phones
  const industries = ["medical", "restaurant", "car"] as const;
  
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white text-gray-900">
      <div className="container relative z-10 mx-auto mt-8 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Quotes carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden order-2 lg:order-1"
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
          
          {/* Right side: 3 Phone mockups stacked vertically */}
          <div className="flex flex-col space-y-12 order-1 lg:order-2">
            {industries.map((industry, index) => {
              const industryData = getIndustryData(industry);
              return (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-b from-gray-100 to-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      {industryData.icon}
                      <h4 className="text-lg font-medium">{industryData.audioTitle}</h4>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-1/2">
                        <p className="text-sm text-gray-700 mb-4">{industryData.scenario.split('.')[0]}.</p>
                        <div className="hidden md:block">
                          <div className="flex items-center text-xs text-voice-purple mb-2">
                            <span className="font-semibold mr-1">Top Feature:</span> 
                            {industryData.keyFeatures[0]}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/2 flex justify-center">
                        <div className="transform hover:scale-105 transition-all duration-300">
                          <PhoneInterface 
                            isPlaying={false}
                            togglePlay={() => {}}
                            activeIndustry={industry}
                            getIndustryColor={() => 
                              industry === "restaurant" 
                                ? "bg-gradient-to-r from-orange-500 to-orange-400" 
                                : industry === "car" 
                                  ? "bg-gradient-to-r from-lime-600 to-lime-500" 
                                  : "bg-gradient-to-r from-sky-500 to-sky-400"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
