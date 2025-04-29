
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
    return "bg-voice-purple";
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
        return "text-voice-purple";
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

  const industryData = getIndustryData(activeIndustry);

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-700 ${getSectionBackgroundColor()}`}>
      <div className="absolute inset-0 bg-gradient-radial from-voice-purple/5 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-voice-cream">
            Experience Your AI Voice Agent In Action
          </h2>
          <p className="text-lg text-voice-cream/80 mb-4">
            See how our AI handles real-world scenarios, converts inquiries into bookings, and delivers exceptional customer service.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-6xl mx-auto">
          {/* Left side - Industry Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {/* Industry header */}
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "py-3 px-6 rounded-full mx-auto max-w-max font-medium",
                "bg-white/20 shadow-lg border border-voice-purple/30 backdrop-blur-sm",
                "text-voice-cream"
              )}
            >
              <div className="flex items-center gap-2">
                {industryData.icon}
                <span>{getIndustryName()} Voice Agent</span>
              </div>
            </motion.div>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <button 
                onClick={handlePrevIndustry}
                className="p-3 rounded-full bg-white/20 border border-voice-purple/20 hover:bg-white/30 transition-colors hover:scale-110 group shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-voice-cream group-hover:text-voice-purple-light transition-colors" />
              </button>
              
              <div className="text-voice-cream/80 text-sm">
                Switch Industry
              </div>
              
              <button 
                onClick={handleNextIndustry}
                className="p-3 rounded-full bg-white/20 border border-voice-purple/20 hover:bg-white/30 transition-colors hover:scale-110 group shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-voice-cream group-hover:text-voice-purple-light transition-colors" />
              </button>
            </div>
            
            {/* Industry Analysis section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 border border-voice-purple/20 rounded-xl p-6 shadow-lg backdrop-blur-sm"
            >
              <IndustryAnalysis 
                industryData={industryData}
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
              className="bg-white/10 border border-voice-purple/20 rounded-xl p-6 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 inline-flex items-center text-voice-cream">
                <span className="w-2 h-2 bg-voice-purple rounded-full mr-2"></span>
                Call Analysis Summary
              </h3>
              <AnalysisSummaryCard />
            </motion.div>
          </motion.div>
          
          {/* Right side - Stacked Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-1/2 space-y-12"
          >
            {/* Medical Industry Phone */}
            <PhoneMockup 
              industry="medical"
              textColor="text-[#0EA5E9]"
              gradientColors="from-[#0EA5E9] to-[#7dd3fc]"
              message="I need to schedule a follow-up appointment for next week."
              delay={0.1}
            />
            
            {/* Restaurant Industry Phone */}
            <PhoneMockup 
              industry="restaurant"
              textColor="text-[#F97316]"
              gradientColors="from-[#F97316] to-[#FDBA74]"
              message="I'd like to make a dinner reservation for tonight at 8 PM."
              delay={0.3}
            />
            
            {/* Automotive Industry Phone */}
            <PhoneMockup 
              industry="car"
              textColor="text-[#84cc16]"
              gradientColors="from-[#84cc16] to-[#bef264]"
              message="I'd like to book a service appointment for my vehicle."
              delay={0.5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Phone mockup component for each industry
const PhoneMockup = ({ industry, textColor, gradientColors, message, delay = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative transform hover:scale-105 transition-all duration-300 mx-auto max-w-[280px]"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColors} opacity-30 blur-lg rounded-3xl`} />
      <div className="aspect-[9/16] relative bg-gray-900 rounded-3xl border-8 border-voice-purple/30 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
        
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className={`text-sm font-medium bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
              {industry === "medical" ? "Healthcare" : industry === "restaurant" ? "Restaurant" : "Automotive"} Voice Agent
            </div>
            <div className="text-sm text-voice-cream/70">2:13</div>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 text-left text-sm space-y-4">
            <div className="ml-2 p-3 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%] backdrop-blur-sm text-voice-cream/90">
              Hello, this is VoiceWave AI, how can I assist you today?
            </div>
            
            <div className="mr-2 p-3 bg-voice-purple/30 rounded-lg rounded-tr-none max-w-[80%] ml-auto backdrop-blur-sm text-voice-cream">
              {message}
            </div>
            
            <div className="ml-2 p-3 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%] backdrop-blur-sm text-voice-cream/90">
              {industry === "medical" 
                ? "I'd be happy to schedule your follow-up appointment. What day works best for you next week?" 
                : industry === "restaurant"
                ? "I'd be happy to make that reservation. Do you have any seating preferences for your party?" 
                : "I can help you schedule a service appointment. What type of service does your vehicle need?"}
            </div>
            
            <div className="text-center my-4 text-xs text-voice-cream/60">
              <div className="inline-block px-3 py-1 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                {industry === "medical" 
                  ? "Checking doctor availability..." 
                  : industry === "restaurant" 
                  ? "Checking table availability..." 
                  : "Checking service availability..."}
              </div>
            </div>
          </div>

          <div className="h-16 relative flex items-center justify-center">
            {/* Voice waves animation */}
            <div className="flex items-end justify-center h-8 space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`w-1 ${isPlaying ? "animate-wave" : ""} rounded-full bg-gradient-to-t ${gradientColors}`}
                  style={{ 
                    height: `${Math.random() * 16 + 8}px`,
                    animationDelay: `${i * 0.1}s` 
                  }}
                ></div>
              ))}
            </div>
            
            <button 
              onClick={togglePlay}
              className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-105 bg-voice-purple animate-phone-pulse`}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white ml-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveDemoSection;
