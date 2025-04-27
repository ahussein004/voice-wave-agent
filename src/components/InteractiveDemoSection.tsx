
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import PhoneInterface from "./demo/PhoneInterface";
import IndustryAnalysis from "./demo/IndustryAnalysis";
import { getIndustryData } from "./demo/industryData";
import { motion } from "framer-motion";
import AnalysisSummaryCard from "./AnalysisSummaryCard";

type Industry = "restaurant" | "car" | "medical";

const InteractiveDemoSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("restaurant");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScenarioOpen, setIsScenarioOpen] = useState(false);
  const isMobile = useIsMobile();

  const industries: Industry[] = ["restaurant", "car", "medical"];

  const handleNextIndustry = () => {
    const currentIndex = industries.indexOf(activeIndustry);
    const nextIndex = (currentIndex + 1) % industries.length;
    setActiveIndustry(industries[nextIndex]);
    setIsPlaying(false);
  };

  const handlePrevIndustry = () => {
    const currentIndex = industries.indexOf(activeIndustry);
    const prevIndex = currentIndex === 0 ? industries.length - 1 : currentIndex - 1;
    setActiveIndustry(industries[prevIndex]);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getIndustryColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "bg-[#F97316]";
      case "car":
        return "bg-[#F97316]";
      case "medical":
        return "bg-[#0EA5E9]";
      default:
        return "bg-voice-purple";
    }
  };

  const getIndustryTextColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "text-[#F97316]";
      case "car":
        return "text-[#F97316]";
      case "medical":
        return "text-[#0EA5E9]";
      default:
        return "text-voice-purple";
    }
  };

  const industryData = getIndustryData(activeIndustry);

  return (
    <section className="py-24 bg-voice-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-voice-purple/5 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience Your AI Voice Agent In Action
          </h2>
          <p className="text-lg text-voice-cream/80">
            See how our AI handles real-world scenarios, converts inquiries into bookings, and delivers exceptional customer service.
          </p>
        </motion.div>

        <div className="relative">
          <button 
            onClick={handlePrevIndustry}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-voice-dark/80 border border-voice-purple/20 hover:bg-voice-dark/90 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-voice-cream" />
          </button>

          <button 
            onClick={handleNextIndustry}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-voice-dark/80 border border-voice-purple/20 hover:bg-voice-dark/90 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-voice-cream" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start px-12">
            <div className="order-2 lg:order-1">
              <IndustryAnalysis 
                industryData={industryData}
                isScenarioOpen={isScenarioOpen}
                setIsScenarioOpen={setIsScenarioOpen}
                getIndustryColor={getIndustryColor}
                getIndustryTextColor={getIndustryTextColor}
                activeIndustry={activeIndustry}
              />
              <AnalysisSummaryCard />
            </div>
            
            <div className="order-1 lg:order-2">
              <PhoneInterface 
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                activeIndustry={activeIndustry}
                getIndustryColor={getIndustryColor}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
