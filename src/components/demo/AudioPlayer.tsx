
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AudioVisualization from "@/components/AudioVisualization";

interface AudioPlayerProps {
  title: string;
  color: string;
  isPlaying: boolean;
  togglePlay: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  color,
  isPlaying,
  togglePlay,
}) => {
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  
  // Simulate audio progress when playing
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            togglePlay();
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, togglePlay]);
  
  const formatTime = (progress: number) => {
    // Total duration is 3 minutes (180 seconds)
    const totalSeconds = Math.floor((180 * progress) / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-full"
    >
      <div className="flex flex-col space-y-4">
        <div className="text-lg font-medium text-voice-cream">{title}</div>
        
        <div className="h-16 w-full relative">
          <AudioVisualization isPlaying={isPlaying} color={color} />
        </div>
        
        <div className="w-full bg-voice-purple/20 rounded-full h-1.5 mt-2">
          <div 
            className="h-full rounded-full transition-all duration-300 ease-linear"
            style={{ 
              width: `${progress}%`,
              background: color 
            }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-voice-cream/70">
          <span>{formatTime(progress)}</span>
          <span>3:00</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <SkipBack size={20} className="text-voice-cream" />
          </button>
          
          <button 
            onClick={togglePlay}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center shadow-lg",
              "transition-transform hover:scale-105"
            )}
            style={{ background: color }}
          >
            {isPlaying ? 
              <Pause className="text-white" size={20} /> : 
              <Play className="text-white ml-1" size={20} />
            }
          </button>
          
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <SkipForward size={20} className="text-voice-cream" />
          </button>
        </div>
        
        <div className="flex items-center mt-2 text-voice-cream/70">
          <Volume2 size={16} className="mr-2" />
          <div className="w-full bg-voice-purple/20 rounded-full h-1">
            <div 
              className="h-full rounded-full"
              style={{ 
                width: "70%",
                background: color 
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
