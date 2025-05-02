
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

// Define feature popups that will be shown during demo playback
const featurePopups = [
  {
    id: 1,
    title: "Emotional Intelligence",
    description: "Detects customer emotions and adapts conversation style",
    icon: "🧠",
    delay: 15,
    duration: 5
  },
  {
    id: 2,
    title: "Natural Understanding",
    description: "Comprehends complex requests and provides accurate responses",
    icon: "🗣️",
    delay: 35, 
    duration: 5
  },
  {
    id: 3,
    title: "24/7 Availability",
    description: "Never misses a call, ensures round-the-clock service",
    icon: "⏰",
    delay: 65,
    duration: 5
  },
  {
    id: 4,
    title: "Task Delegation",
    description: "Seamlessly transfers complex issues to human agents",
    icon: "👥",
    delay: 95,
    duration: 5
  },
  {
    id: 5,
    title: "SMS & Notifications",
    description: "Sends confirmation texts & appointment reminders",
    icon: "📱",
    delay: 125,
    duration: 5
  }
];

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
  const [activePopup, setActivePopup] = useState<number | null>(null);
  
  // Load saved state from localStorage
  useEffect(() => {
    const savedElapsedTime = localStorage.getItem(`elapsedTime-${activeIndustry}`);
    if (savedElapsedTime) {
      setElapsedTime(parseInt(savedElapsedTime, 10));
    } else {
      setElapsedTime(0);
    }
  }, [activeIndustry]);
  
  // Manage elapsed time when conversation is playing
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setElapsedTime(prev => {
          const newTime = prev >= totalDuration ? 0 : prev + 1;
          // Save progress to localStorage
          localStorage.setItem(`elapsedTime-${activeIndustry}`, newTime.toString());
          
          if (newTime >= totalDuration) {
            if (interval) clearInterval(interval);
            togglePlay(); // Stop playing when reaching the end
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, togglePlay, totalDuration, activeIndustry]);
  
  // Feature popup management
  useEffect(() => {
    if (!isPlaying) {
      setActivePopup(null);
      return;
    }
    
    // Check for popups based on elapsed time
    const checkPopups = () => {
      const popup = featurePopups.find(
        p => elapsedTime >= p.delay && elapsedTime < p.delay + p.duration
      );
      setActivePopup(popup ? popup.id : null);
    };
    
    const popupInterval = setInterval(checkPopups, 1000);
    checkPopups(); // Check immediately
    
    return () => clearInterval(popupInterval);
  }, [elapsedTime, isPlaying]);
  
  const messages = getConversationMessages(activeIndustry);
  const industryTitle = getIndustryTitle(activeIndustry);
  const ctaText = getCtaText(activeIndustry);
  
  // Find current popup to display
  const currentPopup = featurePopups.find(p => p.id === activePopup);
  
  console.log("PhoneInterface rendering:", { isPlaying, audioUrl, activeIndustry });
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative h-full flex flex-col"
    >
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-lg h-full flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
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
            
            {/* Feature Popup */}
            {currentPopup && isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bottom-2 left-0 right-0 mx-auto w-[90%] bg-voice-purple/90 text-white p-3 rounded-lg shadow-lg backdrop-blur-sm border border-white/20"
                style={{ zIndex: 50 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{currentPopup.icon}</span>
                  <div>
                    <h4 className="font-bold text-white">{currentPopup.title}</h4>
                    <p className="text-xs text-white/90">{currentPopup.description}</p>
                  </div>
                </div>
              </motion.div>
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
