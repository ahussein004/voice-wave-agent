
import React, { useEffect, useRef } from 'react';

interface AudioVisualizationProps {
  isPlaying: boolean;
  color: string;
  duration?: number; // Optional duration in seconds
  elapsedTime?: number; // Optional elapsed time in seconds
}

const AudioVisualization = ({ 
  isPlaying, 
  color,
  duration,
  elapsedTime
}: AudioVisualizationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing bars
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Create the visualization bars
    const barCount = 40;
    const bars = [];
    
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'wave-bar';
      bar.style.backgroundColor = color;
      bar.style.animationPlayState = isPlaying ? 'running' : 'paused';
      
      // Create more dynamic heights with a sine wave pattern
      const heightFactor = Math.sin((i / barCount) * Math.PI) * 0.5 + 0.5;
      const height = 3 + Math.floor(Math.random() * 20) * heightFactor;
      bar.style.height = `${height}px`;
      
      // Randomize the animation duration slightly
      const duration = 1 + Math.random() * 0.5; // 1 to 1.5 seconds
      bar.style.animationDuration = `${duration}s`;
      
      // Add slight delay based on position
      bar.style.animationDelay = `${i * 0.05}s`;
      
      bars.push(bar);
    }
    
    // Batch append all bars for better performance
    bars.forEach(bar => containerRef.current?.appendChild(bar));

    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [isPlaying, color]);

  // Format time in MM:SS format
  const formatTime = (seconds?: number) => {
    if (seconds === undefined) return "--:--";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Audio visualization */}
      <div 
        ref={containerRef} 
        className="flex items-center space-x-[2px] h-full justify-center"
        style={{ 
          opacity: isPlaying ? 1 : 0.5,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Timer display - only show if duration is provided */}
      {duration !== undefined && (
        <div className="absolute bottom-0 w-full flex justify-center items-center text-xs text-voice-cream/80 mt-2">
          <div className="flex space-x-2 items-center">
            <span>{formatTime(elapsedTime)}</span>
            <span className="mx-1">/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioVisualization;
