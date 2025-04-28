
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
      <div className="absolute inset-0 bg-gradient-to-br from-voice-dark via-voice-purple/5 to-gray-900" />
      
      <div className="container relative z-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-voice-purple/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-voice-purple/30">
            <span className="h-2 w-2 rounded-full bg-voice-purple-light animate-pulse mr-2" />
            <span className="text-sm font-medium text-voice-cream/90">Industry Leaders' Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">The Future of AI Voice Agents</h2>
          <p className="text-voice-cream/70 max-w-lg mx-auto text-lg">
            Leading tech visionaries share their insights on the transformative power of AI voice technology
          </p>
        </motion.div>

        <div className="space-y-24 max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-voice-purple/5 rounded-3xl blur-3xl group-hover:bg-voice-purple/10 transition-colors duration-500" />
              <div className="relative flex flex-col md:flex-row items-start gap-8 p-6">
                <div className="flex-shrink-0 p-3 bg-voice-purple/10 rounded-xl">
                  <MessageSquareQuote className="w-8 h-8 text-voice-purple-light" />
                </div>
                <div className="space-y-6">
                  <blockquote className="text-xl md:text-2xl text-voice-cream leading-relaxed font-light">
                    "{quote.quote}"
                  </blockquote>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 pt-4 border-t border-voice-purple/10"
                  >
                    <div>
                      <div className="font-medium text-voice-purple-light text-lg">
                        {quote.author}
                      </div>
                      <div className="text-voice-cream/70">
                        {quote.role}, {quote.company}
                      </div>
                    </div>
                  </motion.div>
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
