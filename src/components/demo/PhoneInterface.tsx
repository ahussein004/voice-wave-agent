
import React from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import AudioVisualization from "@/components/AudioVisualization";

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
  return (
    <div className="relative">
      <div className="aspect-[9/16] max-w-xs mx-auto bg-gray-900/50 rounded-3xl border-8 border-gray-800 shadow-lg overflow-hidden relative">
        <div className="absolute inset-0 phone-glow opacity-50"></div>
        
        {/* Phone Mockup Content */}
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm opacity-70">AI Voice Agent</div>
            <div className="text-sm opacity-70">2:13</div>
          </div>

          {/* Call Transcript */}
          <div className="flex-1 overflow-y-auto mb-4 text-left text-sm">
            <div className="mb-3 ml-2 p-2 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%]">
              Hello, this is VoiceWave AI, how can I assist you today?
            </div>
            <div className="mb-3 mr-2 p-2 bg-voice-purple/30 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
              Hi, I'd like to know if you have any availability for dinner tonight for 4 people?
            </div>
            <div className="mb-3 ml-2 p-2 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%]">
              Absolutely! Let me check our availability for tonight. What time were you looking for?
            </div>
            <div className="mb-6 opacity-70 text-xs text-center">
              <div className="text-center my-2">• AI is checking availability •</div>
            </div>
          </div>

          {/* Audio Visualization */}
          <div className="h-24 relative flex items-center justify-center">
            <AudioVisualization 
              isPlaying={isPlaying} 
              color={activeIndustry === 'restaurant' ? '#F97316' : 
                     activeIndustry === 'car' ? '#F97316' : 
                     activeIndustry === 'medical' ? '#0EA5E9' : 
                     '#9b87f5'} 
            />
            
            {/* Play/Pause Button with Progress Ring */}
            <button 
              onClick={togglePlay}
              className={cn(
                "absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10",
                getIndustryColor()
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
    </div>
  );
};

export default PhoneInterface;
