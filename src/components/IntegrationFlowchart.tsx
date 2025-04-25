
import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Mail, Users, Database, MessageSquare, FileText, ArrowRight } from "lucide-react";

interface FlowchartProps {
  className?: string;
}

const Flowchart = ({ className }: FlowchartProps) => {
  const nodes = [
    { icon: Phone, label: "Call Ends", color: "bg-orange-500" },
    { icon: MessageSquare, label: "AI Analysis", color: "bg-voice-purple" },
    { icon: Calendar, label: "Schedule Updated", color: "bg-purple-500" },
    { icon: Mail, label: "Follow-up Sent", color: "bg-blue-500" },
    { icon: Users, label: "Team Notified", color: "bg-green-500" },
    { icon: Database, label: "CRM Updated", color: "bg-pink-500" },
  ];

  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {nodes.map((node, index) => (
            <React.Fragment key={node.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center gap-2 relative"
              >
                <div className={`p-4 rounded-full ${node.color} shadow-lg shadow-voice-purple/10 relative`}>
                  <node.icon className="w-6 h-6 text-white" />
                  
                  {/* Animated pulse effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    initial={{ opacity: 0.7, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.4,
                      repeatDelay: 1
                    }}
                    style={{ background: node.color }}
                  />
                </div>
                <span className="text-sm text-voice-cream/80">{node.label}</span>
              </motion.div>
              
              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  className="hidden md:flex items-center"
                >
                  <ArrowRight className="w-6 h-6 text-voice-purple/40" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {[
            {
              title: "Real-time Data Processing",
              description: "Conversations are analyzed instantly to extract key information",
              icon: FileText,
              color: "bg-blue-500/20"
            },
            {
              title: "Intelligent Workflow Triggers",
              description: "Automated actions based on conversation context and intent",
              icon: Calendar,
              color: "bg-purple-500/20"
            },
            {
              title: "Seamless System Integration",
              description: "Works with your existing tech stack without complex setup",
              icon: Database,
              color: "bg-green-500/20"
            },
          ].map((item, index) => (
            <div key={item.title} className="bg-voice-dark/50 border border-voice-purple/20 rounded-lg p-6">
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-medium mb-2">{item.title}</h4>
              <p className="text-sm text-voice-cream/70">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Flowchart;
