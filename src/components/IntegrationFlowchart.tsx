
import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Mail, Users, Database, ArrowRight } from "lucide-react";

interface FlowchartProps {
  className?: string;
}

const Flowchart = ({ className }: FlowchartProps) => {
  const nodes = [
    { icon: Phone, label: "Call Ends", color: "bg-orange-500" },
    { icon: Calendar, label: "Schedule Updated", color: "bg-purple-500" },
    { icon: Mail, label: "Follow-up Sent", color: "bg-blue-500" },
    { icon: Users, label: "Team Notified", color: "bg-green-500" },
    { icon: Database, label: "CRM Updated", color: "bg-pink-500" },
  ];

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {nodes.map((node, index) => (
          <React.Fragment key={node.label}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`p-4 rounded-full ${node.color} shadow-lg shadow-voice-purple/10`}>
                <node.icon className="w-6 h-6 text-white" />
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
    </div>
  );
};

export default Flowchart;
