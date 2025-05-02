
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AudioVisualization from "@/components/AudioVisualization";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ConversationMessages from "./ConversationMessages";
import PhoneHeader from "./PhoneHeader";
import FeaturePopup from "./FeaturePopup";
import { getConversationMessages, getIndustryTitle, getCtaText } from "@/utils/messageProvider";
import { Brain, MessageSquare, HeartPulse, Clock, SendHorizontal } from "lucide-react";

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
  const [activePopupIndex, setActivePopupIndex] = useState<number | null>(null);
  
  // Define feature pop-ups with timing for when they should appear
  const featurePopups = [
    { 
      time: 5, 
      duration: 8,
      message: "Detects and responds to emotional cues in real-time",
      icon: <HeartPulse size={16} />
    },
    { 
      time: 15, 
      duration: 8,
      message: "Uses voice tone analysis to provide compassionate responses",
      icon: <Brain size={16} />
    },
    { 
      time: 35, 
      duration: 8,
      message: "Handles complex situations with natural conversation flow",
      icon: <MessageSquare size={16} />
    },
    { 
      time: 55, 
      duration: 8,
      message: "Available 24/7 without breaks or burnout",
      icon: <Clock size={16} />
    },
    { 
      time: 70, 
      duration: 8,
      message: "Seamlessly hands off to human staff when needed",
      icon: <SendHorizontal size={16} />
    },
    { 
      time: 85, 
      duration: 8,
      message: "Sends SMS confirmations and follow-up messages automatically",
      icon: <MessageSquare size={16} />
    }
  ];
  
  // Manage elapsed time when conversation is playing
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setElapsedTime(prev => {
          const newTime = prev + 1;
          
          // Check if we should display any feature pop-up
          const popupToShow = featurePopups.findIndex(
            popup => newTime >= popup.time && newTime < popup.time + popup.duration
          );
          
          setActivePopupIndex(popupToShow !== -1 ? popupToShow : null);
          
          if (prev >= totalDuration) {
            if (interval) clearInterval(interval);
            togglePlay(); // Stop playing when reaching the end
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else {
      setActivePopupIndex(null);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, togglePlay, totalDuration]);
  
  // Reset elapsed time when switching industries
  useEffect(() => {
    setElapsedTime(0);
    setActivePopupIndex(null);
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
      className="relative h-full flex flex-col"
    >
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-lg h-full flex flex-col">
        <div className="p-4 flex-1 flex flex-col relative">
          <PhoneHeader 
            title={industryTitle}
            titleClassName={getIndustryHeadlineText(activeIndustry)}
            isPlaying={isPlaying}
            elapsedTime={elapsedTime}
          />

          <div className="flex-1 overflow-y-auto mb-4 text-left text-sm space-y-4 relative">
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center"
              >
                <PlayButton togglePlay={togglePlay} text={ctaText} />
              </motion.div>
            )}
            
            {isPlaying && <ConversationMessages messages={messages} />}
            
            {/* Feature pop-ups display */}
            {isPlaying && activePopupIndex !== null && (
              <FeaturePopup 
                message={featurePopups[activePopupIndex].message}
                icon={featurePopups[activePopupIndex].icon}
                isVisible={true}
              />
            )}
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
