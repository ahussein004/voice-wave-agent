
import React from "react";
import { Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface PauseButtonProps {
  togglePlay: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ togglePlay }) => {
  return (
    <button 
      onClick={togglePlay}
      className={cn(
        "absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-105",
        "bg-gradient-to-r from-voice-purple to-voice-purple-light",
        "shadow-lg shadow-voice-purple/20"
      )}
      aria-label="Pause audio"
    >
      <Pause className="text-white" size={20} />
    </button>
  );
};

export default PauseButton;
