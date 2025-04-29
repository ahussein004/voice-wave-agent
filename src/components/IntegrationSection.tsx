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
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            From Conversation to Action
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-2xl mx-auto">
            Watch how our AI agents transform conversations into actionable workflows
          </p>
        </motion.div>

        {/* Improved layout with better space utilization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Phone mockup in first column */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 inline-flex items-center">
              <span className="w-2 h-2 bg-voice-purple-light rounded-full mr-2"></span>
              Live Call Analysis
            </h3>
            <AnalysisSummaryCard />
          </motion.div>
            
          {/* Flow visualization in middle column */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 inline-flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Automated Workflow
            </h3>
            <AgentTaskFlow />
          </motion.div>
          
          {/* Integration flow in third column */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="lg:col-span-1 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-voice-purple/10 rounded-full blur-3xl opacity-30"></div>
            <h3 className="text-xl font-semibold mb-4 inline-flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Complete Integration Flow
            </h3>
            <div className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-6 shadow-lg h-full">
              <IntegrationFlowchart className="w-full" />
            </div>
          </motion.div>
        </div>

        {/* Industry selection tabs - Now more prominent and clear */}
        
      </div>
    </section>;
};
export default IntegrationSection;