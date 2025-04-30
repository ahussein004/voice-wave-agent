
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DemoIndustrySelectorProps {
  activeIndustry: "medical" | "restaurant" | "car";
  setActiveIndustry: (industry: "medical" | "restaurant" | "car") => void;
  setCurrentIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  industries: ("medical" | "restaurant" | "car")[];
}

const DemoIndustrySelector = ({
  activeIndustry,
  setActiveIndustry,
  setCurrentIndex,
  setIsPlaying,
  industries
}: DemoIndustrySelectorProps) => {
  const getIndustryName = (industry: "medical" | "restaurant" | "car") => {
    switch (industry) {
      case "medical":
        return "Healthcare Industry";
      case "restaurant":
        return "Restaurant Industry";
      case "car":
        return "Automotive Industry";
      default:
        return "Voice Agent";
    }
  };

  const getIndustryIcon = (industry: "medical" | "restaurant" | "car") => {
    switch (industry) {
      case "medical":
        return "🏥";
      case "restaurant":
        return "🍽️";
      case "car":
        return "🚗";
      default:
        return "🎙️";
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-16">
      {industries.map((industry, index) => (
        <motion.button
          key={industry}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          onClick={() => {
            setActiveIndustry(industry);
            setCurrentIndex(index);
            setIsPlaying(false);
          }}
          className={cn(
            "px-6 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2",
            activeIndustry === industry 
              ? "bg-white/20 shadow-lg border border-voice-purple/40 text-white transform scale-105"
              : "text-white/60 hover:text-white hover:bg-white/10 hover:border-voice-purple/20 border border-transparent"
          )}
        >
          <span className="text-xl">{getIndustryIcon(industry)}</span>
          {getIndustryName(industry)}
        </motion.button>
      ))}
    </div>
  );
};

export default DemoIndustrySelector;
