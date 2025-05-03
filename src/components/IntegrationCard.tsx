
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationCardProps {
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
  };
  index: number;
}

const IntegrationCard = ({ feature, index }: IntegrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={cn(
        "relative p-6 rounded-xl bg-gradient-to-br border",
        "hover:border-indigo-500/40 transition-all duration-300",
        "group cursor-pointer h-full",
        "from-gray-900/80 to-gray-800/80 border-indigo-500/20",
        feature.color
      )}>
        <div className="absolute inset-0 bg-gray-900/40 rounded-xl backdrop-blur-sm z-0" />
        
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
            <feature.icon className="w-6 h-6 text-indigo-400" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {feature.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>

        <motion.div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-600/5 blur-xl pointer-events-none" 
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.9, 1.02, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );
};

export default IntegrationCard;
