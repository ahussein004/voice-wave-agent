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

  const features = [
    {
      title: "Instant Appointment Booking",
      description: "Seamlessly schedule appointments into your calendar system with smart availability checks",
      icon: Calendar,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Smart Rescheduling",
      description: "Automatically handle changes and find optimal new time slots",
      icon: Settings,
      color: "from-purple-600/20 to-purple-700/20"
    },
    {
      title: "Automated Follow-ups",
      description: "Send personalized emails and SMS messages at the perfect moment",
      icon: Mail,
      color: "from-purple-700/20 to-purple-800/20"
    },
    {
      title: "Task Delegation",
      description: "Route tasks and notifications to the right team member instantly",
      icon: Users,
      color: "from-purple-800/20 to-purple-900/20"
    },
    {
      title: "Data Capture & CRM Update",
      description: "Automatically sync conversation data with your CRM system",
      icon: Database,
      color: "from-purple-900/20 to-purple-950/20"
    }
  ];

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
          <h3 className="text-2xl font-bold mb-3">Customer Journey Visualization</h3>
          <div className="w-full flex justify-center mb-10">
            <IntegrationFlowchart className="w-full max-w-4xl" />
          </div>
        </div>

        {/* 4. Integration Ecosystem - tabs with fewer visual controls */}
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
                {/* Animated broad workflow cards */}
                <WorkflowCards workflows={integrationData.workflows} industry={activeIndustry} wide />
              </div>
              {/* (Optional: Additional panel or quick process info could go here) */}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

// Dashboard Mockup Component
const DashboardMockup = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        {/* Metrics */}
        {[
          { label: "Call Duration", value: "3:24", change: "+12%" },
          { label: "Customer Sentiment", value: "Positive", change: "+8%" },
          { label: "Conversion Rate", value: "78%", change: "+15%" },
          { label: "Info. Extraction", value: "96%", change: "+3%" },
        ].map((metric, index) => (
          <motion.div 
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="bg-voice-purple/10 rounded-md p-4 border border-voice-purple/30"
          >
            <div className="text-sm text-voice-cream/70">{metric.label}</div>
            <div className="text-xl font-bold mt-1">{metric.value}</div>
            <div className="flex items-center text-xs mt-2">
              <span className="text-green-400 flex items-center">
                <Check className="h-3 w-3 mr-1" />
                {metric.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conversation Analysis */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-4 bg-voice-purple/10 rounded-md p-4 border border-voice-purple/30"
      >
        <div className="text-sm text-voice-cream/70 mb-2">Conversation Analysis</div>
        <div className="space-y-2">
          {[
            { speaker: "AI", text: "How can I help you today?" },
            { speaker: "Customer", text: "I'd like to book a table for four tonight." },
            { speaker: "AI", text: "Great! I can help with that. What time would you prefer?" },
          ].map((line, i) => (
            <div key={i} className="flex items-start">
              <div className={`w-20 flex-shrink-0 text-xs ${line.speaker === "AI" ? "text-voice-purple" : "text-voice-cream/70"}`}>
                {line.speaker}:
              </div>
              <div className="text-sm">{line.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-voice-cream/50">
          Key entities extracted: <span className="text-voice-purple">table, four people, tonight</span>
        </div>
      </motion.div>

      {/* Intent Detection */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-4 bg-voice-purple/10 rounded-md p-4 border border-voice-purple/30"
      >
        <div className="text-sm text-voice-cream/70">Intent Detection</div>
        <div className="mt-2 flex items-center">
          <div className="h-2 bg-voice-purple/30 rounded-full flex-1">
            <motion.div 
              className="h-full bg-voice-purple rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </div>
          <span className="ml-2 text-sm">92%</span>
        </div>
        <div className="mt-1 text-xs">Detected Intent: <span className="text-voice-purple">Make Reservation</span></div>
      </motion.div>
    </div>
  );
};

export default IntegrationSection;
