
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
    const barCount = 30;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'wave-animation';
      bar.style.backgroundColor = color;
      bar.style.animationPlayState = isPlaying ? 'running' : 'paused';
      bar.style.height = `${Math.floor(Math.random() * 20) + 3}px`;
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
        className="flex items-center space-x-[2px] h-full"
        style={{ opacity: isPlaying ? 1 : 0.5 }}
      >
        {/* Bars will be added here dynamically */}
      </div>
    </div>
  );
};

export default AudioVisualization;
