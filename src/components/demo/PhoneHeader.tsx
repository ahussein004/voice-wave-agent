
import React from "react";
import { Clock } from "lucide-react";

interface PhoneHeaderProps {
  title: string;
  titleClassName: string;
  isPlaying: boolean;
  elapsedTime: number;
}

const PhoneHeader: React.FC<PhoneHeaderProps> = ({ 
  title, 
  titleClassName, 
  isPlaying, 
  elapsedTime 
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className={`text-sm font-medium ${titleClassName}`}>{title}</div>
      <div className="flex items-center text-xs text-voice-cream/70">
        {isPlaying && (
          <>
            <Clock size={12} className="mr-1" />
            <span>{formatTime(elapsedTime)}</span>
          </>
        )}
        {!isPlaying && (
          <span className="text-sm opacity-70">2:13</span>
        )}
      </div>
    </div>
  );
};

export default PhoneHeader;
