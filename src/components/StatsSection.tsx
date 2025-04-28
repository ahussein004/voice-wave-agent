
import React, { useEffect, useState } from "react";
import { MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const StatsSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  
  // Create autoplay plugin as a standalone instance
  const autoplayOptions = { delay: 6000, stopOnInteraction: false };
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [autoplayPlugin]
  );
  
  const quotes = [
    {
      author: "Jeff Bezos",
      company: "Amazon",
      role: "Founder",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      quote: "AI voice agents will become our digital assistants, transforming customer interactions. They'll handle bookings, support, and insights-making businesses more efficient and responsive."
    },
    {
      author: "Satya Nadella",
      company: "Microsoft",
      role: "CEO",
      logo: "public/lovable-uploads/061d4e08-e3f5-4281-a6c9-20e97a2b5126.png",
      quote: "Voice agents are the future of human-computer interaction. They'll understand intent, predict needs, and act autonomously-revolutionizing customer service and workflow automation."
    },
    {
      author: "Sundar Pichai",
      company: "Google",
      role: "CEO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png",
      quote: "By 2025, AI will power most customer interactions. Voice agents will be the primary interface, delivering instant resolutions and personalized experiences."
    },
    {
      author: "Jensen Huang",
      company: "NVIDIA",
      role: "CEO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
      quote: "Voice AI is the cornerstone of automation. Breakthroughs in generative speech are enabling hyper-realistic agents that handle complex tasks-24/7, in any language."
    },
    {
      author: "Arvind Krishna",
      company: "IBM",
      role: "CEO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      quote: "AI voice agents amplify human potential. They're not replacing teams-they're empowering them to focus on high-value work while automating routine interactions."
    },
    {
      author: "Marc Benioff",
      company: "Salesforce",
      role: "CEO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      quote: "Voice agents are a high-margin opportunity. Deploying them at scale lets businesses capture more leads, reduce overhead, and deliver instant customer joy."
    }
  ];

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
              {quotes.map((quote, index) => (
                <div 
                  key={quote.author} 
                  className="flex-[0_0_100%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative group h-full"
                  >
                    <div 
                      className="absolute inset-0 bg-voice-purple/5 rounded-xl blur-lg group-hover:bg-voice-purple/30 transition-all duration-500"
                    />
                    <div className="relative flex flex-col h-full gap-6 p-8 rounded-xl backdrop-blur-sm border border-voice-purple/10 group-hover:border-voice-purple/30 transition-all duration-500 shadow-lg">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0 p-3 bg-voice-purple/10 rounded-lg group-hover:bg-voice-purple/20 transition-all duration-300">
                          <MessageSquareQuote className="w-8 h-8 text-voice-purple-light group-hover:text-voice-purple group-hover:rotate-12 transition-all duration-300" />
                        </div>
                        <img 
                          src={quote.logo}
                          alt={`${quote.company} logo`}
                          className="h-10 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="space-y-6">
                        <blockquote className="text-xl text-voice-cream leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                          "{quote.quote}"
                        </blockquote>
                        <motion.div 
                          initial={{ opacity: 0.8 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 pt-4 border-t border-voice-purple/10 group-hover:border-voice-purple/30 transition-colors duration-300"
                        >
                          <div>
                            <div className="font-medium text-lg text-voice-purple-light group-hover:text-voice-purple transition-colors duration-300">
                              {quote.author}
                            </div>
                            <div className="text-voice-cream/70 group-hover:text-voice-cream/90 transition-colors duration-300">
                              {quote.role}, {quote.company}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeQuote === index
                    ? "w-8 bg-voice-purple-light"
                    : "bg-voice-purple/30 hover:bg-voice-purple/50"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden md:block bg-voice-purple/20 hover:bg-voice-purple/30 p-2 rounded-full backdrop-blur-sm border border-voice-purple/30 transition-all hover:scale-110"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            aria-label="Previous quote"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden md:block bg-voice-purple/20 hover:bg-voice-purple/30 p-2 rounded-full backdrop-blur-sm border border-voice-purple/30 transition-all hover:scale-110"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            aria-label="Next quote"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
