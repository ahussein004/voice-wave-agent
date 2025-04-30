
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
      console.log("Created new audio element with URL:", audioUrl);
    }

    // Update audio source if URL changes
    if (audioRef.current && audioUrl && audioRef.current.src !== audioUrl) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
      console.log("Updated audio source to:", audioUrl);
    }

    // Play or pause based on isPlaying prop
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        console.log("Attempting to play audio:", audioUrl);
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => console.log("Audio playback started successfully"))
            .catch(error => {
              console.error("Audio playback error:", error);
              // Auto-retry once with user interaction emulation
              document.addEventListener('click', function audioPlayHandler() {
                if (audioRef.current) {
                  audioRef.current.play()
                    .then(() => console.log("Audio started after user interaction"))
                    .catch(err => console.error("Still couldn't play audio:", err));
                }
                document.removeEventListener('click', audioPlayHandler);
              }, { once: true });
            });
        }
      } else if (audioRef.current) {
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
        console.log("Audio cleanup: paused audio");
      }
    };
  }, [isPlaying, audioUrl]);

  return { audioRef };
};

export default useAudioPlayer;
