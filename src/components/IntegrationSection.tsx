import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IntegrationFlowchart from "./IntegrationFlowchart";
import { Phone, MessageSquare, Brain, Laptop, FileText, Database, Cloud } from "lucide-react";
import AnalysisSummaryCard from "./AnalysisSummaryCard";
const IntegrationSection = () => {
  return <section className="py-24 bg-voice-dark border-t border-voice-purple/10" id="integrations">
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
            Intelligent Call Analysis & System Integration
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-3xl mx-auto">
            Our AI automatically analyzes every conversation in real-time and seamlessly integrates with 
            your existing systems to automate workflows and improve operational efficiency
          </p>
        </motion.div>

        {/* Call Analysis Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
        }} className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-voice-purple to-voice-purple-light rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Call Analysis</h3>
            <p className="text-voice-cream/70 mb-4">
              Our AI automatically transcribes and analyzes every conversation in real-time, extracting key information and customer intent. This analysis powers both immediate responses and downstream automations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-voice-purple"></span>
                <span className="text-voice-cream/80 text-sm">Intent & sentiment detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-voice-purple"></span>
                <span className="text-voice-cream/80 text-sm">Named entity recognition</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-voice-purple"></span>
                <span className="text-voice-cream/80 text-sm">Structured data extraction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-voice-purple"></span>
                <span className="text-voice-cream/80 text-sm">Customer history contextualization</span>
              </li>
            </ul>
          </motion.div>
          
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
        }} className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-300 rounded-lg flex items-center justify-center mb-4">
              <Laptop className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">System Integration</h3>
            <p className="text-voice-cream/70 mb-4">
              Connect your AI voice system with your existing business tools through our integration hub. We support all major CRMs, scheduling tools, and industry-specific software.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-voice-cream/80 text-sm">Native integrations with popular tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-voice-cream/80 text-sm">Custom API connections</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-voice-cream/80 text-sm">Zapier & Make.com support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-voice-cream/80 text-sm">Secure data synchronization</span>
              </li>
            </ul>
          </motion.div>
          
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
          delay: 0.4
        }} className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automated Follow-ups</h3>
            <p className="text-voice-cream/70 mb-4">
              Turn conversations into actions with automated follow-up workflows. Send confirmations, reminders, and important information through SMS, email, or your preferred channel.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="text-voice-cream/80 text-sm">SMS & email follow-ups</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="text-voice-cream/80 text-sm">Scheduled reminders</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="text-voice-cream/80 text-sm">Personalized communication</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="text-voice-cream/80 text-sm">Multi-channel engagement</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Live Analysis Example */}
        
        
        {/* Integration Process */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Seamless Integration Process</h3>
            <p className="text-voice-cream/80 mb-6">
              Our platform is designed to work with your existing tech stack, not replace it. We offer multiple integration methods to ensure a smooth experience:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-voice-purple/20 flex items-center justify-center flex-shrink-0 border border-voice-purple/30">
                  <Cloud className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">API Integration</h4>
                  <p className="text-voice-cream/70 text-sm">Connect directly to our REST API for full control and customization of the integration flow</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-voice-purple/20 flex items-center justify-center flex-shrink-0 border border-voice-purple/30">
                  <FileText className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Webhooks</h4>
                  <p className="text-voice-cream/70 text-sm">Receive real-time data in your systems as conversations happen and analysis is performed</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-voice-purple/20 flex items-center justify-center flex-shrink-0 border border-voice-purple/30">
                  <Database className="w-5 h-5 text-voice-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Pre-built Connectors</h4>
                  <p className="text-voice-cream/70 text-sm">Use our library of pre-built connectors for popular platforms like Salesforce, Zendesk, HubSpot and more</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-voice-purple/20 via-transparent to-voice-purple/20 blur-3xl opacity-30"></div>
            <div className="relative bg-voice-dark/40 border border-voice-purple/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-voice-purple" />
                Integration Flow
              </h4>
              <IntegrationFlowchart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default IntegrationSection;