
import React from "react";
import { cn } from "@/lib/utils";

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

  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      {industries.map((industry, index) => (
        <button
          key={industry}
          onClick={() => {
            setActiveIndustry(industry);
            setCurrentIndex(index);
            setIsPlaying(false);
          }}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            activeIndustry === industry 
              ? "bg-white/20 shadow-lg border border-voice-purple/30 text-white"
              : "text-white/50 hover:text-white"
          )}
        >
          {getIndustryName(industry).split(" ")[0]}
        </button>
      ))}
    </div>
  );
};

export default DemoIndustrySelector;
