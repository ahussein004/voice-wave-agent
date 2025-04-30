
import React from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Phone, MessageSquare, FileText, Brain, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

const AnalysisSummaryCard = () => {
  return (
    <div className="bg-white rounded-xl border border-purple-200 shadow-lg p-6 flex flex-col h-full">
      {/* Header section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-voice-purple" />
          <h3 className="font-semibold text-gray-800">Call Analysis</h3>
        </div>
        <div className="px-2 py-1 text-xs font-medium text-white bg-voice-purple rounded-full">
          Live
        </div>
      </div>
      
      {/* Customer inquiry card */}
      <Card className="border-voice-purple/20 shadow-sm mb-5 flex-shrink-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">Customer Inquiry</span>
            </div>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
              00:38
            </span>
          </div>
          
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
            "I'm interested in your premium package but I need to know if it includes international calls."
          </p>
        </div>
      </Card>

      {/* Analysis content - reorganized for better readability */}
      <div className="space-y-4 flex-grow">
        {/* Key Entities section */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="h-4 w-4 text-voice-purple" />
            <h4 className="text-sm font-medium text-gray-700">Key Entities</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-voice-purple/10 text-voice-purple text-xs px-3 py-1.5 rounded-full border border-voice-purple/20">
              premium package
            </span>
            <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full border border-blue-200">
              international calls
            </span>
          </div>
        </div>
        
        {/* Sentiment Analysis section */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-4 w-4 text-voice-purple" />
            <h4 className="text-sm font-medium text-gray-700">Sentiment Analysis</h4>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">Interest Level</span>
                <span className="text-xs font-medium text-green-600">High (80%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">Urgency</span>
                <span className="text-xs font-medium text-amber-600">Medium (60%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Items section */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-4 w-4 text-voice-purple" />
            <h4 className="text-sm font-medium text-gray-700">Action Items</h4>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 mt-0.5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-700">Send international calling details</p>
                <p className="text-xs text-gray-500">Include pricing and supported countries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 mt-0.5 rounded-full bg-voice-purple flex items-center justify-center flex-shrink-0">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-700">Schedule follow-up demo call</p>
                <p className="text-xs text-gray-500">Demonstrate international calling features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer section */}
      <div className="mt-5 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-xs text-gray-500">Analysis completed in 12 seconds</span>
          </div>
          <button className="text-xs font-medium text-voice-purple hover:text-voice-purple-dark transition-colors">
            View full report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSummaryCard;
