
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href) return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          // Add offset to account for fixed navbar
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Scroll to section on page load if hash is present in URL
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      
      if (element) {
        setTimeout(() => {
          // Add offset to account for fixed navbar
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-voice-dark text-voice-cream overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <IntegrationSection />
      <InteractiveDemoSection />
      <CTASection />
    </div>
  );
};

export default Index;
