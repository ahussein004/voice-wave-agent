import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

const Index = () => {
  const isMobile = useIsMobile();
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const location = useLocation();
  
  // Enhanced scroll handling for direct URL hash navigation
  useEffect(() => {
    // Handle direct URL hash navigation (improved timing and offset)
    const handleHashNavigation = () => {
      const hash = location.hash;
      
      if (hash) {
        // Short delay to ensure DOM is fully loaded
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Improved offset calculation based on device and navbar height
            const offset = isMobile ? 140 : 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Store the section we've navigated to
            localStorage.setItem("lastSection", hash);
          }
        }, 200); // Shorter timeout for faster response
      }
    };
    
    // Force scroll to top on initial page load or refresh if no hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    
    // Handle hash navigation
    handleHashNavigation();
    
    // Also trigger scroll behavior when hash changes without full page reload
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location.hash, isMobile]);
  
  // Rest of the existing effect for saving/restoring scroll
  useEffect(() => {
    // Check if this is an initial page load
    const isInitialLoad = !sessionStorage.getItem("hasVisited");
    
    if (isInitialLoad) {
      // Mark as visited now
      sessionStorage.setItem("hasVisited", "true");
      // Clear any saved scroll positions that might cause jumping
      localStorage.removeItem("scrollPosition");
      localStorage.removeItem("scrollTimestamp");
      
      // If there's a hash on initial load, let the other effect handle it
      if (!location.hash) {
        return;
      }
    }
    
    // Only restore scroll for explicit user navigation between pages
    // NOT on initial page load, refresh, or logo click
    const isNavigationReturn = sessionStorage.getItem("isNavigating") === "true";
    const isLogoClick = sessionStorage.getItem("isLogoClick") === "true";
    
    // Reset the logo click marker if it exists
    if (isLogoClick) {
      sessionStorage.removeItem("isLogoClick");
      return;
    }
    
    if (isNavigationReturn && !location.hash) {
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
          }, 200); // Faster restoration
        }
      }
      
      // Reset the navigation flag after handling it
      sessionStorage.setItem("isNavigating", "false");
    }
    
    // Set navigation flag when links are clicked
    const handleLinkClick = () => {
      sessionStorage.setItem("isNavigating", "true");
    };
    
    // Attach to all internal links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });
    
    // Save scroll position periodically
    const saveScrollInterval = setInterval(() => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only save non-zero scroll positions
      if (currentPosition > 0) {
        localStorage.setItem("scrollPosition", currentPosition.toString());
        localStorage.setItem("scrollTimestamp", Date.now().toString());
      }
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
      document.querySelectorAll('a[href^="/"]').forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [location.hash, isMobile]);
  
  // Improve anchor link click handling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.getAttribute('href')?.startsWith('#')) {
        const href = closestAnchor.getAttribute('href');
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
          
          // Update URL hash without full page reload
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true); // Use capture for better event handling
    
    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
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
