
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  
  // Save and restore last scroll position
  useEffect(() => {
    // Restore scroll position
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    const savedTimestamp = localStorage.getItem("scrollTimestamp");
    
    // Only restore if saved recently (within 30 minutes)
    if (savedScrollPosition && savedTimestamp) {
      const now = Date.now();
      const savedTime = parseInt(savedTimestamp, 10);
      const thirtyMinutesInMs = 30 * 60 * 1000;
      
      if (now - savedTime < thirtyMinutesInMs) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: "auto"
          });
        }, 300);
      }
    }
    
    // Save scroll position periodically
    const saveScrollInterval = setInterval(() => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      localStorage.setItem("scrollPosition", currentPosition.toString());
      localStorage.setItem("scrollTimestamp", Date.now().toString());
    }, 2000);
    
    // Save scroll on page unload
    const handleBeforeUnload = () => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      localStorage.setItem("scrollPosition", currentPosition.toString());
      localStorage.setItem("scrollTimestamp", Date.now().toString());
    };
    
    window.addEventListener("beforeunload", handleBeforeUnload);
    
    return () => {
      clearInterval(saveScrollInterval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
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

          // Save current position before jumping to have context
          setLastScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
          localStorage.setItem("lastSection", href);

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
    // First check localStorage for last visited section
    const lastSection = localStorage.getItem("lastSection");
    
    // Then check URL hash (prioritize URL hash over localStorage)
    const targetHash = window.location.hash || lastSection;
    
    if (targetHash) {
      const element = document.querySelector(targetHash);
      
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
