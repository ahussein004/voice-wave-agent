
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Car, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import PhoneInterface from "./demo/PhoneInterface";
import IndustryAnalysis from "./demo/IndustryAnalysis";
import { getIndustryData } from "./demo/industryData";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-voice-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-voice-purple/5 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience Your AI Voice Agent In Action
          </h2>
          <p className="text-lg text-voice-cream/80">
            Select an industry to see how our AI handles real-world scenarios, converts inquiries into bookings, and delivers exceptional customer service.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="restaurant" 
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-lg mx-auto mb-12 bg-voice-dark/50 border border-voice-purple/20">
            <TabsTrigger 
              value="restaurant"
              className={cn(
                "flex items-center justify-center gap-2 py-3 data-[state=active]:text-white transition-colors", 
                activeIndustry === 'restaurant' ? 'data-[state=active]:bg-[#F97316]/90' : ''
              )}
            >
              <Utensils className="w-5 h-5" /> 
              <span className="hidden sm:inline">Restaurant</span>
            </TabsTrigger>
            <TabsTrigger 
              value="car"
              className={cn(
                "flex items-center justify-center gap-2 py-3 data-[state=active]:text-white transition-colors", 
                activeIndustry === 'car' ? 'data-[state=active]:bg-[#F97316]/90' : ''
              )}
            >
              <Car className="w-5 h-5" />
              <span className="hidden sm:inline">Dealership</span>
            </TabsTrigger>
            <TabsTrigger 
              value="medical"
              className={cn(
                "flex items-center justify-center gap-2 py-3 data-[state=active]:text-white transition-colors", 
                activeIndustry === 'medical' ? 'data-[state=active]:bg-[#0EA5E9]/90' : ''
              )}
            >
              <Stethoscope className="w-5 h-5" />
              <span className="hidden sm:inline">Medical</span>
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <IndustryAnalysis 
                industryData={industryData}
                isScenarioOpen={isScenarioOpen}
                setIsScenarioOpen={setIsScenarioOpen}
                getIndustryColor={getIndustryColor}
                getIndustryTextColor={getIndustryTextColor}
                activeIndustry={activeIndustry}
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <PhoneInterface 
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                activeIndustry={activeIndustry}
                getIndustryColor={getIndustryColor}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
