import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IntegrationFlowchart from "./IntegrationFlowchart";
import { Phone, MessageSquare, Brain, Laptop, FileText, Database, Cloud, Mic, Link, Mail, User, Clock } from "lucide-react";
import AnalysisSummaryCard from "./AnalysisSummaryCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
const IntegrationSection = () => {
  const [activeFeature, setActiveFeature] = useState<"analysis" | "integration" | "followup">("analysis");
  const featureData = {
    analysis: {
      title: "AI Call Analysis",
      description: "Our AI analyzes conversations in real-time, identifying key information, sentiment, and intent that powers automated responses.",
      color: "text-voice-purple",
      bgColor: "bg-voice-purple/10",
      borderColor: "border-voice-purple/20",
      icon: <Brain className="h-6 w-6 text-voice-purple" />,
      steps: ["Voice transcription starts as soon as call begins", "AI analyzes speech patterns and identifies key entities", "Sentiment and intent are detected in real-time", "Structured data is extracted from natural conversation"]
    },
    integration: {
      title: "System Integration",
      description: "Connect your AI voice system with existing business tools through our integration hub, supporting all major CRMs and software.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      icon: <Link className="h-6 w-6 text-orange-500" />,
      steps: ["API connects to your existing business tools", "Data is synchronized across all systems", "Custom workflows are triggered based on conversation", "Secure data pipeline ensures information integrity"]
    },
    followup: {
      title: "Automated Follow-ups",
      description: "Turn conversations into actions with automated follow-up workflows across multiple channels like SMS, email, and more.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      steps: ["AI determines appropriate follow-up actions based on call content", "Tasks requiring human attention are delegated to staff via email", "Automated confirmations and reminders are sent to customers via SMS", "All communications are tracked and analyzed for continuous improvement"]
    }
  };
  return <section className="py-24 bg-gray-50 border-t border-gray-200" id="integrations">
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
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Intelligent Call Analysis & System Integration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI automatically analyzes every conversation in real-time and seamlessly integrates with 
            your existing systems to automate workflows and improve operational efficiency
          </p>
        </motion.div>

        {/* Feature Tabs - Redesigned for better visibility */}
        <Tabs defaultValue="analysis" onValueChange={value => setActiveFeature(value as "analysis" | "integration" | "followup")} className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white p-1.5 rounded-full shadow-sm">
              <TabsTrigger value="analysis" className={cn("rounded-full px-6 py-2.5 gap-2 transition-all duration-300", "data-[state=active]:shadow-md font-medium", "data-[state=active]:bg-voice-purple data-[state=active]:text-white", "hover:bg-gray-50 data-[state=inactive]:text-gray-700")}>
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">AI Call Analysis</span>
              </TabsTrigger>
              
              <TabsTrigger value="integration" className={cn("rounded-full px-6 py-2.5 gap-2 transition-all duration-300", "data-[state=active]:shadow-md font-medium", "data-[state=active]:bg-orange-500 data-[state=active]:text-white", "hover:bg-gray-50 data-[state=inactive]:text-gray-700")}>
                <Link className="h-4 w-4" />
                <span className="hidden sm:inline">System Integration</span>
              </TabsTrigger>
              
              <TabsTrigger value="followup" className={cn("rounded-full px-6 py-2.5 gap-2 transition-all duration-300", "data-[state=active]:shadow-md font-medium", "data-[state=active]:bg-blue-500 data-[state=active]:text-white", "hover:bg-gray-50 data-[state=inactive]:text-gray-700")}>
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Automated Follow-ups</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Feature Content - Enhanced with better contrast and readability */}
          <div className="mt-6">
            <TabsContent value="analysis" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <FeatureDisplay feature={featureData.analysis} activeFeature="analysis" content={<AnalysisSummaryCard />} />
            </TabsContent>
            
            <TabsContent value="integration" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <FeatureDisplay feature={featureData.integration} activeFeature="integration" content={<div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-orange-500" />
                      System Integration Flow
                    </h3>
                    <div className="bg-white rounded-lg p-4 shadow-sm flex-grow flex items-center">
                      <IntegrationFlowchart />
                    </div>
                  </div>} />
            </TabsContent>
            
            <TabsContent value="followup" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <motion.div key="followup" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5
            }} className="grid grid-cols-1 gap-8 bg-white rounded-2xl p-8 shadow-lg">
                {/* Top Section: Automated Follow-ups Overview */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">Human-AI Collaboration & Automated Follow-ups</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our platform enhances customer experience through AI-powered follow-ups and optimizes 
                        workflow by delegating tasks to your staff when human expertise is required. The dual-channel 
                        approach ensures nothing falls through the cracks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium text-blue-800">Email Task Delegation</h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">Tasks requiring human expertise are automatically assigned to appropriate staff members via email for further action.</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-green-600" />
                        <h4 className="font-medium text-green-800">SMS Customer Follow-ups</h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">Automated SMS messages keep customers informed with confirmations, reminders, and follow-up communications.</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Section: Email and SMS side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email - Human Task Assignment Section - Left side */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-50 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <h4 className="text-base font-semibold text-gray-800">Email Task Delegation to Staff</h4>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Human Handoff</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Tasks requiring human expertise are automatically assigned to appropriate staff members
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <div className="rounded-lg p-5 bg-white shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-gray-500" />
                            <div className="text-sm font-medium text-gray-700">To: dr.smith@clinic.com</div>
                          </div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            12:42 PM
                          </div>
                        </div>
                        <div className="flex space-x-2 items-center mb-2">
                          <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs font-medium">High Priority</span>
                          <div className="text-sm font-medium text-gray-800">Patient Follow-up Required: Samantha Johnson</div>
                        </div>
                        <div className="text-sm text-gray-600 mb-4 bg-gray-50 p-4 rounded-lg">
                          <p>Dear Dr. Smith,</p>
                          <p className="mt-2">Samantha Johnson called today regarding ongoing tooth pain. Her rescheduled appointment is set for May 2 at 2:00 PM, but she mentioned increasing discomfort.</p>
                          <p className="mt-2">AI assessment indicates potential need for earlier intervention. Patient history and call transcript attached.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-3">
                            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">Review Details</button>
                            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm">Call Patient</button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-sm">
                        <h5 className="font-medium text-blue-700 mb-2">Benefits of AI-Human collaboration:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Assigns tasks to appropriate staff based on skills and availability</li>
                          <li>Includes full context and call transcript with key points highlighted</li>
                          <li>Prioritizes tasks based on urgency and business rules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* SMS Follow-up Preview - Right side */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-green-50 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-5 h-5 text-green-600" />
                          <h4 className="text-base font-semibold text-gray-800">Automated SMS Follow-ups to Customers</h4>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Fully Automated</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Timely confirmation and reminder texts sent automatically based on conversation content
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gray-50">
                      {/* SMS follow-up examples */}
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <MessageSquare className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="bg-green-600 text-white px-5 py-3 rounded-lg text-sm max-w-md shadow-sm">
                            <div className="flex justify-between items-center mb-1 pb-1 border-b border-green-500">
                              <span className="text-xs text-green-100">Automated Confirmation</span>
                              <span className="text-xs text-green-200">Sent immediately after call</span>
                            </div>
                            Your appointment is confirmed for May 2 at 2:00 PM with Dr. Smith. Reply YES to confirm or call (555) 123-4567 to reschedule.
                          </div>
                        </div>
                        
                        {/* Reminder SMS */}
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <Clock className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="bg-green-600 text-white px-5 py-3 rounded-lg text-sm max-w-md shadow-sm">
                            <div className="flex justify-between items-center mb-1 pb-1 border-b border-green-500">
                              <span className="text-xs text-green-100">Automated Reminder</span>
                              <span className="text-xs text-green-200">Sent 24h before appointment</span>
                            </div>
                            Reminder: Your dental appointment is tomorrow, May 2 at 2:00 PM. Please arrive 15 minutes early to complete paperwork. Reply INFO for directions.
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-5 text-sm">
                        <h5 className="font-medium text-green-700 mb-2">Why SMS automation works:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>93% of SMS messages are read within 3 minutes</li>
                          <li>Reduces appointment no-shows by up to 45%</li>
                          <li>No staff effort required for routine communications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
        
        {/* Integration Process - Redesigned for better visual clarity */}
        
      </div>
    </section>;
};

// Redesigned reusable component for feature display with better contrast
interface FeatureDisplayProps {
  feature: {
    title: string;
    description: string;
    color: string;
    bgColor: string;
    borderColor: string;
    icon: JSX.Element;
    steps: string[];
  };
  activeFeature: "analysis" | "integration" | "followup";
  content: React.ReactNode;
}
const FeatureDisplay = ({
  feature,
  activeFeature,
  content
}: FeatureDisplayProps) => {
  const accentColor = activeFeature === "analysis" ? "bg-voice-purple text-white" : activeFeature === "integration" ? "bg-orange-500 text-white" : "bg-blue-500 text-white";
  return <motion.div key={activeFeature} initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-white rounded-2xl p-8 shadow-lg">
      {/* Left Side - Interactive Demo */}
      <div className="h-full flex flex-col">
        {content}
      </div>
      
      {/* Right Side - Feature Description */}
      <div className="space-y-8 h-full flex flex-col">
        <div>
          <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", "shadow-md", activeFeature === "analysis" ? "bg-voice-purple/10" : activeFeature === "integration" ? "bg-orange-500/10" : "bg-blue-500/10")}>
            {feature.icon}
          </div>
          
          <h3 className={cn("text-3xl font-bold mb-4", feature.color)}>
            {feature.title}
          </h3>
          
          <p className="text-gray-700 mb-6 text-lg">
            {feature.description}
          </p>
          
          <div className="bg-gray-50 p-5 rounded-xl">
            <h4 className="font-medium text-gray-800 mb-3">How it works:</h4>
            <div className="space-y-3">
              {feature.steps.map((step, index) => <div key={index} className="flex items-start group">
                  <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110", accentColor)}>
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>)}
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Cloud className={cn("w-5 h-5 mr-2", feature.color)} />
              <h4 className="font-medium text-gray-800">Real-world impact:</h4>
            </div>
            <p className="text-gray-700">
              {activeFeature === "analysis" && "Companies using our AI analysis see a 40% reduction in call handling time and 35% improvement in first-call resolution rates."}
              {activeFeature === "integration" && "Businesses report saving 15+ hours per week on manual data entry and seeing a 28% increase in workflow efficiency after integration."}
              {activeFeature === "followup" && "Our dual approach of human delegation and automated messaging has improved response times by 64% and increased customer satisfaction scores by 41%."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default IntegrationSection;