
import React from "react";
import { motion } from "framer-motion";
import { getIndustryData } from "./industryData";
import PhoneInterface from "./PhoneInterface";

interface CarDemoProps {
  isPlaying: boolean;
  togglePlay: () => void;
  getIndustryColor: () => string;
  getHeadlineGradient: () => string;
}

const CarDemo = ({ 
  isPlaying, 
  togglePlay, 
  getIndustryColor,
  getHeadlineGradient 
}: CarDemoProps) => {
  const industryData = getIndustryData("car");

  return (
    <motion.div
      key="car"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-8 items-center mb-24"
    >
      <div className="order-2 md:order-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
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
            <h4 className="text-lg font-medium text-voice-cream">Workflow Steps</h4>
            <ol className="space-y-3">
              {industryData.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-0 h-5 w-5 rounded-full flex items-center justify-center text-xs" style={{ background: getIndustryColor() }}>
                    {index + 1}
                  </span>
                  <span className="text-voice-cream/80">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
      <div className="order-1 md:order-2">
        <PhoneInterface 
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          activeIndustry="car"
          getIndustryColor={getIndustryColor}
        />
      </div>
    </motion.div>
  );
};

export default CarDemo;
