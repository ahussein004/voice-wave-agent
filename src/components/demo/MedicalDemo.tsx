
import React from "react";
import { motion } from "framer-motion";
import PhoneInterface from "./PhoneInterface";
import CallAnalysis from "./CallAnalysis";
import { Clock, Calendar, FileText, User, Stethoscope } from "lucide-react";

interface MedicalDemoProps {
  isPlaying: boolean;
  togglePlay: () => void;
  getIndustryColor: () => string;
  getHeadlineGradient: () => string;
  audioUrl?: string;
}

const MedicalDemo = ({ 
  isPlaying, 
  togglePlay, 
  getIndustryColor,
  getHeadlineGradient,
  audioUrl
}: MedicalDemoProps) => {
  const colorHex = "#0EA5E9"; // Blue color for medical
  
  return (
    <motion.div
      key="medical"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-8 items-stretch mb-24"
    >
      <div className="h-full flex flex-col">
        <PhoneInterface 
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          activeIndustry="medical"
          getIndustryColor={() => colorHex}
          audioUrl={audioUrl}
        />
      </div>
      <div className="h-full flex flex-col">
        <CallAnalysis
          title="Medical Clinic Call Analysis"
          summary="John Doe, a new customer, called Trinity Health and Wellness to schedule an appointment for a stomach ache. Sarah booked him for a same-day appointment at 2 p.m. and advised him to bring ID and insurance information."
          extractedData={[
            { icon: <User className="w-4 h-4 text-sky-500" />, content: "New Patient: John Doe" },
            { icon: <Stethoscope className="w-4 h-4 text-sky-500" />, content: "Concern: Stomach ache" },
            { icon: <Calendar className="w-4 h-4 text-sky-500" />, content: "Today at 2:00 PM" },
            { icon: <FileText className="w-4 h-4 text-sky-500" />, content: "Required: ID and insurance info" }
          ]}
          nextSteps={[
            "New patient record created in EHR system",
            "Urgent same-day appointment scheduled",
            "Reminder SMS sent with appointment details",
            "Practitioner notified about new patient and symptoms"
          ]}
          color={colorHex}
        />
      </div>
    </motion.div>
  );
};

export default MedicalDemo;
