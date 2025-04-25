
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
        "relative p-6 rounded-xl bg-gradient-to-br border border-voice-purple/20",
        "hover:border-voice-purple/40 transition-all duration-300",
        "group cursor-pointer h-full",
        feature.color
      )}>
        <div className="absolute inset-0 bg-voice-dark/40 rounded-xl backdrop-blur-sm z-0" />
        
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-voice-purple/20 border border-voice-purple/30 group-hover:scale-110 transition-transform duration-300">
            <feature.icon className="w-6 h-6 text-voice-purple" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-voice-cream group-hover:text-gradient transition-all duration-300">
            {feature.title}
          </h3>
          
          <p className="text-voice-cream/70 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>

        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-voice-purple/5 blur-xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default IntegrationCard;
