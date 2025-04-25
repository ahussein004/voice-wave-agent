
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-voice-dark text-voice-cream overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
    </div>
  );
};

export default Index;
