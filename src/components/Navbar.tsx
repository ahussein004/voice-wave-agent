import { Button } from "./ui/button";
const Navbar = () => {
  return <div className="fixed top-0 left-0 w-full z-50 bg-voice-dark/80 backdrop-blur-md border-b border-voice-purple/20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl text-gradient">VoiceWave<span className="text-white">AI</span></h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-voice-cream/70 hover:text-voice-purple-light transition-colors">Features</a>
          <a href="#industries" className="text-sm text-voice-cream/70 hover:text-voice-purple-light transition-colors">Industries</a>
          <a href="#pricing" className="text-sm text-voice-cream/70 hover:text-voice-purple-light transition-colors">Pricing</a>
          
        </nav>
        
        <div className="flex items-center space-x-4">
          
          <Button className="bg-voice-purple hover:bg-voice-purple-dark text-white">Contact Sales</Button>
        </div>
      </div>
    </div>;
};
export default Navbar;