
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IndustryData {
  icon: React.ReactNode;
  title: string;
  audioTitle: string;
  scenario: string;
  keyFeatures: string[];
  steps: string[];
  impact: string;
}

interface IndustryAnalysisProps {
  industryData: IndustryData;
  isScenarioOpen: boolean;
  setIsScenarioOpen: (value: boolean) => void;
  getIndustryColor: () => string;
  getIndustryTextColor: () => string;
  activeIndustry: "restaurant" | "car" | "medical";
}

const IndustryAnalysis: React.FC<IndustryAnalysisProps> = ({
  industryData,
  getIndustryColor,
  getIndustryTextColor,
  activeIndustry,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-left space-y-6"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-start gap-4 bg-voice-dark/50 p-6 rounded-xl border border-voice-purple/20 backdrop-blur-sm"
      >
        <div className={cn("p-3 rounded-lg self-start", getIndustryColor())}>
          {industryData.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{industryData.title}</h3>
          <p className={cn("text-lg mb-4", getIndustryTextColor())}>
            {industryData.audioTitle}
          </p>
          <p className="text-voice-cream/80 text-sm leading-relaxed">
            {industryData.scenario}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {industryData.keyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-voice-dark/50 border-voice-purple/20 backdrop-blur-sm h-full">
              <CardContent className="p-4">
                <p className="text-sm leading-relaxed">{feature}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "p-4 rounded-lg text-center backdrop-blur-sm",
          activeIndustry === 'restaurant' ? 'bg-[#F97316]/10 border border-[#F97316]/20' :
          activeIndustry === 'car' ? 'bg-[#F97316]/10 border border-[#F97316]/20' :
          'bg-[#0EA5E9]/10 border border-[#0EA5E9]/20'
        )}
      >
        <p className="font-medium text-sm">{industryData.impact}</p>
      </motion.div>
    </motion.div>
  );
};

export default IndustryAnalysis;
