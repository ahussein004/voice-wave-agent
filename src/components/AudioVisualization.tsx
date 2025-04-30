
import React, { useEffect, useRef } from 'react';

interface AudioVisualizationProps {
  isPlaying: boolean;
  color: string;
  duration?: number; // Duration in seconds
  elapsedTime?: number; // Elapsed time in seconds
  audioUrl?: string; // Audio URL prop
}

const AudioVisualization = ({ 
  isPlaying, 
  color,
  duration,
  elapsedTime,
  audioUrl
}: AudioVisualizationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
      
      // Randomize the animation duration slightly for more natural look
      const animDuration = 1 + Math.random() * 0.7; // 1 to 1.7 seconds
      bar.style.animationDuration = `${animDuration}s`;
      
      // Add slight delay based on position for wave-like effect
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

  // Handle audio playback
  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current && audioUrl) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.preload = "auto";
    }

    // Update audio source if URL changes
    if (audioRef.current && audioUrl && audioRef.current.src !== audioUrl) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
    }

    // Play or pause based on isPlaying prop
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio playback error:", error);
          });
        }
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying, audioUrl]);

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
      )}
    </div>
  );
};

export default AudioVisualization;
