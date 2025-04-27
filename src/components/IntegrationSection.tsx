
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

  return (
    <section className="py-24 bg-voice-dark border-t border-voice-purple/10">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
        <div className="rounded-xl border border-voice-purple/20 bg-voice-dark/70 p-8 mt-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Industry Solutions</h3>
          <Tabs 
            defaultValue="restaurant" 
            value={activeIndustry}
            onValueChange={(value) => setActiveIndustry(value as Industry)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-voice-dark/50 border border-voice-purple/20">
              <TabsTrigger 
                value="restaurant"
                className={cn("flex items-center justify-center py-3 data-[state=active]:text-white data-[state=active]:bg-[#F97316]/90")}
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger 
                value="car"
                className={cn("flex items-center justify-center py-3 data-[state=active]:text-white data-[state=active]:bg-[#F97316]/90")}
              >
                Automotive
              </TabsTrigger>
              <TabsTrigger 
                value="medical"
                className={cn("flex items-center justify-center py-3 data-[state=active]:text-white data-[state=active]:bg-[#0EA5E9]/90")}
              >
                Medical
              </TabsTrigger>
            </TabsList>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-lg font-semibold mb-2">{integrationData.title}</h4>
                <p className="text-voice-cream/80 mb-6">{integrationData.description}</p>
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
