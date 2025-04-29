
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
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center pt-16 px-4 bg-white">
      {/* Background with gradient pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGY4ZjgiPjwvcmVjdD4KPC9zdmc+')] opacity-40"></div>
      
      {/* Wave pattern decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
            <path fill="#f8f8f8" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,176C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
            <path fill="#f8f8f8" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,208C672,213,768,171,864,170.7C960,171,1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content container */}
      <div className="container z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16">
        <div className="flex flex-col max-w-2xl">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-orange-200">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse mr-2"></span>
            <span className="text-sm font-medium text-gray-700">Industry-leading AI Voice Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance text-black">
            The <span className="text-orange-500">Real</span> World Portal
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Transform your customer service with 24/7 AI voice assistants that book appointments, answer questions, and drive revenue while you sleep
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6">
              JOIN NOW
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 font-medium">
              <Headphones className="mr-2 h-4 w-4" /> Hear It In Action
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
              ))}
            </div>
            <p><span className="text-orange-500 font-semibold">278,254+</span> have already taken advantage of this opportunity.</p>
          </div>
        </div>
        
        <div className="relative h-[600px] w-full max-w-md">
          {/* Phone mockup with animated sound waves */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="phone-glow opacity-50 bg-orange-500/20"></div>
            
            <div className="relative border-8 border-gray-800 w-[250px] h-[500px] rounded-[40px] overflow-hidden shadow-2xl bg-white">
              {/* Phone screen */}
              <div className="absolute inset-0 bg-black/90 p-4">
                <div className="h-full w-full flex flex-col">
                  {/* Phone status bar */}
                  <div className="flex justify-between mb-4 text-xs text-white">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                      <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                      <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Call interface */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <img 
                        src="/lovable-uploads/a265555e-1ef0-4e77-994f-caab3a1432a9.png" 
                        alt="Real World Logo" 
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-300">Welcome to</span>
                    <h3 className="font-bold text-xl mb-2 text-white">The Real World</h3>
                    
                    {/* Animated voice waves */}
                    <div className="my-6 flex items-end justify-center h-12 space-x-1">
                      <div className="wave-animation h-4 bg-orange-400"></div>
                      <div className="wave-animation h-6 bg-orange-400"></div>
                      <div className="wave-animation h-10 bg-orange-400"></div>
                      <div className="wave-animation h-8 bg-orange-400"></div>
                      <div className="wave-animation h-5 bg-orange-400"></div>
                    </div>
                    
                    <p className="text-sm text-gray-300 text-center mt-2 px-4">
                      "How may I help you today?"
                    </p>
                  </div>
                  
                  {/* Call buttons */}
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
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
              <div className="absolute w-[300px] h-[300px] border border-orange-300/30 rounded-full animate-ping opacity-25"></div>
              <div className="absolute w-[350px] h-[350px] border border-orange-300/20 rounded-full animate-ping opacity-15" style={{ animationDelay: '300ms' }}></div>
              <div className="absolute w-[400px] h-[400px] border border-orange-300/10 rounded-full animate-ping opacity-10" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Badge for 24/7 support */}
      <div className="absolute bottom-8 right-8 bg-orange-100 py-2 px-4 rounded-full flex items-center border border-orange-200 animate-pulse-slow">
        <span className="text-sm font-medium text-gray-700">24/7 Multilingual Support</span>
      </div>
    </section>
  );
};

export default HeroSection;
