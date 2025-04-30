
import React, { useEffect } from 'react';
import VisualizationBars from './visualization/VisualizationBars';
import AudioProgressBar from './visualization/AudioProgressBar';
import useAudioPlayer from '@/hooks/useAudioPlayer';

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
  // Use the audio player hook to handle audio playback
  const { audioRef } = useAudioPlayer({ isPlaying, audioUrl });
  
  useEffect(() => {
    console.log("AudioVisualization updated:", { isPlaying, audioUrl, elapsedTime });
    
    // Debug audio element status
    if (audioRef.current) {
      console.log("Audio element state:", {
        paused: audioRef.current.paused,
        currentTime: audioRef.current.currentTime,
        src: audioRef.current.src,
        readyState: audioRef.current.readyState
      });
    }
  }, [isPlaying, audioUrl, elapsedTime, audioRef]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Audio visualization bars */}
      <VisualizationBars isPlaying={isPlaying} color={color} />
      
      {/* Timer and progress bar display */}
      <AudioProgressBar 
        duration={duration} 
        elapsedTime={elapsedTime} 
        color={color} 
      />
    </div>
  );
};

export default AudioVisualization;
