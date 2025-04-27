
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, FileText, Mail, Bell, Database } from "lucide-react";

const agentTasks = [
  {
    icon: <MessageSquare className="w-5 h-5 text-[#9b87f5]" />,
    label: "AI Call Analysis",
    desc: "Call processed & analyzed",
    animate: "#9b87f5"
  },
  {
    icon: <FileText className="w-5 h-5 text-[#F97316]" />,
    label: "Data Extraction",
    desc: "Key info captured",
    animate: "#F97316"
  },
  {
    icon: <Calendar className="w-5 h-5 text-[#0EA5E9]" />,
    label: "Action Items",
    desc: "Tasks & appointments set",
    animate: "#0EA5E9"
  },
  {
    icon: <Bell className="w-5 h-5 text-[#9b87f5]" />,
    label: "Team Notifications",
    desc: "Staff alerted",
    animate: "#9b87f5"
  },
  {
    icon: <Mail className="w-5 h-5 text-[#F97316]" />,
    label: "Customer Update",
    desc: "Confirmation sent",
    animate: "#F97316"
  },
  {
    icon: <Database className="w-5 h-5 text-[#0EA5E9]" />,
    label: "Systems Updated",
    desc: "Records synced",
    animate: "#0EA5E9"
  }
];

const AgentTaskFlow = () => (
  <div className="w-full flex flex-wrap justify-center gap-4 max-w-5xl mx-auto p-4">
    {agentTasks.map((task, idx) => (
      <React.Fragment key={task.label}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.4 }}
          className="flex flex-col items-center bg-voice-dark/80 px-6 py-4 rounded-xl border border-voice-purple/20 shadow-lg min-w-[180px] relative"
        >
          <div className="mb-3">
            <span className="inline-block p-3 bg-white/5 border border-voice-purple/20 rounded-full">
              {task.icon}
            </span>
          </div>
          <div className="text-sm font-semibold mb-1 text-center">{task.label}</div>
          <div className="text-xs text-voice-cream/70 text-center">{task.desc}</div>
          
          {/* Animated connection line */}
          {idx < agentTasks.length - 1 && (
            <motion.div
              className="hidden md:block absolute -right-8 top-1/2 w-16 h-[2px]"
              style={{ background: task.animate }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.2, duration: 0.5 }}
            />
          )}
          
          {/* Animated pulse effect */}
          <motion.span
            className="absolute -inset-1 rounded-xl opacity-20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
            style={{ background: task.animate }}
          />
        </motion.div>
      </React.Fragment>
    ))}
  </div>
);

export default AgentTaskFlow;
