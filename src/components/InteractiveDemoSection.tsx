
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useIndustryUI } from "@/hooks/use-industry-ui";
import DemoHeader from "./demo/DemoHeader";
import DemoIndustrySelector from "./demo/DemoIndustrySelector";
import DemoNavigation from "./demo/DemoNavigation";
import RestaurantDemo from "./demo/RestaurantDemo";
import CarDemo from "./demo/CarDemo";
import MedicalDemo from "./demo/MedicalDemo";

type Industry = "restaurant" | "car" | "medical";

const InteractiveDemoSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("restaurant");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const industries: Industry[] = ["restaurant", "car", "medical"];
  const { 
    getIndustryColor, 
    getSectionBackgroundColor, 
    getHeadlineGradient 
  } = useIndustryUI(activeIndustry);

  // Auto-scroll through industries
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlaying) {
        const nextIndex = (currentIndex + 1) % industries.length;
        setCurrentIndex(nextIndex);
        setActiveIndustry(industries[nextIndex]);
      }
    }, 15000); // Change every 15 seconds if not playing audio

    return () => clearInterval(timer);
  }, [currentIndex, industries, isPlaying]);

  const handleNextIndustry = () => {
    const nextIndex = (currentIndex + 1) % industries.length;
    setCurrentIndex(nextIndex);
    setActiveIndustry(industries[nextIndex]);
    setIsPlaying(false);
  };

  const handlePrevIndustry = () => {
    const prevIndex = currentIndex === 0 ? industries.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setActiveIndustry(industries[prevIndex]);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-700 ${getSectionBackgroundColor()}`} id="demo-section">
      <div className="absolute inset-0 bg-gradient-radial from-voice-purple/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[url('/bg-dots.png')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-voice-dark/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <DemoHeader />
        
        <DemoIndustrySelector 
          activeIndustry={activeIndustry}
          setActiveIndustry={setActiveIndustry}
          setCurrentIndex={setCurrentIndex}
          setIsPlaying={setIsPlaying}
          industries={industries}
        />

        {/* Industry Demos */}
        {activeIndustry === "restaurant" && (
          <RestaurantDemo 
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            getIndustryColor={getIndustryColor}
            getHeadlineGradient={getHeadlineGradient}
          />
        )}

        {activeIndustry === "car" && (
          <CarDemo 
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            getIndustryColor={getIndustryColor}
            getHeadlineGradient={getHeadlineGradient}
          />
        )}

        {activeIndustry === "medical" && (
          <MedicalDemo 
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            getIndustryColor={getIndustryColor}
            getHeadlineGradient={getHeadlineGradient}
          />
        )}

        <DemoNavigation 
          handlePrevIndustry={handlePrevIndustry}
          handleNextIndustry={handleNextIndustry}
        />
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
