
import React from "react";
import { Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface PauseButtonProps {
  togglePlay: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ togglePlay }) => {
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Pause button clicked - should toggle to paused state");
        togglePlay();
      }}
      className={cn(
        "absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-105",
        "bg-gradient-to-r from-voice-purple to-voice-purple-light",
        "shadow-lg shadow-voice-purple/20",
        "focus:outline-none focus:ring-2 focus:ring-voice-purple-light/50" // Added focus styles for better accessibility
      )}
      aria-label="Pause audio"
      type="button"
    >
      <Pause className="text-white" size={20} />
    </button>
  );
};

export default PauseButton;
