
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
  const isMobile = useIsMobile();

  const industries: Industry[] = ["restaurant", "car", "medical"];
  
  // Get the current industry data
  const currentIndustryData = getIndustryData(activeIndustry);

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
    return "bg-orange-500";
  };

  const getIndustryTextColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "text-[#F97316]";
      case "car":
        return "text-[#84cc16]";
      case "medical":
        return "text-[#0EA5E9]";
      default:
        return "text-orange-500";
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

  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-700 bg-white">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Experience Your AI Voice Agent In Action
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            See how our AI handles real-world scenarios, converts inquiries into bookings, and delivers exceptional customer service.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <ChevronLeft className="w-4 h-4" />
            <span>Scroll through industries</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <button 
            onClick={handlePrevIndustry}
            className="absolute left-0 lg:-left-16 top-32 z-10 p-4 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors hover:scale-110 group shadow-md"
          >
            <ChevronLeft className="w-8 h-8 text-gray-500 group-hover:text-orange-500 transition-colors" />
          </button>

          <button 
            onClick={handleNextIndustry}
            className="absolute right-0 lg:-right-16 top-32 z-10 p-4 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors hover:scale-110 group shadow-md"
          >
            <ChevronRight className="w-8 h-8 text-gray-500 group-hover:text-orange-500 transition-colors" />
          </button>

          <div className="space-y-12">
            {/* Industry header */}
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "py-3 px-6 rounded-full mx-auto max-w-max font-medium",
                "bg-orange-100 shadow-lg border border-orange-200",
                "text-gray-700"
              )}
            >
              <div className="flex items-center gap-2">
                {currentIndustryData.icon}
                <span>{getIndustryName()} Voice Agent</span>
              </div>
            </motion.div>
            
            {/* Phone interface centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xs"
            >
              <PhoneInterface 
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                activeIndustry={activeIndustry}
                getIndustryColor={getIndustryColor}
              />
            </motion.div>
            
            {/* Industry Analysis section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 border border-gray-200 rounded-xl p-6 shadow-lg"
            >
              <IndustryAnalysis 
                industryData={currentIndustryData}
                isScenarioOpen={true}
                setIsScenarioOpen={() => {}}
                getIndustryColor={getIndustryColor}
                getIndustryTextColor={getIndustryTextColor}
                activeIndustry={activeIndustry}
              />
            </motion.div>
            
            {/* Analysis Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 border border-gray-200 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 inline-flex items-center text-gray-800">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Call Analysis Summary
              </h3>
              <AnalysisSummaryCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
