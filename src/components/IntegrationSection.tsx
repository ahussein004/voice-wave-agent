import React, { useState } from "react";
import { motion } from "framer-motion";
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
  return <section className="py-24 bg-voice-dark border-t border-voice-purple/10">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 18
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            From Conversation to Action
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-2xl mx-auto">
            Watch how our AI agents transform conversations into actionable workflows
          </p>
        </motion.div>

        {/* 1. Live Call Analysis Card - Shows example conversation */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center">Live Call Analysis</h3>
          <AnalysisSummaryCard />
        </div>

        {/* 2. Agent Task Flow with animations */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center">Automated Workflow</h3>
          <AgentTaskFlow />
        </div>

        {/* 3. Integration Flow Visualization */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center">Complete Integration Flow</h3>
          <div className="w-full flex justify-center">
            <IntegrationFlowchart className="w-full max-w-4xl" />
          </div>
        </div>

        {/* 4. Industry-specific examples in cards */}
        
      </div>
    </section>;
};
export default IntegrationSection;