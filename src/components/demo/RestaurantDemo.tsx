
import React from "react";
import { motion } from "framer-motion";
import AudioPlayer from "./AudioPlayer";
import { getIndustryData } from "./industryData";

interface RestaurantDemoProps {
  isPlaying: boolean;
  togglePlay: () => void;
  getIndustryColor: () => string;
  getHeadlineGradient: () => string;
}

const RestaurantDemo = ({ 
  isPlaying, 
  togglePlay, 
  getIndustryColor,
  getHeadlineGradient 
}: RestaurantDemoProps) => {
  const industryData = getIndustryData("restaurant");

  return (
    <motion.div
      key="restaurant"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-8 items-center mb-24"
    >
      <div>
        <AudioPlayer 
          title={industryData.audioTitle} 
          color={getIndustryColor()}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            {industryData.icon}
            <h3 className={`text-2xl font-bold ${getHeadlineGradient()}`}>
              {industryData.title}
            </h3>
          </div>
          <p className="text-voice-cream/90 mb-6">
            {industryData.scenario}
          </p>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-voice-cream">Key Features</h4>
            <ul className="space-y-2">
              {industryData.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full" style={{ background: getIndustryColor() }}></span>
                  <span className="text-voice-cream/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RestaurantDemo;
