
import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Mail, Users, Database, MessageSquare, FileText, ArrowRight } from "lucide-react";

interface FlowchartProps {
  className?: string;
}

const Flowchart = ({ className }: FlowchartProps) => {
  const nodes = [
    { icon: Phone, label: "Call Completed", subLabel: "AI conversation done", color: "bg-orange-500" },
    { icon: MessageSquare, label: "AI Analysis", subLabel: "Call processed", color: "bg-voice-purple" },
    { icon: FileText, label: "Data Extracted", subLabel: "Key info captured", color: "bg-blue-500" },
    { icon: Database, label: "Systems Updated", subLabel: "Data synced", color: "bg-pink-500" },
  ];

  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {nodes.map((node, index) => (
            <React.Fragment key={node.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center gap-3 relative"
              >
                <div className={`p-4 rounded-full ${node.color} shadow-lg relative group`}>
                  <node.icon className="w-6 h-6 text-white" />
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
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm font-medium text-gray-800">{node.label}</span>
                  <span className="text-xs text-gray-500">{node.subLabel}</span>
                </div>
              </motion.div>
              
              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "auto" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="hidden md:flex items-center"
                >
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
