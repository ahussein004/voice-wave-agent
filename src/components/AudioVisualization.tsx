
import React, { useEffect, useRef } from 'react';

interface AudioVisualizationProps {
  isPlaying: boolean;
  color: string;
}

const AudioVisualization = ({ isPlaying, color }: AudioVisualizationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing bars
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Create the visualization bars
    const barCount = 40;
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
      
      containerRef.current.appendChild(bar);
    }

    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [isPlaying, color]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        ref={containerRef} 
        className="flex items-center space-x-[2px] h-full justify-center"
        style={{ 
          opacity: isPlaying ? 1 : 0.5,
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* Bars will be added here dynamically */}
      </div>
    </div>
  );
};

export default AudioVisualization;
