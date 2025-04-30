
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import IntegrationFlowchart from "./IntegrationFlowchart";
import WorkflowCards from "./WorkflowCards";
import { getIndustryIntegrations } from "./demo/industryData";
import { Phone, MessageSquare, Brain, Laptop } from "lucide-react";

type Industry = "restaurant" | "car" | "medical";

const IntegrationSection = () => {
  const [activeIndustry, setActiveIndustry] = React.useState<Industry>("restaurant");
  const integrationData = getIndustryIntegrations(activeIndustry);
  
  return (
    <section className="py-24 bg-voice-dark border-t border-voice-purple/10" id="integrations">
      <div className="container mx-auto px-2 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 18 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Intelligent Call Analysis & System Integration
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-3xl mx-auto">
            Our AI automatically analyzes every conversation and seamlessly integrates with 
            your existing systems to automate workflows and improve operational efficiency
          </p>
        </motion.div>

        {/* Call Analysis Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-8 shadow-lg"
          >
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
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-8 shadow-lg"
          >
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
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-voice-dark/60 backdrop-blur-sm border border-voice-purple/10 rounded-xl p-8 shadow-lg"
          >
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
            </ul>
          </motion.div>
        </div>
        
        {/* Industry-specific Workflows */}
        <div className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-6"
          >
            <h3 className="text-2xl font-bold">Industry-specific Workflow Examples</h3>
            <Tabs 
              defaultValue={activeIndustry} 
              className="w-fit"
              onValueChange={(value) => setActiveIndustry(value as Industry)}
            >
              <TabsList className="bg-voice-dark/50 border border-voice-purple/20">
                <TabsTrigger value="restaurant" className="data-[state=active]:text-orange-500">Restaurant</TabsTrigger>
                <TabsTrigger value="car" className="data-[state=active]:text-lime-500">Automotive</TabsTrigger>
                <TabsTrigger value="medical" className="data-[state=active]:text-sky-500">Medical</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <WorkflowCards
              workflows={integrationData.workflows}
              industry={activeIndustry}
              wide={true}
            />
          </motion.div>
        </div>
        
        {/* Integration Flow Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16 px-4"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <p className="text-voice-cream/70">
              Our seamless integration flow connects voice conversations to your business systems
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-voice-purple/20 via-transparent to-voice-purple/20 blur-3xl opacity-30"></div>
            <IntegrationFlowchart />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
