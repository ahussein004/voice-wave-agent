import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Users, Database, Settings, Mail, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import IntegrationCard from "./IntegrationCard";
import IntegrationFlowchart from "./IntegrationFlowchart";
import WorkflowCards from "./WorkflowCards";
import { getIndustryIntegrations } from "./demo/industryData";
import AnalysisSummaryCard from "./AnalysisSummaryCard";
import AgentTaskFlow from "./AgentTaskFlow";

type Industry = "restaurant" | "car" | "medical";

const IntegrationSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("restaurant");

  const integrationData = getIndustryIntegrations(activeIndustry);

  return (
    <section className="py-24 bg-voice-dark border-t border-voice-purple/10">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-2 text-gradient">
            Beyond The Call: Turning Conversations Into Actionable Intelligence
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-2xl mx-auto">
            Your AI agents don't just handle calls—they deliver insights and trigger automated workflows
          </p>
        </motion.div>

        {/* 1. Call analysis summary, stats and AI breakdown */}
        <AnalysisSummaryCard />

        {/* 2. Show agent task flow with animation */}
        <AgentTaskFlow />

        {/* 3. Animated flowchart shows journey */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-3">Complete Integration Flow</h3>
          <div className="w-full flex justify-center mb-10">
            <IntegrationFlowchart className="w-full max-w-4xl" />
          </div>
        </div>

        {/* 4. Industry-specific workflows */}
        <div className="rounded-xl border border-voice-purple/20 bg-voice-dark/70 p-8 mt-2 max-w-5xl mx-auto">
          <Tabs 
            defaultValue="restaurant" 
            value={activeIndustry}
            onValueChange={(value) => setActiveIndustry(value as Industry)}
          >
            <TabsList className="grid grid-cols-3 w-full mb-5 bg-voice-dark/50 border border-voice-purple/20">
              <TabsTrigger 
                value="restaurant"
                className={cn("flex items-center justify-center py-2 data-[state=active]:text-white data-[state=active]:bg-[#F97316]/90")}
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger 
                value="car"
                className={cn("flex items-center justify-center py-2 data-[state=active]:text-white data-[state=active]:bg-[#F97316]/90")}
              >
                Automotive
              </TabsTrigger>
              <TabsTrigger 
                value="medical"
                className={cn("flex items-center justify-center py-2 data-[state=active]:text-white data-[state=active]:bg-[#0EA5E9]/90")}
              >
                Medical
              </TabsTrigger>
            </TabsList>
            <div className="grid md:grid-cols-2 gap-8 items-start w-full">
              <div>
                <div className="text-lg font-semibold mb-1">{integrationData.title}</div>
                <div className="text-voice-cream/80 mb-6">{integrationData.description}</div>
                <WorkflowCards workflows={integrationData.workflows} industry={activeIndustry} wide />
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
