
import React from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import AudioVisualization from "@/components/AudioVisualization";
import { motion } from "framer-motion";

interface PhoneInterfaceProps {
  isPlaying: boolean;
  togglePlay: () => void;
  activeIndustry: "restaurant" | "car" | "medical";
  getIndustryColor: () => string;
}

const PhoneInterface: React.FC<PhoneInterfaceProps> = ({
  isPlaying,
  togglePlay,
  activeIndustry,
  getIndustryColor,
}) => {
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
          <div className="flex items-center justify-between mb-4">
            <div className={`text-sm font-medium ${getIndustryHeadlineText()}`}>AI Voice Agent</div>
            <div className="text-sm opacity-70">2:13</div>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 text-left text-sm space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="ml-2 p-3 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%] backdrop-blur-sm"
            >
              Hello, this is VoiceWave AI, how can I assist you today?
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mr-2 p-3 bg-voice-purple/30 rounded-lg rounded-tr-none max-w-[80%] ml-auto backdrop-blur-sm"
            >
              Hi, I'd like to know if you have any availability for dinner tonight for 4 people?
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="ml-2 p-3 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%] backdrop-blur-sm"
            >
              Absolutely! Let me check our availability for tonight. What time were you looking for?
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center my-4 text-xs text-voice-cream/60"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                AI is checking availability...
              </div>
            </motion.div>
          </div>

          <div className="h-24 relative flex items-center justify-center">
            <AudioVisualization 
              isPlaying={isPlaying} 
              color="#9b87f5"
            />
            
            <button 
              onClick={togglePlay}
              className={cn(
                "absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-105",
                getIndustryColor(),
                "shadow-lg shadow-voice-purple/20"
              )}
            >
              {isPlaying ? 
                <Pause className="text-white" size={20} /> : 
                <Play className="text-white ml-1" size={20} />
              }
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneInterface;
