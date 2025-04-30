
import React from "react";
import { motion } from "framer-motion";
import PhoneInterface from "./PhoneInterface";
import CallAnalysis from "./CallAnalysis";
import { Calendar, Car, DollarSign, Phone, User } from "lucide-react";

interface CarDemoProps {
  isPlaying: boolean;
  togglePlay: () => void;
  getIndustryColor: () => string;
  getHeadlineGradient: () => string;
}

const CarDemo = ({ 
  isPlaying, 
  togglePlay, 
  getIndustryColor,
  getHeadlineGradient 
}: CarDemoProps) => {
  const colorHex = "#84cc16"; // Green color for car dealership
  
  return (
    <motion.div
      key="car"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-8 items-center mb-24"
    >
      <div>
        <PhoneInterface 
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          activeIndustry="car"
          getIndustryColor={() => colorHex}
        />
      </div>
      <div>
        <CallAnalysis
          title="Car Dealership Call Analysis"
          summary="John Doe contacted Westgate Luxury Motors about a Porsche Cayenne he saw on their website. After discussing financing options, including a special 0.9% APR offer, John scheduled a test drive by providing his name and phone number (12345)."
          extractedData={[
            { icon: <User className="w-4 h-4 text-lime-500" />, content: "Customer: John Doe" },
            { icon: <Car className="w-4 h-4 text-lime-500" />, content: "Vehicle of Interest: Porsche Cayenne" },
            { icon: <DollarSign className="w-4 h-4 text-lime-500" />, content: "Financing: Special 0.9% APR offer" },
            { icon: <Phone className="w-4 h-4 text-lime-500" />, content: "Contact: Phone number (12345)" }
          ]}
          nextSteps={[
            "New lead created in CRM system",
            "Test drive appointment scheduled",
            "Sales team notified of specific vehicle interest",
            "Financing pre-qualification started with provided information"
          ]}
          color={colorHex}
        />
      </div>
    </motion.div>
  );
};

export default CarDemo;
