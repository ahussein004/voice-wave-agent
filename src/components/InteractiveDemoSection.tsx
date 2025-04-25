
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Car, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import PhoneInterface from "./demo/PhoneInterface";
import IndustryAnalysis from "./demo/IndustryAnalysis";
import { getIndustryData } from "./demo/industryData";

type Industry = "restaurant" | "car" | "medical";

const InteractiveDemoSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("restaurant");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScenarioOpen, setIsScenarioOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleTabChange = (value: string) => {
    setActiveIndustry(value as Industry);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getIndustryColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "bg-[#F97316]";
      case "car":
        return "bg-[#F97316]";
      case "medical":
        return "bg-[#0EA5E9]";
      default:
        return "bg-voice-purple";
    }
  };

  const getIndustryTextColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "text-[#F97316]";
      case "car":
        return "text-[#F97316]";
      case "medical":
        return "text-[#0EA5E9]";
      default:
        return "text-voice-purple";
    }
  };

  const industryData = getIndustryData(activeIndustry);

  return (
    <section className="py-24 bg-voice-dark border-t border-voice-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Hear How Our AI Voice Agents Convert Calls Into Revenue
        </h2>

        <Tabs 
          defaultValue="restaurant" 
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-lg mx-auto mb-12 bg-voice-dark/50 border border-voice-purple/20">
            <TabsTrigger 
              value="restaurant"
              className={cn(
                "flex items-center justify-center py-3 data-[state=active]:text-white", 
                activeIndustry === 'restaurant' ? 'data-[state=active]:bg-[#F97316]/90' : ''
              )}
            >
              <Utensils className="w-5 h-5 mr-2" /> Restaurant
            </TabsTrigger>
            <TabsTrigger 
              value="car"
              className={cn(
                "flex items-center justify-center py-3 data-[state=active]:text-white", 
                activeIndustry === 'car' ? 'data-[state=active]:bg-[#F97316]/90' : ''
              )}
            >
              <Car className="w-5 h-5 mr-2" /> Car Dealership
            </TabsTrigger>
            <TabsTrigger 
              value="medical"
              className={cn(
                "flex items-center justify-center py-3 data-[state=active]:text-white", 
                activeIndustry === 'medical' ? 'data-[state=active]:bg-[#0EA5E9]/90' : ''
              )}
            >
              <Stethoscope className="w-5 h-5 mr-2" /> Medical Clinic
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PhoneInterface 
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              activeIndustry={activeIndustry}
              getIndustryColor={getIndustryColor}
            />
            
            <IndustryAnalysis 
              industryData={industryData}
              isScenarioOpen={isScenarioOpen}
              setIsScenarioOpen={setIsScenarioOpen}
              getIndustryColor={getIndustryColor}
              getIndustryTextColor={getIndustryTextColor}
              activeIndustry={activeIndustry}
            />
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
