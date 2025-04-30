
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
  }, [isPlaying, togglePlay]);
  
  // Reset elapsed time when switching industries
  useEffect(() => {
    setElapsedTime(0);
  }, [activeIndustry]);
  
  const getPhoneGlowColor = () => {
    return "from-voice-purple/30 via-transparent to-transparent";
  };
  
  const getBorderColor = () => {
    return "border-voice-purple/30";
  };

  const getIndustryHeadlineText = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "bg-gradient-to-r from-[#F97316] to-[#FDBA74] bg-clip-text text-transparent";
      case "car":
        return "bg-gradient-to-r from-[#84cc16] to-[#bef264] bg-clip-text text-transparent";
      case "medical":
        return "bg-gradient-to-r from-[#0EA5E9] to-[#7dd3fc] bg-clip-text text-transparent";
      default:
        return "";
    }
  };
  
  const messages = getConversationMessages(activeIndustry);
  const industryTitle = getIndustryTitle(activeIndustry);
  const ctaText = getCtaText(activeIndustry);
  
  console.log("PhoneInterface rendering:", { isPlaying, audioUrl, activeIndustry });
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div className={`absolute -inset-4 bg-gradient-to-r ${getPhoneGlowColor()} blur-3xl`} />
      <div className={`aspect-[9/16] max-w-xs mx-auto bg-gray-900/50 rounded-3xl border-8 ${getBorderColor()} shadow-2xl overflow-hidden relative backdrop-blur-xl`}>
        <div className="absolute inset-0 phone-glow opacity-50" />
        
        <div className="p-4 h-full flex flex-col">
          <PhoneHeader 
            title={industryTitle}
            titleClassName={getIndustryHeadlineText()}
            isPlaying={isPlaying}
            elapsedTime={elapsedTime}
          />

          <div className="flex-1 overflow-y-auto mb-4 text-left text-sm space-y-4">
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
};

export default PhoneInterface;
