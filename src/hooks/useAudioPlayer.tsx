
import { useEffect, useRef } from 'react';

interface UseAudioPlayerProps {
  isPlaying: boolean;
  audioUrl?: string;
}

const useAudioPlayer = ({ isPlaying, audioUrl }: UseAudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
        console.log("Attempting to play audio:", audioUrl);
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio playback error:", error);
          });
        }
      } else {
        console.log("Pausing audio");
        audioRef.current.pause();
      }
    } else if (isPlaying && !audioUrl) {
      console.warn("Attempted to play audio but no audioUrl provided");
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying, audioUrl]);

  return { audioRef };
};

export default useAudioPlayer;
