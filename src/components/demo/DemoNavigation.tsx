
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DemoNavigationProps {
  handlePrevIndustry: () => void;
  handleNextIndustry: () => void;
}

const DemoNavigation = ({ 
  handlePrevIndustry, 
  handleNextIndustry 
}: DemoNavigationProps) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button 
        onClick={handlePrevIndustry}
        className="p-4 rounded-full bg-white/10 hover:bg-white/20 border border-voice-purple/20 transition-colors shadow-lg group"
      >
        <ChevronLeft className="w-5 h-5 text-voice-cream group-hover:text-voice-purple-light" />
      </button>
      <button 
        onClick={handleNextIndustry}
        className="p-4 rounded-full bg-white/10 hover:bg-white/20 border border-voice-purple/20 transition-colors shadow-lg group"
      >
        <ChevronRight className="w-5 h-5 text-voice-cream group-hover:text-voice-purple-light" />
      </button>
    </div>
  );
};

export default DemoNavigation;
