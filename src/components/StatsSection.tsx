import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChartBar, Clock, DollarSign, MessageSquare, Percent, TrendingUp, Users } from "lucide-react";

interface StatItemProps {
  number: string;
  prefix?: string;
  suffix?: string;
  description: string;
  className?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, prefix = "", suffix = "", description, className }) => {
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
    <div ref={ref} className={`inline ${className}`}>
      <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-voice-purple to-voice-purple-light">
        {prefix}
        {counted}
        {suffix}
      </span>
      <span className="ml-3 text-voice-cream/80">{description}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-voice-dark to-gray-900" />
      
      <div className="container relative z-10 mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="inline-flex items-center bg-voice-purple/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-voice-purple/30">
            <span className="h-2 w-2 rounded-full bg-voice-purple-light animate-pulse mr-2" />
            <span className="text-sm font-medium text-voice-cream/90">Industry Growth</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Future of Customer Service</h2>
          <p className="text-voice-cream/70 max-w-lg mx-auto">
            AI voice agents are revolutionizing business communications with proven results and measurable outcomes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-voice-cream/90">Market Growth & Potential</h3>
            <p className="flex items-baseline flex-wrap gap-x-3 text-lg">
              The global AI voice agent market is projected to reach
              <StatItem 
                number="47.5" 
                prefix="$" 
                suffix="B"
                description="by 2034"
              />
              with a remarkable annual growth rate of
              <StatItem 
                number="34.8" 
                suffix="%"
                description="year over year"
              />.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-voice-cream/90">Performance & Efficiency</h3>
            <p className="flex items-baseline flex-wrap gap-x-3 text-lg">
              Our AI agents process inquiries
              <StatItem 
                number="500" 
                suffix="%"
                description="faster than traditional systems"
              />
              achieving an impressive
              <StatItem 
                number="73" 
                suffix="%"
                description="instant resolution rate"
              />.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-voice-cream/90">Business Impact</h3>
            <p className="flex items-baseline flex-wrap gap-x-3 text-lg">
              Businesses implementing our solution see an average
              <StatItem 
                number="30" 
                suffix="%"
                description="reduction in operational costs"
              />
              while meeting modern customer expectations—where
              <StatItem 
                number="82" 
                suffix="%"
                description="expect immediate responses"
              />.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-voice-cream/90">Response Time Impact</h3>
            <p className="flex items-baseline flex-wrap gap-x-3 text-lg">
              Quick response is crucial, with
              <StatItem 
                number="98" 
                suffix="%"
                description="conversion rate for 3-minute responses"
              />
              —our AI agents ensure you never miss these opportunities.
            </p>
          </div>
        </div>
        
        <blockquote className="max-w-2xl mx-auto text-center mt-16 p-6 border-l-4 border-voice-purple bg-voice-purple/5 rounded-r-lg">
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
