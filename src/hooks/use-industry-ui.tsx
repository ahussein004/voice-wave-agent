
import { useState } from "react";

type Industry = "restaurant" | "car" | "medical";

export function useIndustryUI(activeIndustry: Industry) {
  const getIndustryColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "#F97316";
      case "car":
        return "#84cc16";
      case "medical":
        return "#0EA5E9";
      default:
        return "#9b87f5";
    }
  };

  const getIndustryName = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "Restaurant Industry";
      case "car":
        return "Automotive Industry";
      case "medical":
        return "Healthcare Industry";
      default:
        return "Voice Agent";
    }
  };
  
  const getSectionBackgroundColor = () => {
    return "bg-hero-pattern";
  };

  const getHeadlineGradient = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "bg-gradient-to-r from-[#F97316] to-[#FDBA74] bg-clip-text text-transparent";
      case "car":
        return "bg-gradient-to-r from-[#84cc16] to-[#bef264] bg-clip-text text-transparent";
      case "medical":
        return "bg-gradient-to-r from-[#0EA5E9] to-[#7dd3fc] bg-clip-text text-transparent";
      default:
        return "text-gradient";
    }
  };

  return {
    getIndustryColor,
    getIndustryName,
    getSectionBackgroundColor,
    getHeadlineGradient
  };
}
