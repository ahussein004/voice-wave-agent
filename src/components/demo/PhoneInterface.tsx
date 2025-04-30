
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

  const getConversationMessages = () => {
    switch (activeIndustry) {
      case "restaurant":
        return [
          { sender: "ai", text: "Thank you for calling Savarelle. How may I assist you today?" },
          { sender: "user", text: "Hi, I'd like to make a reservation for this Saturday at 8 PM for 4 people." },
          { sender: "ai", text: "Certainly! I'd be happy to help with that. Would you prefer indoor seating or our garden patio?" },
          { sender: "user", text: "The garden patio would be great. It's my friend's birthday." },
          { sender: "system", text: "Checking availability for garden patio..." }
        ];
      case "car":
        return [
          { sender: "ai", text: "Welcome to Westgate Luxury Motors. How can I help you today?" },
          { sender: "user", text: "Hi, I saw a Porsche Cayenne on your website and wanted to know if it's still available." },
          { sender: "ai", text: "Yes, we do have the Porsche Cayenne in stock. Would you like to schedule a test drive or learn more about financing options?" },
          { sender: "user", text: "I'm interested in both. What kind of financing rates do you offer?" },
          { sender: "system", text: "Retrieving current financing offers..." }
        ];
      case "medical":
        return [
          { sender: "ai", text: "Thank you for calling Trinity Health and Wellness. How may I assist you today?" },
          { sender: "user", text: "Hi, I'm having a stomach ache and would like to see a doctor today if possible." },
          { sender: "ai", text: "I'm sorry to hear that. I'd be happy to check for any available appointments today. Are you a current patient with us?" },
          { sender: "user", text: "No, this would be my first visit." },
          { sender: "system", text: "Checking same-day availability..." }
        ];
      default:
        return [];
    }
  };
  
  const getIndustryTitle = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "Restaurant Reservation";
      case "car":
        return "Car Dealership Inquiry";
      case "medical":
        return "Healthcare Appointment";
      default:
        return "AI Voice Agent";
    }
  };

  const getCtaText = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "See how our AI handles restaurant reservations";
      case "car":
        return "See how our AI handles car sales inquiries";
      case "medical":
        return "See how our AI handles medical appointments";
      default:
        return "Listen to our AI voice agent in action";
    }
  };
  
  const messages = getConversationMessages();
  
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
            <div className={`text-sm font-medium ${getIndustryHeadlineText()}`}>{getIndustryTitle()}</div>
            <div className="text-sm opacity-70">2:13</div>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 text-left text-sm space-y-4">
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-4"
              >
                <p className="text-voice-cream mb-6 text-sm">
                  {getCtaText()}
                </p>
                <button 
                  onClick={togglePlay}
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-voice-purple/20 transition-transform hover:scale-105 mb-4",
                    "bg-gradient-to-r from-voice-purple to-voice-purple-light",
                  )}
                >
                  <Play className="text-white ml-1" size={24} />
                </button>
                <p className="text-voice-cream/60 text-xs mt-2">
                  Click to hear the conversation
                </p>
              </motion.div>
            )}
            
            {isPlaying && messages.map((message, index) => {
              if (message.sender === "system") {
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.3 }}
                    className="text-center my-4 text-xs text-voice-cream/60"
                  >
                    <div className="inline-block px-3 py-1 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                      {message.text}
                    </div>
                  </motion.div>
                );
              }
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.3 }}
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    message.sender === "ai" 
                      ? "ml-2 bg-gray-800/50 rounded-tl-none backdrop-blur-sm" 
                      : "mr-2 bg-voice-purple/30 rounded-tr-none ml-auto backdrop-blur-sm"
                  )}
                >
                  {message.text}
                </motion.div>
              );
            })}
          </div>

          {isPlaying && (
            <div className="h-24 relative flex items-center justify-center">
              <AudioVisualization 
                isPlaying={isPlaying} 
                color="#9b87f5"
              />
              
              <button 
                onClick={togglePlay}
                className={cn(
                  "absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-105",
                  "bg-gradient-to-r from-voice-purple to-voice-purple-light",
                  "shadow-lg shadow-voice-purple/20"
                )}
              >
                <Pause className="text-white" size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneInterface;
