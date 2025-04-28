
import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

interface Quote {
  author: string;
  company: string;
  role: string;
  logo: string;
  quote: string;
}

interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const isTextLogo = !quote.logo.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group h-full"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/5 rounded-xl blur-lg"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative flex flex-col h-full gap-6 p-8 rounded-xl backdrop-blur-sm border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-500 bg-black/40">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
            <MessageSquareQuote className="w-8 h-8 text-orange-400 group-hover:text-orange-500 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div className="text-2xl font-bold text-white leading-tight">
            {quote.quote}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 pt-4 border-t border-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300"
        >
          <div>
            <div className="font-medium text-lg text-orange-400 group-hover:text-orange-500 transition-colors duration-300">
              Andrew Tate
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Founder, The Real World
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
