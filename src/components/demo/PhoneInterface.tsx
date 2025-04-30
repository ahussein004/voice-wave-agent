
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AudioVisualization from "@/components/AudioVisualization";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ConversationMessages from "./ConversationMessages";
import PhoneHeader from "./PhoneHeader";
import { getConversationMessages, getIndustryTitle, getCtaText } from "@/utils/messageProvider";

interface PhoneInterfaceProps {
  isPlaying: boolean;
  togglePlay: () => void;
  activeIndustry: "restaurant" | "car" | "medical";
  getIndustryColor: () => string;
  audioUrl?: string;
}

const PhoneInterface: React.FC<PhoneInterfaceProps> = ({
  isPlaying,
  togglePlay,
  activeIndustry,
  getIndustryColor,
  audioUrl
}) => {
  // Total duration in seconds (conversation length)
  const totalDuration = 180;
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Manage elapsed time when conversation is playing
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setElapsedTime(prev => {
          if (prev >= totalDuration) {
            if (interval) clearInterval(interval);
            togglePlay(); // Stop playing when reaching the end
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, togglePlay, totalDuration]);
  
  // Reset elapsed time when switching industries
  useEffect(() => {
    setElapsedTime(0);
  }, [activeIndustry]);
  
  const messages = getConversationMessages(activeIndustry);
  const industryTitle = getIndustryTitle(activeIndustry);
  const ctaText = getCtaText(activeIndustry);
  
  console.log("PhoneInterface rendering:", { isPlaying, audioUrl, activeIndustry });
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-lg">
        <div className="p-4">
          <PhoneHeader 
            title={industryTitle}
            titleClassName={getIndustryHeadlineText(activeIndustry)}
            isPlaying={isPlaying}
            elapsedTime={elapsedTime}
          />

          <div className="overflow-y-auto mb-4 text-left text-sm space-y-4">
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <PlayButton togglePlay={togglePlay} text={ctaText} />
              </motion.div>
            )}
            
            {isPlaying && <ConversationMessages messages={messages} />}
          </div>

          {isPlaying && (
            <div className="h-24 relative flex items-center justify-center">
              <AudioVisualization 
                isPlaying={isPlaying} 
                color="#9b87f5"
                duration={totalDuration}
                elapsedTime={elapsedTime}
                audioUrl={audioUrl}
              />
              
              <PauseButton togglePlay={togglePlay} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
  
  // Helper function for industry-specific text styling
  function getIndustryHeadlineText(industry: "restaurant" | "car" | "medical") {
    switch (industry) {
      case "restaurant":
        return "bg-gradient-to-r from-[#F97316] to-[#FDBA74] bg-clip-text text-transparent";
      case "car":
        return "bg-gradient-to-r from-[#84cc16] to-[#bef264] bg-clip-text text-transparent";
      case "medical":
        return "bg-gradient-to-r from-[#0EA5E9] to-[#7dd3fc] bg-clip-text text-transparent";
      default:
        return "";
    }
  }
};

export default PhoneInterface;
