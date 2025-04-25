
import React from "react";
import { motion } from "framer-motion";
import { Calendar, CalendarArrowUp, Mail, Users, Database } from "lucide-react";
import IntegrationCard from "./IntegrationCard";
import Flowchart from "./IntegrationFlowchart";

const IntegrationSection = () => {
  const features = [
    {
      title: "Instant Appointment Booking",
      description: "Seamlessly schedule appointments into your calendar system with smart availability checks",
      icon: Calendar,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Smart Rescheduling",
      description: "Automatically handle changes and find optimal new time slots",
      icon: CalendarArrowUp,
      color: "from-purple-600/20 to-purple-700/20"
    },
    {
      title: "Automated Follow-ups",
      description: "Send personalized emails and SMS messages at the perfect moment",
      icon: Mail,
      color: "from-purple-700/20 to-purple-800/20"
    },
    {
      title: "Task Delegation",
      description: "Route tasks and notifications to the right team member instantly",
      icon: Users,
      color: "from-purple-800/20 to-purple-900/20"
    },
    {
      title: "Data Capture & CRM Update",
      description: "Automatically sync conversation data with your CRM system",
      icon: Database,
      color: "from-purple-900/20 to-purple-950/20"
    }
  ];

  return (
    <section className="py-24 bg-voice-dark border-t border-voice-purple/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Beyond The Call: What Happens Next
          </h2>
          <p className="text-lg text-voice-cream/80 max-w-2xl mx-auto">
            Watch your business processes automate themselves after every call
          </p>
        </motion.div>

        <Flowchart className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <IntegrationCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
