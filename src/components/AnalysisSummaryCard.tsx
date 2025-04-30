import React from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Stethoscope, MessageSquare, FileText, CheckCircle, Clock, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
const AnalysisSummaryCard = () => {
  // Medical theme colors
  const medicalBlue = "#0EA5E9";
  return <div className="bg-white rounded-xl border border-sky-200 shadow-lg p-6 flex flex-col h-full">
      {/* Header section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5 text-sky-500" />
          <h3 className="font-semibold text-gray-800">Medical Call Analysis</h3>
        </div>
        
      </div>
      
      {/* Patient inquiry card */}
      <Card className="border-sky-200 shadow-sm mb-5 flex-shrink-0">
        <div className="p-4 bg-sky-50">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">New Patient Inquiry</span>
            </div>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
              00:42
            </span>
          </div>
          
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
            "I've been having stomach pain since yesterday, and I'd like to schedule an appointment with Dr. Smith as soon as possible."
          </p>
        </div>
      </Card>

      {/* Analysis content - reorganized for better readability */}
      <div className="space-y-4 flex-grow">
        {/* Key Entities section */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="h-4 w-4 text-sky-500" />
            <h4 className="text-sm font-medium text-gray-700">Key Health Concerns</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-sky-50 text-sky-600 text-xs px-3 py-1.5 rounded-full border border-sky-200">
              stomach pain
            </span>
            <span className="bg-amber-50 text-amber-600 text-xs px-3 py-1.5 rounded-full border border-amber-200">
              urgent care
            </span>
            <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full border border-blue-200">
              Dr. Smith
            </span>
          </div>
        </div>
        
        {/* Clinical Actions section - Made bigger */}
        <div className="p-5 bg-sky-50 rounded-lg border border-sky-100">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-sky-500" />
            <h4 className="text-base font-medium text-gray-800">Clinical Actions</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                <motion.div animate={{
                opacity: [0.5, 1, 0.5]
              }} transition={{
                repeat: Infinity,
                duration: 2
              }} className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Schedule urgent appointment</p>
                <p className="text-sm text-gray-600">Same-day appointment with Dr. Smith</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <motion.div animate={{
                opacity: [0.5, 1, 0.5]
              }} transition={{
                repeat: Infinity,
                duration: 2,
                delay: 0.5
              }} className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Send pre-appointment instructions</p>
                <p className="text-sm text-gray-600">Fasting requirements and ID/insurance reminder</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <motion.div animate={{
                opacity: [0.5, 1, 0.5]
              }} transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1
              }} className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Create new patient record</p>
                <p className="text-sm text-gray-600">Update EHR with preliminary symptoms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer section */}
      <div className="mt-5 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-sky-500" />
            <span className="text-xs text-gray-500">Appointment scheduled for today at 2:00 PM</span>
          </div>
          <button className="text-xs font-medium text-sky-600 hover:text-sky-700 transition-colors">
            View patient details
          </button>
        </div>
      </div>
    </div>;
};
export default AnalysisSummaryCard;