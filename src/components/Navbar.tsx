
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [{
    name: "Features",
    href: "#integrations"
  }, {
    name: "Industries",
    href: "#demo-section"
  }, {
    name: "Contact Us",
    href: "#cta-section"
  }];

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl"><span className="text-gradient">VoiceWave</span><span className="text-voice-purple">AI</span></h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-semibold text-voice-purple hover:text-voice-purple-light transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle */}
          <button 
            className="md:hidden text-voice-purple hover:text-voice-purple-light transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <a href="#cta-section" className="hidden sm:inline-block">
            <Button className="bg-voice-purple hover:bg-voice-purple-dark text-white font-medium text-base">Book Demo</Button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu - Enhanced with smooth transitions */}
      <div 
        className={`md:hidden bg-white border-t border-voice-purple/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base text-voice-purple hover:text-voice-purple-light transition-colors py-2 font-medium" 
                onClick={handleMobileLinkClick}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#cta-section" 
              className="mt-2 sm:hidden"
              onClick={handleMobileLinkClick}
            >
              <Button className="w-full bg-voice-purple hover:bg-voice-purple-dark text-white font-medium">
                Book Demo
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
