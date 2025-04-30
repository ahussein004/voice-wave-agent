import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IntegrationFlowchart from "./IntegrationFlowchart";
import { Phone, MessageSquare, Brain, Laptop, FileText, Database, Cloud, Mic, Link, Mail } from "lucide-react";
import AnalysisSummaryCard from "./AnalysisSummaryCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <section className="py-24 bg-white border-t border-gray-200" id="integrations">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-voice-dark">
            Intelligent Call Analysis & System Integration
          </h2>
          <p className="text-lg text-voice-dark/80 max-w-3xl mx-auto">
            Our AI automatically analyzes every conversation in real-time and seamlessly integrates with 
            your existing systems to automate workflows and improve operational efficiency
          </p>
        </motion.div>

        {/* Interactive Feature Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(featureData) as Array<keyof typeof featureData>).map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveFeature(key)}
              className={cn(
                "px-6 py-3 rounded-full flex items-center gap-2 transition-all",
                activeFeature === key 
                  ? `${featureData[key].bgColor} ${featureData[key].borderColor} border shadow-lg` 
                  : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                activeFeature === key ? featureData[key].color : "text-gray-500"
              )}>
                {featureData[key].icon}
              </span>
              <span className={cn(
                "font-medium", 
                activeFeature === key ? featureData[key].color : "text-gray-700"
              )}>
                {featureData[key].title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Feature Demo Content */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left Side - Interactive Demo */}
          <div>
            <div className={cn(
              "p-2 rounded-2xl border shadow-lg overflow-hidden",
              featureData[activeFeature].borderColor
            )}>
              <div className="relative">
                <div className={cn(
                  "absolute -inset-4 blur-2xl opacity-20",
                  featureData[activeFeature].bgColor
                )}></div>
                
                {activeFeature === "analysis" && (
                  <AnalysisSummaryCard />
                )}
                
                {activeFeature === "integration" && (
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-orange-500" />
                      System Integration Flow
                    </h3>
                    <IntegrationFlowchart />
                  </div>
                )}
                
                {activeFeature === "followup" && (
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                      Follow-up Communication
                    </h3>
                    
                    {/* Email Preview */}
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">To: samantha@example.com</div>
                        <div className="text-sm text-gray-500">12:42 PM</div>
                      </div>
                      <div className="text-sm font-medium mb-1">Appointment Confirmation: May 2, 2:00 PM</div>
                      <div className="text-xs text-gray-600">
                        Hi Samantha, this is a confirmation of your appointment rescheduled for May 2 at 2:00 PM. 
                        Please reply to confirm or call us if you need to make any changes.
                      </div>
                    </div>
                    
                    {/* SMS Preview */}
                    <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                      <div className="flex justify-end mb-1">
                        <div className="text-xs text-gray-500">12:43 PM</div>
                      </div>
                      <div className="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-xs ml-auto">
                        Your appointment is confirmed for May 2 at 2:00 PM. Reply YES to confirm or call (555) 123-4567 to reschedule.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Side - Feature Description */}
          <div className="space-y-8">
            <div>
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                featureData[activeFeature].bgColor
              )}>
                {featureData[activeFeature].icon}
              </div>
              
              <h3 className={cn(
                "text-3xl font-bold mb-4", 
                featureData[activeFeature].color
              )}>
                {featureData[activeFeature].title}
              </h3>
              
              <p className="text-gray-700 mb-6 text-lg">
                {featureData[activeFeature].description}
              </p>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">How it works:</h4>
                <div className="space-y-3">
                  {featureData[activeFeature].steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs text-white mr-3 flex-shrink-0 mt-0.5",
                        activeFeature === "analysis" ? "bg-voice-purple" : 
                        activeFeature === "integration" ? "bg-orange-500" : "bg-blue-500"
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
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Cloud className={cn("w-5 h-5 mr-2", featureData[activeFeature].color)} />
                  <h4 className="font-medium text-gray-800">Real-world impact:</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {activeFeature === "analysis" && "Companies using our AI analysis see a 40% reduction in call handling time and 35% improvement in first-call resolution rates."}
                  {activeFeature === "integration" && "Businesses report saving 15+ hours per week on manual data entry and seeing a 28% increase in workflow efficiency after integration."}
                  {activeFeature === "followup" && "Automated follow-ups have resulted in a 53% increase in appointment confirmations and a 47% decrease in no-shows."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Integration Process - Keep this section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-voice-dark">Seamless Integration Process</h3>
            <p className="text-voice-dark/80 mb-6">
              Our platform is designed to work with your existing tech stack, not replace it. We offer multiple integration methods to ensure a smooth experience:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-voice-purple/20 flex items-center justify-center flex-shrink-0 border border-voice-purple/30">
                  <Cloud className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-voice-dark">API Integration</h4>
                  <p className="text-voice-dark/70 text-sm">Connect directly to our REST API for full control and customization of the integration flow</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-voice-purple/20 flex items-center justify-center flex-shrink-0 border border-voice-purple/30">
                  <FileText className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-voice-dark">Webhooks</h4>
                  <p className="text-voice-dark/70 text-sm">Receive real-time data in your systems as conversations happen and analysis is performed</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-voice-purple/20 flex items-center justify-center flex-shrink-0 border border-voice-purple/30">
                  <Database className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-voice-dark">Pre-built Connectors</h4>
                  <p className="text-voice-dark/70 text-sm">Use our library of pre-built connectors for popular platforms like Salesforce, Zendesk, HubSpot and more</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-voice-purple/10 via-transparent to-voice-purple/10 blur-3xl opacity-30"></div>
            <div className="relative bg-white border border-voice-purple/20 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 flex items-center text-voice-dark">
                <MessageSquare className="w-5 h-5 mr-2 text-voice-purple" />
                Integration Flow
              </h4>
              <IntegrationFlowchart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
