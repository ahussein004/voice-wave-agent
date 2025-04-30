
import React from "react";
import { motion } from "framer-motion";
import PhoneInterface from "./PhoneInterface";
import CallAnalysis from "./CallAnalysis";
import { Calendar, Clock, MapPin, User, Cake } from "lucide-react";

interface RestaurantDemoProps {
  isPlaying: boolean;
  togglePlay: () => void;
  getIndustryColor: () => string;
  getHeadlineGradient: () => string;
  audioUrl?: string;
}

const RestaurantDemo = ({ 
  isPlaying, 
  togglePlay, 
  getIndustryColor,
  getHeadlineGradient,
  audioUrl
}: RestaurantDemoProps) => {
  const colorHex = "#F97316"; // Orange color for restaurant
  
  return (
    <motion.div
      key="restaurant"
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
          activeIndustry="restaurant"
          getIndustryColor={() => colorHex}
          audioUrl={audioUrl}
        />
      </div>
      <div>
        <CallAnalysis
          title="Restaurant Reservation Call Analysis"
          summary="The caller made a reservation for a party of 4 at Savarelle for 8 PM this Saturday, requesting a garden patio table. They mentioned it's for a friend's birthday and arranged for champagne upon arrival and a special birthday dessert tray, with no dietary requirements noted."
          extractedData={[
            { icon: <Calendar className="w-4 h-4 text-orange-500" />, content: "Saturday, 8:00 PM" },
            { icon: <User className="w-4 h-4 text-orange-500" />, content: "Party of 4 people" },
            { icon: <MapPin className="w-4 h-4 text-orange-500" />, content: "Garden patio table requested" },
            { icon: <Cake className="w-4 h-4 text-orange-500" />, content: "Friend's birthday celebration" }
          ]}
          nextSteps={[
            "Reservation added to restaurant management system",
            "Special request for champagne upon arrival noted",
            "Birthday dessert tray arranged with kitchen",
            "Confirmation SMS sent to customer with details"
          ]}
          color={colorHex}
        />
      </div>
    </motion.div>
  );
};

export default RestaurantDemo;
