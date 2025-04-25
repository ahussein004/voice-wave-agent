
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Users, Database, Settings, Mail, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import IntegrationCard from "./IntegrationCard";
import IntegrationFlowchart from "./IntegrationFlowchart";
import WorkflowCards from "./WorkflowCards";
import { getIndustryIntegrations } from "./demo/industryData";

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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Beyond The Call: Turning Conversations Into Actionable Intelligence
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-2xl mx-auto">
            Your AI agents don't just handle calls—they deliver insights and trigger automated workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Call Analysis Dashboard</h3>
            <div className="rounded-lg border border-voice-purple/20 p-6 bg-voice-dark/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-900/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <DashboardMockup />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Integration Ecosystem</h3>
            <div className="bg-voice-dark/50 rounded-lg border border-voice-purple/20 p-6 h-full">
              <Tabs 
                defaultValue="restaurant" 
                value={activeIndustry}
                onValueChange={(value) => setActiveIndustry(value as Industry)}
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 max-w-md mb-8 bg-voice-dark/50 border border-voice-purple/20">
                  <TabsTrigger 
                    value="restaurant"
                    className={cn(
                      "flex items-center justify-center py-2 data-[state=active]:text-white", 
                      activeIndustry === 'restaurant' ? 'data-[state=active]:bg-[#F97316]/90' : ''
                    )}
                  >
                    Restaurant
                  </TabsTrigger>
                  <TabsTrigger 
                    value="car"
                    className={cn(
                      "flex items-center justify-center py-2 data-[state=active]:text-white", 
                      activeIndustry === 'car' ? 'data-[state=active]:bg-[#F97316]/90' : ''
                    )}
                  >
                    Automotive
                  </TabsTrigger>
                  <TabsTrigger 
                    value="medical"
                    className={cn(
                      "flex items-center justify-center py-2 data-[state=active]:text-white", 
                      activeIndustry === 'medical' ? 'data-[state=active]:bg-[#0EA5E9]/90' : ''
                    )}
                  >
                    Medical
                  </TabsTrigger>
                </TabsList>

                <div className="space-y-6">
                  <div className="text-lg font-medium">
                    {integrationData.title}
                  </div>
                  <div className="text-voice-cream/80">
                    {integrationData.description}
                  </div>
                  
                  {/* Industry-specific integrations */}
                  <WorkflowCards workflows={integrationData.workflows} industry={activeIndustry} />
                </div>
              </Tabs>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold mb-4">Seamless Integration Flow</h3>
          <p className="text-voice-cream/80 max-w-2xl mx-auto">
            Watch how your customer calls automatically trigger actions across your tech stack
          </p>
        </motion.div>

        <IntegrationFlowchart className="mb-20" />

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-4">Automated Workflow Features</h3>
          <p className="text-voice-cream/80 max-w-2xl mx-auto">
            Your business processes automate themselves after every call
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <IntegrationCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
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
