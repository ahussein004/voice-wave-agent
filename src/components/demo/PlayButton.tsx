
import React from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  togglePlay: () => void;
  text: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ togglePlay, text }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 w-full">
      <p className="text-voice-cream mb-6 text-sm md:text-base">
        {text}
      </p>
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("Play button clicked - should start playing");
          togglePlay();
        }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-voice-purple/20 transition-transform hover:scale-105 mb-4",
          "bg-gradient-to-r from-voice-purple to-voice-purple-light",
          "focus:outline-none focus:ring-2 focus:ring-voice-purple-light/50" // Added focus styles
        )}
        aria-label="Play audio"
        type="button"
      >
        <Play className="text-white ml-1" size={24} />
      </button>
      <p className="text-voice-cream/60 text-xs mt-2">
        Click to hear the conversation
      </p>
    </div>
  );
};

export default PlayButton;
