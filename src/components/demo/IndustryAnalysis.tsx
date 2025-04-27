
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  isScenarioOpen,
  setIsScenarioOpen,
  getIndustryColor,
  getIndustryTextColor,
  activeIndustry,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-left space-y-8"
    >
      <div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className={cn("p-2 rounded-lg", getIndustryColor())}>
            {industryData.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{industryData.title}</h3>
            <h4 className={cn("text-lg", getIndustryTextColor())}>
              {industryData.audioTitle}
            </h4>
          </div>
        </motion.div>

        <Collapsible
          open={isScenarioOpen}
          onOpenChange={setIsScenarioOpen}
          className="mb-8"
        >
          <CollapsibleTrigger className="flex items-center text-sm text-voice-cream/70 hover:text-voice-cream gap-1 group">
            {isScenarioOpen ? (
              <ChevronUp className="w-4 h-4 group-hover:text-voice-purple transition-colors" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:text-voice-purple transition-colors" />
            )}
            {isScenarioOpen ? "Hide Scenario" : "Show Example Scenario"}
          </CollapsibleTrigger>
          <CollapsibleContent className="text-voice-cream/80 text-sm border-l-2 border-voice-purple/30 pl-4 py-2 mt-2">
            {industryData.scenario}
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="space-y-6">
        <h4 className="text-lg font-medium flex items-center gap-2">
          <GripVertical className="w-5 h-5 text-voice-purple" />
          Key Capabilities
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {industryData.keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-voice-dark/50 border-voice-purple/20 backdrop-blur-sm">
                <CardContent className="p-4">
                  <p className="text-sm leading-relaxed">{feature}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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
