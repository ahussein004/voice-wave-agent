
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
  
  // Save and restore last scroll position with improved behavior
  useEffect(() => {
    // Only restore scroll if there's a specific hash in the URL
    // This prevents auto-scrolling on fresh page loads
    const targetHash = window.location.hash;
    
    if (targetHash) {
      // Handle anchor links when URL has a hash
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          // Improved offset to prevent content cutoff
          const offset = isMobile ? 140 : 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 400);
    } else {
      // If no hash in URL, check if coming back from a different page
      const returnVisit = sessionStorage.getItem("returnVisit");
      if (returnVisit === "true") {
        // Restore scroll position only for return visits
        const savedScrollPosition = localStorage.getItem("scrollPosition");
        const savedTimestamp = localStorage.getItem("scrollTimestamp");
        
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
      } else {
        // First visit, scroll to top and set flag for future visits
        window.scrollTo(0, 0);
        sessionStorage.setItem("returnVisit", "true");
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
  }, [isMobile]);
  
  // Improve smooth scrolling behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href) return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          // Improved offset calculation with better mobile support
          const offset = isMobile ? 140 : 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          // Save current position before jumping
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
