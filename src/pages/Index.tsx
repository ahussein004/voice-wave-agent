
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  // Add smooth scroll behavior with improved offset calculation
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
          // Improved offset calculation to prevent text cutoff
          const offset = isMobile ? 140 : 120;
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
  }, [isMobile]);
  
  // Scroll to section on page load if hash is present in URL with improved offset
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      
      if (element) {
        setTimeout(() => {
          // Improved offset to prevent content cutoff
          const offset = isMobile ? 140 : 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 400); // Increased timeout to ensure page is fully loaded
      }
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-voice-dark text-voice-cream overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <InteractiveDemoSection />
      <IntegrationSection />
      <CTASection />
    </div>
  );
};

export default Index;
