
import React, { useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import { Headphones } from "lucide-react";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create particles
    const container = particlesRef.current;
    const particleCount = 20;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle-flow';
      
      // Randomize position and animation
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      
      container.appendChild(particle);
    }
  }, []);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center pt-16 px-4">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-pattern animate-gradient-x"></div>
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content container */}
      <div className="container z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16">
        <div className="flex flex-col max-w-2xl">
          <div className="inline-flex items-center bg-voice-purple/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-voice-purple/30">
            <span className="h-2 w-2 rounded-full bg-voice-purple-light animate-pulse mr-2"></span>
            <span className="text-sm font-medium text-voice-cream/90">Industry-leading AI Voice Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Never Miss Another Call With <span className="text-gradient">Industry-Leading AI Voice Agents</span>
          </h1>
          
          <p className="text-lg text-voice-cream/80 mb-8 max-w-xl">
            Transform your customer service with 24/7 AI voice assistants that book appointments, answer questions, and drive revenue while you sleep
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-voice-purple hover:bg-voice-purple-dark text-white font-medium px-6">
              Book a Free Demo
            </Button>
            <Button size="lg" variant="outline" className="border-voice-purple text-voice-purple-light hover:bg-voice-purple/10 font-medium">
              <Headphones className="mr-2 h-4 w-4" /> Hear It In Action
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-voice-cream/60">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-voice-dark flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
              ))}
            </div>
            <p>Trusted by <span className="text-voice-cream">2,400+</span> businesses</p>
          </div>
        </div>
        
        <div className="relative h-[600px] w-full max-w-md">
          {/* Phone mockup with animated sound waves */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="phone-glow"></div>
            
            <div className="relative bg-gray-900 w-[250px] h-[500px] rounded-[40px] border-4 border-gray-800 overflow-hidden shadow-2xl">
              {/* Phone screen */}
              <div className="absolute inset-0 bg-black/70 p-4">
                <div className="h-full w-full flex flex-col">
                  {/* Phone status bar */}
                  <div className="flex justify-between mb-4 text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-3 bg-voice-purple-light/80 rounded-sm"></div>
                      <div className="w-4 h-3 bg-voice-purple-light/80 rounded-sm"></div>
                      <div className="w-4 h-3 bg-voice-purple-light/80 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Call interface */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <span className="text-sm text-voice-cream/70">AI Voice Agent - Active Call</span>
                    <h3 className="font-bold text-xl mb-2 text-voice-cream">VoiceWave AI</h3>
                    
                    {/* Animated voice waves */}
                    <div className="my-6 flex items-end justify-center h-12 space-x-1">
                      <div className="wave-animation h-4"></div>
                      <div className="wave-animation h-6"></div>
                      <div className="wave-animation h-10"></div>
                      <div className="wave-animation h-8"></div>
                      <div className="wave-animation h-5"></div>
                    </div>
                    
                    <p className="text-sm text-voice-cream/70 text-center mt-2 px-4">
                      "How may I help you schedule your appointment today?"
                    </p>
                  </div>
                  
                  {/* Call buttons */}
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-voice-purple flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Circular pulse animations */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[300px] h-[300px] border border-voice-purple-light/30 rounded-full animate-ping opacity-25"></div>
              <div className="absolute w-[350px] h-[350px] border border-voice-purple-light/20 rounded-full animate-ping opacity-15" style={{ animationDelay: '300ms' }}></div>
              <div className="absolute w-[400px] h-[400px] border border-voice-purple-light/10 rounded-full animate-ping opacity-10" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Badge for 24/7 support */}
      <div className="absolute bottom-8 right-8 bg-voice-purple/20 backdrop-blur-sm py-2 px-4 rounded-full flex items-center border border-voice-purple/30 animate-pulse-slow">
        <span className="text-sm font-medium text-voice-cream">24/7 Multilingual Support</span>
      </div>
    </section>
  );
};

export default HeroSection;
