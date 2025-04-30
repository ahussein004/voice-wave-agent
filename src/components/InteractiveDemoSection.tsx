
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

  // Handle industry change - ensure audio stops when changing industries
  useEffect(() => {
    if (isPlaying) {
      setIsPlaying(false);
    }
  }, [activeIndustry]);

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
    console.log(`Toggling play state to: ${newPlayState ? "playing" : "paused"} for ${activeIndustry}`);
    setIsPlaying(newPlayState);
  };

  // Audio URLs for each industry
  const audioUrls = {
    medical: "https://storage.vapi.ai/1ffe8b56-0b12-4896-99d3-4e97a0b66f5f-1745385676949-4fa0a8aa-4656-48e3-b0e3-814328c2452a-mono.wav",
    restaurant: "https://storage.vapi.ai/e7159544-37eb-4735-b708-51cc3e425e16-1745429620869-35dd65c1-6cad-4407-829f-6879e8f8cdc9-mono.wav",
    car: "https://storage.vapi.ai/61d1e56e-3fc8-405d-9355-f883eda67f5c-1745421414857-f3b21f5b-1d68-430a-af01-7bc5546a6b74-mono.wav"
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
            audioUrl={audioUrls.restaurant}
          />
        )}

        {activeIndustry === "car" && (
          <CarDemo 
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            getIndustryColor={getIndustryColor}
            getHeadlineGradient={getHeadlineGradient}
            audioUrl={audioUrls.car}
          />
        )}

        {activeIndustry === "medical" && (
          <MedicalDemo 
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            getIndustryColor={getIndustryColor}
            getHeadlineGradient={getHeadlineGradient}
            audioUrl={audioUrls.medical}
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
