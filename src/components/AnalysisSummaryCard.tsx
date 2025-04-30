
import React from "react";
import { CheckCircle, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";

const analysis = {
  caller: "Samantha (Customer)",
  summary: "Customer called to reschedule her appointment due to a schedule conflict. Was pleased with the helpfulness and accepted an available slot for next week.",
  stats: [
    { label: "Duration", value: "3:18 min", icon: <MessageSquare className="w-4 h-4 text-voice-purple" /> },
    { label: "Sentiment", value: "Positive", icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
    { label: "Intent", value: "Reschedule Appointment", icon: <User className="w-4 h-4 text-blue-400" /> }
  ],
  extraction: [
    "Original: Apr 25, 10:00 AM",
    "New: May 2, 2:00 PM",
    "Reason: Work schedule conflict",
    "Customer confirmed by SMS"
  ]
};

const AnalysisSummaryCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-voice-purple/10 to-white rounded-lg border border-voice-purple/20 shadow-lg p-6"
  >
    <div className="mb-2 text-xs text-voice-purple uppercase font-semibold tracking-wider">
      Live Call Analysis Example
    </div>
    <div className="text-gray-800 text-base font-medium mb-4 text-balance">{analysis.summary}</div>
    <div className="flex flex-wrap gap-4 mb-4">
      {analysis.stats.map((stat, i) => (
        <div
          key={stat.label}
          className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-voice-purple/10 shadow-sm min-w-[120px]"
        >
          {stat.icon}
          <span className="font-semibold text-gray-900">{stat.value}</span>
          <span className="text-xs text-gray-500">{stat.label}</span>
        </div>
      ))}
    </div>
    <div className="text-[13px] text-gray-700 mb-2">Key information extracted:</div>
    <ul className="flex flex-wrap gap-2">
      {analysis.extraction.map((item, idx) => (
        <li
          key={idx}
          className="px-3 py-1 rounded-full bg-white border border-voice-purple/20 text-xs text-voice-purple shadow-sm hover:shadow transition-all duration-150"
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default AnalysisSummaryCard;
