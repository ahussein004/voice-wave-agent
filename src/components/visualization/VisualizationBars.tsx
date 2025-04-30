
import React, { useEffect, useRef } from 'react';

interface VisualizationBarsProps {
  isPlaying: boolean;
  color: string;
}

const VisualizationBars = ({ isPlaying, color }: VisualizationBarsProps) => {
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

  return (
    <div 
      ref={containerRef} 
      className="flex items-center space-x-[2px] h-full justify-center"
      style={{ 
        opacity: isPlaying ? 1 : 0.5,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
};

export default VisualizationBars;
