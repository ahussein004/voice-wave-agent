
import React, { useEffect, useState } from "react";
import { MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const StatsSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
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

  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-voice-dark via-voice-purple/5 to-gray-900" />
      
      <div className="container relative z-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
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

        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              duration: 30,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {quotes.map((quote, index) => (
                <CarouselItem key={quote.author} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group h-full"
                  >
                    <div 
                      className="absolute inset-0 bg-voice-purple/5 rounded-xl blur-2xl group-hover:bg-voice-purple/20 transition-all duration-500 group-hover:blur-3xl"
                    />
                    <div className="relative flex flex-col h-full gap-4 p-6 rounded-xl backdrop-blur-sm border border-voice-purple/10 group-hover:border-voice-purple/30 transition-all duration-500">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 p-2 bg-voice-purple/10 rounded-lg group-hover:bg-voice-purple/20 transition-colors duration-300">
                          <MessageSquareQuote className="w-6 h-6 text-voice-purple-light group-hover:text-voice-purple group-hover:rotate-12 transition-all duration-300" />
                        </div>
                        <img 
                          src={quote.logo}
                          alt={`${quote.company} logo`}
                          className="h-8 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="space-y-3 flex-1">
                        <blockquote className="text-lg text-voice-cream leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                          "{quote.quote}"
                        </blockquote>
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-2 pt-2 border-t border-voice-purple/10 group-hover:border-voice-purple/30 transition-colors duration-300"
                        >
                          <div>
                            <div className="font-medium text-voice-purple-light group-hover:text-voice-purple transition-colors duration-300">
                              {quote.author}
                            </div>
                            <div className="text-sm text-voice-cream/70 group-hover:text-voice-cream/90 transition-colors duration-300">
                              {quote.role}, {quote.company}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
