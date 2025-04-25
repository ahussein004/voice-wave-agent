
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChartBar, Clock, DollarSign, MessageSquare, Percent, TrendingUp, Users } from "lucide-react";

interface StatCardProps {
  number: string;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, prefix = "", suffix = "", description, icon }) => {
  const [counted, setCounted] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const numberValue = parseFloat(number.replace(/[^0-9.]/g, ''));
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * numberValue);
      
      if (progress < 1) {
        setCounted(currentCount);
        requestAnimationFrame(updateCount);
      } else {
        setCounted(numberValue);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isVisible, number]);
  
  return (
    <div 
      ref={ref}
      className={`bg-gray-900/50 backdrop-blur p-6 rounded-lg border border-voice-purple/20 hover:border-voice-purple/40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="w-12 h-12 mb-4 bg-voice-purple/20 rounded-lg flex items-center justify-center text-voice-purple-light">
        {icon}
      </div>
      
      <h3 className="flex items-baseline text-3xl md:text-4xl font-bold mb-2 text-voice-purple-light">
        {prefix}
        <span>{counted}</span>
        {suffix}
      </h3>
      
      <p className="text-voice-cream/80">{description}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-voice-dark to-gray-900"></div>
      
      <div className="container relative z-10 mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="inline-flex items-center bg-voice-purple/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-voice-purple/30">
            <span className="h-2 w-2 rounded-full bg-voice-purple-light animate-pulse mr-2"></span>
            <span className="text-sm font-medium text-voice-cream/90">Data-Driven Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Voice Agents by the Numbers</h2>
          <p className="text-voice-cream/70 max-w-lg mx-auto">
            Our AI voice solutions are transforming businesses with proven results and measurable outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <StatCard 
            number="47.5" 
            prefix="$" 
            suffix="B" 
            description="Market by 2034 - The global AI voice agent industry is growing at a staggering 34.8% annually."
            icon={<TrendingUp className="h-6 w-6" />} 
          />
          
          <StatCard 
            number="500" 
            suffix="%" 
            description="Faster Call Handling - AI voice agents resolve customer calls up to five times faster than traditional systems."
            icon={<Clock className="h-6 w-6" />} 
          />
          
          <StatCard 
            number="73" 
            suffix="%" 
            description="Of Inquiries Solved Instantly - Over 7 in 10 customer queries are resolved autonomously, even outside business hours."
            icon={<MessageSquare className="h-6 w-6" />} 
          />
          
          <StatCard 
            number="30" 
            suffix="%" 
            description="Reduction in Operational Costs - Businesses leveraging agentic AI expect to cut costs by nearly a third by 2029."
            icon={<DollarSign className="h-6 w-6" />} 
          />
          
          <StatCard 
            number="82" 
            suffix="%" 
            description="Of Customers Expect Immediate Answers - AI voice agents deliver instant, 24/7 responses—no more missed opportunities."
            icon={<Users className="h-6 w-6" />} 
          />
          
          <StatCard 
            number="98" 
            suffix="%" 
            description="Conversion When Responding Within 3 Minutes - Speed matters: AI voice agents help you capture leads before competitors do."
            icon={<Percent className="h-6 w-6" />} 
          />
        </div>
        
        {/* Quote */}
        <blockquote className="max-w-2xl mx-auto text-center p-6 border-l-4 border-voice-purple bg-voice-purple/5 rounded-r-lg">
          <p className="text-lg italic text-voice-cream mb-4">
            "AI voice agents will autonomously resolve 80% of common service issues by 2029."
          </p>
          <footer className="text-voice-cream/60 text-sm">— Gartner Research</footer>
        </blockquote>
        
        <div className="mt-12 text-center">
          <Button className="bg-voice-purple hover:bg-voice-purple-dark text-white px-6">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
