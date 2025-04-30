
import React from 'react';

interface AudioProgressBarProps {
  duration?: number;
  elapsedTime?: number;
  color: string;
}

const AudioProgressBar = ({ duration, elapsedTime, color }: AudioProgressBarProps) => {
  // Format time in MM:SS format
  const formatTime = (seconds?: number) => {
    if (seconds === undefined) return "--:--";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Calculate remaining time
  const getRemainingTime = () => {
    if (duration === undefined || elapsedTime === undefined) return "--:--";
    const remaining = Math.max(0, duration - elapsedTime);
    return formatTime(remaining);
  };

  // Only render if duration is provided
  if (duration === undefined) {
    return null;
  }

  return (
    <div className="absolute bottom-0 w-full flex justify-between items-center text-xs text-voice-cream/80 mt-2 px-2">
      <span>{formatTime(elapsedTime)}</span>
      <div className="flex-grow mx-2 h-1 bg-voice-cream/20 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-300 ease-linear"
          style={{ 
            width: `${(elapsedTime || 0) / (duration || 1) * 100}%`,
            backgroundColor: color 
          }}
        />
      </div>
      <span>{getRemainingTime()}</span>
    </div>
  );
};

export default AudioProgressBar;
