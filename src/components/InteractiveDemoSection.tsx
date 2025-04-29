
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import PhoneInterface from "./demo/PhoneInterface";
import { getIndustryData } from "./demo/industryData";
import { motion } from "framer-motion";
import AudioPlayer from "./demo/AudioPlayer";

type Industry = "restaurant" | "car" | "medical";

const InteractiveDemoSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("restaurant");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const industries: Industry[] = ["restaurant", "car", "medical"];

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

  const industryData = getIndustryData(activeIndustry);

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-700 ${getSectionBackgroundColor()}`}>
      <div className="absolute inset-0 bg-gradient-radial from-voice-purple/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[url('/bg-dots.png')] opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-voice-purple-light to-voice-cream bg-clip-text text-transparent">
            Experience Your AI Voice Agent In Action
          </h2>
          <p className="text-lg text-voice-cream/80 mb-4">
            See how our AI handles real-world scenarios, converts inquiries into bookings, and delivers exceptional customer service.
          </p>
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
                {getIndustryName().split(" ")[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* First industry - Audio on left, text on right */}
        {activeIndustry === "restaurant" && (
          <motion.div
            key="restaurant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-24"
          >
            <div>
              <AudioPlayer 
                title={industryData.audioTitle} 
                color={getIndustryColor()}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  {industryData.icon}
                  <h3 className={`text-2xl font-bold ${getHeadlineGradient()}`}>
                    {industryData.title}
                  </h3>
                </div>
                <p className="text-voice-cream/90 mb-6">
                  {industryData.scenario}
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-voice-cream">Key Features</h4>
                  <ul className="space-y-2">
                    {industryData.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-2 w-2 rounded-full" style={{ background: getIndustryColor() }}></span>
                        <span className="text-voice-cream/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Second industry - Phone on right, text on left */}
        {activeIndustry === "car" && (
          <motion.div
            key="car"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-24"
          >
            <div className="order-2 md:order-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  {industryData.icon}
                  <h3 className={`text-2xl font-bold ${getHeadlineGradient()}`}>
                    {industryData.title}
                  </h3>
                </div>
                <p className="text-voice-cream/90 mb-6">
                  {industryData.scenario}
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-voice-cream">Workflow Steps</h4>
                  <ol className="space-y-3">
                    {industryData.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-0 h-5 w-5 rounded-full flex items-center justify-center text-xs" style={{ background: getIndustryColor() }}>
                          {index + 1}
                        </span>
                        <span className="text-voice-cream/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <PhoneInterface 
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                activeIndustry={activeIndustry}
                getIndustryColor={() => getIndustryColor()}
              />
            </div>
          </motion.div>
        )}

        {/* Third industry - Audio on left, text on right */}
        {activeIndustry === "medical" && (
          <motion.div
            key="medical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-24"
          >
            <div>
              <AudioPlayer 
                title={industryData.audioTitle} 
                color={getIndustryColor()}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  {industryData.icon}
                  <h3 className={`text-2xl font-bold ${getHeadlineGradient()}`}>
                    {industryData.title}
                  </h3>
                </div>
                <p className="text-voice-cream/90 mb-6">
                  {industryData.scenario}
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-voice-cream mb-2">Business Impact</h4>
                  <div className="p-4 border border-white/10 rounded-lg bg-white/5 text-voice-cream">
                    <span className="text-lg font-bold" style={{ color: getIndustryColor() }}>"{industryData.impact}"</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-voice-cream">Agent Flow</h4>
                  <ul className="space-y-2">
                    {industryData.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-2 w-2 rounded-full" style={{ background: getIndustryColor() }}></span>
                        <span className="text-voice-cream/80">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={handlePrevIndustry}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 border border-voice-purple/20 transition-colors shadow-lg group"
          >
            <ChevronLeft className="w-5 h-5 text-voice-cream group-hover:text-voice-purple-light" />
          </button>
          <button 
            onClick={handleNextIndustry}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 border border-voice-purple/20 transition-colors shadow-lg group"
          >
            <ChevronRight className="w-5 h-5 text-voice-cream group-hover:text-voice-purple-light" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
