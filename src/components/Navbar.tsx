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

  // Handle logo click to always go to top of page
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem("isLogoClick", "true");
    localStorage.removeItem("scrollPosition");
    localStorage.removeItem("scrollTimestamp");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Mark internal navigation for scroll restoration
  const handleInternalNavigation = () => {
    sessionStorage.setItem("isNavigating", "true");
  };
  return <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Home" onClick={handleLogoClick}>
            <img src="/lovable-uploads/3ecba068-9dac-495c-80c4-c1702aacc9a1.png" alt="VoiceSora Logo" className="h-8 w-auto" />
            <h1 className="font-bold text-2xl md:text-3xl text-purple-500"><span className="text-gradient">Voice</span><span className="text-voice-purple">Sora</span></h1>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-base font-semibold text-voice-purple hover:text-voice-purple-light transition-colors focus-visible-ring" aria-label={link.name}>
              {link.name}
            </a>)}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle with improved tap target */}
          <button className="md:hidden text-voice-purple hover:text-voice-purple-light transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-voice-purple rounded-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <a href="#cta-section" className="hidden sm:inline-block" onClick={handleInternalNavigation}>
            <Button className="bg-voice-purple hover:bg-voice-purple-dark text-white font-medium text-base">Book Demo</Button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu with improved accessibility and spacing */}
      <div className={`md:hidden bg-white border-t border-voice-purple/10 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={!isMobileMenuOpen} role="navigation">
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-base text-voice-purple hover:text-voice-purple-light transition-colors py-3 font-medium focus-visible-ring" onClick={() => {
            handleMobileLinkClick();
            handleInternalNavigation();
          }} aria-label={link.name}>
                {link.name}
              </a>)}
            <a href="#cta-section" className="mt-2 sm:hidden" onClick={() => {
            handleMobileLinkClick();
            handleInternalNavigation();
          }} aria-label="Book Demo">
              <Button className="w-full bg-voice-purple hover:bg-voice-purple-dark text-white font-medium py-6">
                Book Demo
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </div>;
};
export default Navbar;