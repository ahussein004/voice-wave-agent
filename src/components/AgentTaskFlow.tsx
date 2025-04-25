
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Mail, Bell, Database } from "lucide-react";

const agentTasks = [
  {
    icon: <Calendar className="w-5 h-5 text-[#9b87f5]" />,
    label: "Appointment Rescheduled",
    desc: "New time sent to calendar system",
    animate: "#9b87f5"
  },
  {
    icon: <Mail className="w-5 h-5 text-[#F97316]" />,
    label: "Customer Confirmation",
    desc: "Confirmation email/SMS sent",
    animate: "#F97316"
  },
  {
    icon: <Bell className="w-5 h-5 text-[#0EA5E9]" />,
    label: "Agent Notified",
    desc: "Team receives update task",
    animate: "#0EA5E9"
  },
  {
    icon: <Database className="w-5 h-5 text-[#9b87f5]" />,
    label: "CRM Updated",
    desc: "Customer record updated with new info",
    animate: "#9b87f5"
  }
];

const AgentTaskFlow = () => (
  <div className="w-full flex flex-row max-w-5xl mx-auto justify-center overflow-x-auto mb-12">
    {agentTasks.map((task, idx) => (
      <React.Fragment key={task.label}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.48, type: "spring" }}
          className="flex flex-col items-center bg-voice-dark/80 px-4 py-6 rounded-xl border border-voice-purple/20 shadow-md min-w-[210px] mx-3 relative"
        >
          <div className="mb-2">
            <span className="inline-block p-3 bg-white/5 border border-voice-purple/20 rounded-full">
              {task.icon}
            </span>
          </div>
          <div className="text-sm font-semibold mb-1">{task.label}</div>
          <div className="text-xs text-voice-cream/80">{task.desc}</div>
          {/* Animated pulse */}
          <motion.span
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
            animate={{ opacity: [0.6, 0.2, 0.6], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.2 }}
            style={{ background: task.animate }}
          />
        </motion.div>
        {/* Render arrow between tasks, except after last item */}
        {idx < agentTasks.length - 1 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 + 0.1, duration: 0.4 }}
            className="flex items-center"
          >
            <svg width="36" height="16" fill="none" className="mx-0 text-voice-purple">
              <path d="M0 8h28m0 0l-4-4m4 4l-4 4m0 0h8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        )}
      </React.Fragment>
    ))}
  </div>
);

export default AgentTaskFlow;
