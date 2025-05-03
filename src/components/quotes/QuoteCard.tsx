
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
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-500/10 rounded-xl blur-lg"
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
      <div className="relative flex flex-col h-full gap-6 p-8 rounded-xl backdrop-blur-sm border border-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500 shadow-lg">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 p-3 bg-indigo-600/10 rounded-lg group-hover:bg-indigo-600/20 transition-all duration-300">
            <MessageSquareQuote className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 group-hover:rotate-12 transition-all duration-300" />
          </div>
          {isTextLogo ? (
            <span className="text-2xl font-bold text-gray-100/90 group-hover:text-white transition-colors duration-300">
              {quote.logo}
            </span>
          ) : (
            <img 
              src={quote.logo}
              alt={`${quote.company} logo`}
              className="h-10 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.blockquote 
            className="text-xl text-gray-200 leading-relaxed font-light group-hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            "{quote.quote}"
          </motion.blockquote>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 pt-4 border-t border-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300"
          >
            <div>
              <div className="font-medium text-lg text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                {quote.author}
              </div>
              <div className="text-gray-300/70 group-hover:text-gray-300/90 transition-colors duration-300">
                {quote.role}, {quote.company}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
