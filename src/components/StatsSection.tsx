
import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const quotes = [
    {
      author: "Jeff Bezos",
      company: "Amazon",
      role: "Founder",
      quote: "AI voice agents will become our digital assistants, transforming customer interactions. They'll handle bookings, support, and insights-making businesses more efficient and responsive."
    },
    {
      author: "Satya Nadella",
      company: "Microsoft",
      role: "CEO",
      quote: "Voice agents are the future of human-computer interaction. They'll understand intent, predict needs, and act autonomously-revolutionizing customer service and workflow automation."
    },
    {
      author: "Sundar Pichai",
      company: "Google",
      role: "CEO",
      quote: "By 2025, AI will power most customer interactions. Voice agents will be the primary interface, delivering instant resolutions and personalized experiences."
    },
    {
      author: "Jensen Huang",
      company: "NVIDIA",
      role: "CEO",
      quote: "Voice AI is the cornerstone of automation. Breakthroughs in generative speech are enabling hyper-realistic agents that handle complex tasks-24/7, in any language."
    },
    {
      author: "Arvind Krishna",
      company: "IBM",
      role: "CEO", 
      quote: "AI voice agents amplify human potential. They're not replacing teams-they're empowering them to focus on high-value work while automating routine interactions."
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-voice-dark to-gray-900" />
      
      <div className="container relative z-10 mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-voice-purple/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-voice-purple/30">
            <span className="h-2 w-2 rounded-full bg-voice-purple-light animate-pulse mr-2" />
            <span className="text-sm font-medium text-voice-cream/90">Industry Leaders' Vision</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Future of AI Voice Agents</h2>
          <p className="text-voice-cream/70 max-w-lg mx-auto">
            Leading tech visionaries share their insights on the transformative power of AI voice technology
          </p>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <MessageSquareQuote className="w-8 h-8 text-voice-purple-light flex-shrink-0 opacity-50" />
                <div className="space-y-4">
                  <blockquote className="text-lg md:text-xl text-voice-cream/90 leading-relaxed font-light">
                    "{quote.quote}"
                  </blockquote>
                  <div className="pt-4 border-t border-voice-purple/10">
                    <div className="font-medium text-voice-purple-light">
                      {quote.author}
                    </div>
                    <div className="text-sm text-voice-cream/70">
                      {quote.role}, {quote.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
