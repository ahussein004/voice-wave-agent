
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { WorkflowType } from "./demo/industryData";

interface WorkflowCardsProps {
  workflows: WorkflowType[];
  industry: "restaurant" | "car" | "medical";
}

const WorkflowCards: React.FC<WorkflowCardsProps> = ({ workflows, industry }) => {
  const getIndustryColor = () => {
    switch (industry) {
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
    switch (industry) {
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

  const getBgColor = () => {
    switch (industry) {
      case "restaurant":
        return "bg-[#F97316]/10";
      case "car":
        return "bg-[#F97316]/10";
      case "medical":
        return "bg-[#0EA5E9]/10";
      default:
        return "bg-voice-purple/10";
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {workflows.map((workflow, index) => (
        <motion.div
          key={workflow.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-voice-dark/70 border border-voice-purple/20 rounded-lg p-4 relative overflow-hidden"
        >
          <div className="flex items-start gap-4">
            <div className={cn("p-2 rounded-md", getBgColor())}>
              {workflow.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium mb-1">{workflow.title}</h4>
              <p className="text-sm text-voice-cream/70">{workflow.description}</p>
              
              <div className="mt-3 flex items-center">
                <div className={cn("w-4 h-4 rounded-full flex items-center justify-center mr-2", getIndustryColor())}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className={cn("text-sm", getIndustryTextColor())}>
                  {workflow.status}
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated pulse effect */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-10 animate-pulse" 
               style={{background: industry === "medical" ? "#0EA5E9" : "#F97316"}} />
        </motion.div>
      ))}
    </div>
  );
};

export default WorkflowCards;
