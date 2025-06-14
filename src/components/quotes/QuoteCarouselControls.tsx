
import React from "react";

interface QuoteCarouselControlsProps {
  quotes: any[];
  activeQuote: number;
  onQuoteChange: (index: number) => void;
}

export const QuoteCarouselControls: React.FC<QuoteCarouselControlsProps> = ({ 
  quotes, 
  activeQuote, 
  onQuoteChange 
}) => {
  return (
    <>
      <div className="flex justify-center mt-8 gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => onQuoteChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeQuote === index
                ? "w-8 bg-voice-purple-light"
                : "bg-voice-purple/30 hover:bg-voice-purple/50"
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>

      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden md:block bg-voice-purple/20 hover:bg-voice-purple/30 p-2 rounded-full backdrop-blur-sm border border-voice-purple/30 transition-all hover:scale-110"
        onClick={() => {
          const prevIndex = activeQuote === 0 ? quotes.length - 1 : activeQuote - 1;
          onQuoteChange(prevIndex);
        }}
        aria-label="Previous quote"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden md:block bg-voice-purple/20 hover:bg-voice-purple/30 p-2 rounded-full backdrop-blur-sm border border-voice-purple/30 transition-all hover:scale-110"
        onClick={() => {
          const nextIndex = activeQuote === quotes.length - 1 ? 0 : activeQuote + 1;
          onQuoteChange(nextIndex);
        }}
        aria-label="Next quote"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </>
  );
};
