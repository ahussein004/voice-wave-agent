
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

type Industry = "medical" | "restaurant" | "car";

const InteractiveDemoSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("medical");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Start with medical (index 0)
  const isMobile = useIsMobile();

  const industries: Industry[] = ["medical", "restaurant", "car"]; // Reordering industries to make medical first
  const { 
    getIndustryColor, 
    getSectionBackgroundColor, 
    getHeadlineGradient 
  } = useIndustryUI(activeIndustry);

  // Disable auto-scrolling completely - only move when user interacts
  // We're removing the auto-scroll effect that was previously here

  const handleNextIndustry = () => {
    const nextIndex = (currentIndex + 1) % industries.length;
    setCurrentIndex(nextIndex);
    setActiveIndustry(industries[nextIndex]);
    setIsPlaying(false);
    console.log("Changed to next industry:", industries[nextIndex]);
  };

  const handlePrevIndustry = () => {
    const prevIndex = currentIndex === 0 ? industries.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setActiveIndustry(industries[prevIndex]);
    setIsPlaying(false);
    console.log("Changed to previous industry:", industries[prevIndex]);
  };

  const togglePlay = () => {
    const newPlayState = !isPlaying;
    console.log(`Toggling play state to: ${newPlayState ? "playing" : "paused"}`);
    setIsPlaying(newPlayState);
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
