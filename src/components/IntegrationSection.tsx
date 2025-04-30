
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
      steps: [
        "Voice transcription starts as soon as call begins",
        "AI analyzes speech patterns and identifies key entities",
        "Sentiment and intent are detected in real-time",
        "Structured data is extracted from natural conversation"
      ]
    },
    integration: {
      title: "System Integration",
      description: "Connect your AI voice system with existing business tools through our integration hub, supporting all major CRMs and software.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      icon: <Link className="h-6 w-6 text-orange-500" />,
      steps: [
        "API connects to your existing business tools",
        "Data is synchronized across all systems",
        "Custom workflows are triggered based on conversation",
        "Secure data pipeline ensures information integrity"
      ]
    },
    followup: {
      title: "Automated Follow-ups",
      description: "Turn conversations into actions with automated follow-up workflows across multiple channels like SMS, email, and more.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      steps: [
        "Follow-up messages are generated based on call content",
        "Confirmation and reminder messages are scheduled",
        "Personalized communication based on customer preference",
        "Multi-channel engagement ensures delivery"
      ]
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="integrations">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Intelligent Call Analysis & System Integration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI automatically analyzes every conversation in real-time and seamlessly integrates with 
            your existing systems to automate workflows and improve operational efficiency
          </p>
        </motion.div>

        {/* Feature Tabs - Redesigned for better visibility */}
        <Tabs 
          defaultValue="analysis" 
          onValueChange={(value) => setActiveFeature(value as "analysis" | "integration" | "followup")}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1.5 rounded-full shadow-sm border border-gray-200">
              <TabsTrigger 
                value="analysis" 
                className={cn(
                  "rounded-full px-6 py-2.5 gap-2 transition-all duration-300",
                  "data-[state=active]:shadow-md font-medium",
                  "data-[state=active]:bg-white data-[state=active]:text-voice-purple",
                  "hover:bg-gray-50 data-[state=inactive]:text-gray-700"
                )}
              >
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">AI Call Analysis</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="integration" 
                className={cn(
                  "rounded-full px-6 py-2.5 gap-2 transition-all duration-300",
                  "data-[state=active]:shadow-md font-medium",
                  "data-[state=active]:bg-white data-[state=active]:text-orange-500",
                  "hover:bg-gray-50 data-[state=inactive]:text-gray-700"
                )}
              >
                <Link className="h-4 w-4" />
                <span className="hidden sm:inline">System Integration</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="followup" 
                className={cn(
                  "rounded-full px-6 py-2.5 gap-2 transition-all duration-300",
                  "data-[state=active]:shadow-md font-medium",
                  "data-[state=active]:bg-white data-[state=active]:text-blue-500",
                  "hover:bg-gray-50 data-[state=inactive]:text-gray-700"
                )}
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Automated Follow-ups</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Feature Content - Enhanced with better contrast and readability */}
          <div className="mt-6">
            <TabsContent 
              value="analysis" 
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <FeatureDisplay 
                feature={featureData.analysis} 
                activeFeature="analysis"
                content={<AnalysisSummaryCard />}
              />
            </TabsContent>
            
            <TabsContent 
              value="integration" 
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <FeatureDisplay 
                feature={featureData.integration} 
                activeFeature="integration"
                content={
                  <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-lg">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-orange-500" />
                      System Integration Flow
                    </h3>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                      <IntegrationFlowchart />
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent 
              value="followup" 
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <FeatureDisplay 
                feature={featureData.followup} 
                activeFeature="followup"
                content={
                  <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                      Human-AI Collaboration & Follow-up Communication
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Email - Human Task Assignment Section */}
                      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-blue-600" />
                              <h4 className="text-sm font-medium text-gray-800">Email Task Assignment to Staff</h4>
                            </div>
                            <div className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">Human Handoff</div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="border border-gray-200 rounded-lg p-4 bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-gray-500" />
                                <div className="text-sm text-gray-500">To: dr.smith@clinic.com</div>
                              </div>
                              <div className="text-xs text-gray-500 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                12:42 PM
                              </div>
                            </div>
                            <div className="flex space-x-2 items-center mb-1">
                              <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs font-medium">High Priority</span>
                              <div className="text-sm font-medium text-gray-800">Patient Follow-up Required: Samantha Johnson</div>
                            </div>
                            <div className="text-xs text-gray-600 mb-3">
                              <p>Dear Dr. Smith,</p>
                              <p className="mt-1">Samantha Johnson called today regarding ongoing tooth pain. Her rescheduled appointment is set for May 2 at 2:00 PM, but she mentioned increasing discomfort.</p>
                              <p className="mt-1">AI assessment indicates potential need for earlier intervention. Patient history and call transcript attached.</p>
                            </div>
                            <div className="flex items-center justify-between text-xs mt-2">
                              <div className="flex space-x-3">
                                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Review Details</button>
                                <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">Call Patient</button>
                              </div>
                              <div className="text-gray-500">Automatically assigned based on patient history</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* SMS Follow-up Preview - Clearly labeled */}
                      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <MessageSquare className="w-4 h-4 text-green-600" />
                              <h4 className="text-sm font-medium text-gray-800">Automated SMS Follow-ups</h4>
                            </div>
                            <div className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">Automated</div>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-50">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs font-medium text-gray-500">2 Messages in Sequence</div>
                            <div className="text-xs text-gray-500">Patient: +1 (555) 123-4567</div>
                          </div>
                          
                          {/* Initial confirmation SMS */}
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-start space-x-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <MessageSquare className="w-4 h-4 text-blue-500" />
                              </div>
                              <div className="bg-blue-500 text-white px-4 py-3 rounded-lg text-sm max-w-sm">
                                <span className="block text-xs text-blue-100 mb-1">Sent: Immediately after call</span>
                                Your appointment is confirmed for May 2 at 2:00 PM with Dr. Smith. Reply YES to confirm or call (555) 123-4567 to reschedule.
                              </div>
                            </div>
                            
                            {/* Reminder SMS */}
                            <div className="flex items-start space-x-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <Clock className="w-4 h-4 text-blue-500" />
                              </div>
                              <div className="bg-blue-500 text-white px-4 py-3 rounded-lg text-sm max-w-sm">
                                <span className="block text-xs text-blue-100 mb-1">Scheduled: 24h before appointment</span>
                                Reminder: Your dental appointment is tomorrow, May 2 at 2:00 PM. Please arrive 15 minutes early to complete paperwork. Reply INFO for directions.
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 bg-green-50 border border-green-100 rounded-lg p-3">
                            <div className="text-xs text-green-700">
                              <p className="font-medium mb-1">SMS Follow-up Benefits:</p>
                              <ul className="list-disc pl-4 space-y-1">
                                <li>93% of SMS messages are read within 3 minutes</li>
                                <li>Reduces appointment no-shows by up to 45%</li>
                                <li>Automated confirmations and reminders with no staff effort</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </div>
        </Tabs>
        
        {/* Integration Process - Redesigned for better visual clarity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 max-w-6xl mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Seamless Integration Process</h3>
            <p className="text-gray-600 mb-6">
              Our platform is designed to work with your existing tech stack, not replace it. We offer multiple integration methods to ensure a smooth experience:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-voice-purple/10 to-white flex items-center justify-center flex-shrink-0 border border-voice-purple/20 group-hover:shadow-md transition-all">
                  <Cloud className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800 group-hover:text-voice-purple transition-colors">API Integration</h4>
                  <p className="text-gray-600 text-sm">Connect directly to our REST API for full control and customization of the integration flow</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-voice-purple/10 to-white flex items-center justify-center flex-shrink-0 border border-voice-purple/20 group-hover:shadow-md transition-all">
                  <FileText className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800 group-hover:text-voice-purple transition-colors">Webhooks</h4>
                  <p className="text-gray-600 text-sm">Receive real-time data in your systems as conversations happen and analysis is performed</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-voice-purple/10 to-white flex items-center justify-center flex-shrink-0 border border-voice-purple/20 group-hover:shadow-md transition-all">
                  <Database className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800 group-hover:text-voice-purple transition-colors">Pre-built Connectors</h4>
                  <p className="text-gray-600 text-sm">Use our library of pre-built connectors for popular platforms like Salesforce, Zendesk, HubSpot and more</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-voice-purple/5 via-transparent to-voice-purple/5 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-white border border-voice-purple/10 rounded-xl p-8 shadow-lg">
              <h4 className="text-lg font-semibold mb-6 flex items-center text-gray-800">
                <MessageSquare className="w-5 h-5 mr-2 text-voice-purple" />
                Integration Flow
              </h4>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <IntegrationFlowchart />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
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

const FeatureDisplay = ({ feature, activeFeature, content }: FeatureDisplayProps) => {
  const accentColor = 
    activeFeature === "analysis" ? "bg-voice-purple text-white" :
    activeFeature === "integration" ? "bg-orange-500 text-white" : 
    "bg-blue-500 text-white";

  return (
    <motion.div
      key={activeFeature}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-white rounded-2xl p-6 shadow-md border border-gray-200"
    >
      {/* Left Side - Interactive Demo */}
      <div>
        {content}
      </div>
      
      {/* Right Side - Feature Description */}
      <div className="space-y-8">
        <div>
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
            "shadow-md", 
            activeFeature === "analysis" ? "bg-voice-purple/10 border-voice-purple/20" :
            activeFeature === "integration" ? "bg-orange-500/10 border-orange-500/20" : 
            "bg-blue-500/10 border-blue-500/20",
            "border"
          )}>
            {feature.icon}
          </div>
          
          <h3 className={cn(
            "text-3xl font-bold mb-4", 
            feature.color
          )}>
            {feature.title}
          </h3>
          
          <p className="text-gray-700 mb-6 text-lg">
            {feature.description}
          </p>
          
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h4 className="font-medium text-gray-800 mb-3">How it works:</h4>
            <div className="space-y-3">
              {feature.steps.map((step, index) => (
                <div key={index} className="flex items-start group">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110",
                    accentColor
                  )}>
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Cloud className={cn("w-5 h-5 mr-2", feature.color)} />
              <h4 className="font-medium text-gray-800">Real-world impact:</h4>
            </div>
            <p className="text-gray-700">
              {activeFeature === "analysis" && "Companies using our AI analysis see a 40% reduction in call handling time and 35% improvement in first-call resolution rates."}
              {activeFeature === "integration" && "Businesses report saving 15+ hours per week on manual data entry and seeing a 28% increase in workflow efficiency after integration."}
              {activeFeature === "followup" && "Automated follow-ups have resulted in a 53% increase in appointment confirmations and a 47% decrease in no-shows."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntegrationSection;
