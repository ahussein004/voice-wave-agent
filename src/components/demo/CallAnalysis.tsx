
import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Calendar, MapPin, User, FileText } from "lucide-react";

interface AnalysisItem {
  icon: React.ReactNode;
  content: string;
}

interface CallAnalysisProps {
  title: string;
  summary: string;
  extractedData: AnalysisItem[];
  nextSteps: string[];
  color: string;
}

const CallAnalysis = ({ title, summary, extractedData, nextSteps, color }: CallAnalysisProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-voice-dark/80 backdrop-blur-sm border border-voice-purple/20 rounded-xl p-6 shadow-lg text-left"
    >
      <h3 className="text-xl font-semibold mb-3" style={{ color }}>
        {title}
      </h3>
      
      <p className="text-voice-cream/80 mb-5 text-sm">
        {summary}
      </p>
      
      <div className="mb-5">
        <h4 className="text-sm font-semibold mb-2 flex items-center">
          <FileText className="w-4 h-4 mr-2" style={{ color }} />
          Extracted Information
        </h4>
        <ul className="space-y-2 text-sm">
          {extractedData.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 flex-shrink-0">
                {item.icon}
              </span>
              <span className="text-voice-cream/90">{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold mb-2 flex items-center">
          <Check className="w-4 h-4 mr-2" style={{ color }} />
          AI System Actions
        </h4>
        <ol className="space-y-2 text-sm">
          {nextSteps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mr-2 text-xs" style={{ backgroundColor: color, color: 'white' }}>
                {index + 1}
              </span>
              <span className="text-voice-cream/90">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
};

export default CallAnalysis;
