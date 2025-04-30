
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  sender: "ai" | "user" | "system";
  text: string;
}

interface ConversationMessagesProps {
  messages: Message[];
}

const ConversationMessages: React.FC<ConversationMessagesProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => {
        if (message.sender === "system") {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.3 }}
              className="text-center my-4 text-xs text-voice-cream/60"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                {message.text}
              </div>
            </motion.div>
          );
        }
        
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.3 }}
            className={cn(
              "p-3 rounded-lg max-w-[80%]",
              message.sender === "ai" 
                ? "ml-2 bg-gray-800/50 rounded-tl-none backdrop-blur-sm" 
                : "mr-2 bg-voice-purple/30 rounded-tr-none ml-auto backdrop-blur-sm"
            )}
          >
            {message.text}
          </motion.div>
        );
      })}
    </>
  );
};

export default ConversationMessages;
