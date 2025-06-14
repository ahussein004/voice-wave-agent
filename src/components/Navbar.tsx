import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    {
      name: "Features",
      href: "/#demo-section"
    }, 
    {
      name: "Industries",
      href: "/#demo-section"
    }, 
    {
      name: "Contact Us",
      href: "/#cta-section"
    }
  ];

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle logo click to always go to top of page
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      sessionStorage.setItem("isLogoClick", "true");
      localStorage.removeItem("scrollPosition");
      localStorage.removeItem("scrollTimestamp");
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  // Improved internal navigation for scroll restoration and smooth scrolling
  const handleInternalNavigation = (hash: string) => {
    sessionStorage.setItem("isNavigating", "true");
    
    // If we're already on the homepage, handle smooth scrolling manually
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        // Close mobile menu if open
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
        
        // Calculate scroll position with offset
        const offset = window.innerWidth <= 768 ? 140 : 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        // Smooth scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL without reload
        window.history.pushState(null, '', hash);
        
        return true; // Indicate we handled it
      }
    }
    return false; // Not handled
  };
  
  // Check if the link is an internal page link
  const isInternalLink = (href: string) => href.startsWith('/#');
  
  return (
    <motion.div 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{
        y: -100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Home" onClick={handleLogoClick}>
            <motion.h1 
              className="font-bold text-2xl md:text-3xl" 
              whileHover={{
                scale: 1.03
              }} 
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Voice</span>
              <span className="text-white">Sora</span>
            </motion.h1>
          </Link>
        </div>
        
        {/* Desktop Navigation with improved anchor link handling */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            isInternalLink(link.href) ? (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-white/80 hover:text-white transition-colors focus-visible-ring relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300" 
                aria-label={link.name} 
                whileHover={{
                  y: -2
                }} 
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
                onClick={(e) => {
                  e.preventDefault();
                  const hash = link.href.substring(1); // Remove the leading /
                  handleInternalNavigation(hash);
                }}
              >
                {link.name}
              </motion.a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-base font-medium text-white/80 hover:text-white transition-colors focus-visible-ring relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300" 
                aria-label={link.name}
              >
                <motion.span
                  whileHover={{
                    y: -2
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                  className="inline-block"
                >
                  {link.name}
                </motion.span>
              </Link>
            )
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle with improved tap target */}
          <motion.button 
            className="md:hidden text-white hover:text-indigo-300 transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle mobile menu" 
            aria-expanded={isMobileMenuOpen} 
            whileTap={{
              scale: 0.95
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          
          <motion.div 
            initial={{
              opacity: 0,
              x: 20
            }} 
            animate={{
              opacity: 1,
              x: 0
            }} 
            transition={{
              delay: 0.3,
              duration: 0.5
            }}
          >
            <a 
              href="/#cta-section" 
              className="hidden sm:inline-block" 
              onClick={(e) => {
                e.preventDefault();
                handleInternalNavigation("#cta-section");
              }}
            >
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-base shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 border-0">
                Book Demo
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu with improved anchor link handling */}
      <div 
        className={`md:hidden bg-gradient-to-b from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64 opacity-100 border-t border-indigo-500/10" : "max-h-0 opacity-0"
        }`} 
        aria-hidden={!isMobileMenuOpen} 
        role="navigation"
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              isInternalLink(link.href) ? (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  className="text-base text-white/80 hover:text-white transition-colors py-3 font-medium focus-visible-ring border-b border-indigo-500/10 pb-3" 
                  onClick={(e) => {
                    e.preventDefault();
                    const hash = link.href.substring(1); // Remove the leading /
                    handleMobileLinkClick();
                    handleInternalNavigation(hash);
                  }} 
                  aria-label={link.name} 
                  whileHover={{
                    x: 5
                  }} 
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  {link.name}
                </motion.a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base text-white/80 hover:text-white transition-colors py-3 font-medium focus-visible-ring border-b border-indigo-500/10 pb-3"
                  onClick={handleMobileLinkClick}
                  aria-label={link.name}
                >
                  <motion.span
                    whileHover={{
                      x: 5
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }}
                    className="inline-block"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              )
            ))}
            <motion.a 
              href="/#cta-section" 
              className="mt-2 sm:hidden" 
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick();
                handleInternalNavigation("#cta-section");
              }} 
              aria-label="Book Demo" 
              whileHover={{
                scale: 1.03
              }} 
              whileTap={{
                scale: 0.98
              }}
            >
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-6 shadow-lg transition-all duration-300">
                Book Demo
              </Button>
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
