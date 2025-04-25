
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  isScenarioOpen,
  setIsScenarioOpen,
  getIndustryColor,
  getIndustryTextColor,
  activeIndustry,
}) => {
  return (
    <div className="text-left">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 flex items-center">
          {industryData.icon}
          {industryData.title}
        </h3>
        <h4 className={cn("text-xl mb-4", getIndustryTextColor())}>
          {industryData.audioTitle}
        </h4>

        <Collapsible
          open={isScenarioOpen}
          onOpenChange={setIsScenarioOpen}
          className="mb-8"
        >
          <div className="flex items-center mb-2">
            <CollapsibleTrigger className="flex items-center text-sm text-voice-cream/70 hover:text-voice-cream">
              {isScenarioOpen ? (
                <ChevronUp className="mr-1 h-4 w-4" />
              ) : (
                <ChevronDown className="mr-1 h-4 w-4" />
              )}
              {isScenarioOpen ? "Hide Scenario" : "Show Scenario"}
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="text-voice-cream/80 text-sm border-l-2 border-voice-purple/30 pl-4 py-1">
            {industryData.scenario}
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium mb-4">Key Features That Go Beyond:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industryData.keyFeatures.map((feature, index) => (
            <Card key={index} className="bg-voice-dark/50 border-voice-purple/20">
              <CardContent className="p-4">
                <p className="text-sm">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium mb-4">How It Works:</h4>
        <div className="space-y-4">
          {industryData.steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className={cn("flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs", getIndustryColor())}>
                {index + 1}
              </div>
              <p className="text-sm">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(
        "p-4 rounded-lg text-center",
        activeIndustry === 'restaurant' ? 'bg-[#F97316]/10' :
        activeIndustry === 'car' ? 'bg-[#F97316]/10' :
        'bg-[#0EA5E9]/10'
      )}>
        <p className="font-medium">{industryData.impact}</p>
      </div>
    </div>
  );
};

export default IndustryAnalysis;
