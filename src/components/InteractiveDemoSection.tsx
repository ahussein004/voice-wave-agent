
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Restaurant, Stethoscope, Play, Pause, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import AudioVisualization from "@/components/AudioVisualization";

type Industry = "restaurant" | "car" | "medical";

const InteractiveDemoSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("restaurant");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScenarioOpen, setIsScenarioOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleTabChange = (value: string) => {
    setActiveIndustry(value as Industry);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getIndustryColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "bg-[#F97316]";
      case "car":
        return "bg-[#F97316]";
      case "medical":
        return "bg-[#0EA5E9]";
      default:
        return "bg-voice-purple";
    }
  };

  const getIndustryTextColor = () => {
    switch (activeIndustry) {
      case "restaurant":
        return "text-[#F97316]";
      case "car":
        return "text-[#F97316]";
      case "medical":
        return "text-[#0EA5E9]";
      default:
        return "text-voice-purple";
    }
  };

  const getIndustryData = () => {
    switch (activeIndustry) {
      case "restaurant":
        return {
          icon: <Restaurant className={cn("mr-2", getIndustryTextColor())} />,
          title: "Increase Reservations: 24/7 AI Restaurant Assistant",
          audioTitle: "Handling Multiple Reservations During Rush Hour",
          scenario: "A hungry customer calls during the dinner rush to book a table for four. The AI handles the reservation, upsells a special event, and confirms details - all while your staff focuses on in-restaurant service.",
          keyFeatures: [
            "Seamless Reservations & Modifications",
            "Menu Inquiries & Dietary Accommodations",
            "Special Event Promotion & Upselling",
            "Waitlist Management & Priority Seating"
          ],
          steps: [
            "Restaurant-trained AI answers calls in your brand voice",
            "Reservation details captured & synced to your system",
            "Confirmation sent via SMS with promotional offer"
          ],
          impact: "73% of customers prefer booking online or via AI rather than waiting on hold"
        };
      case "car":
        return {
          icon: <Car className={cn("mr-2", getIndustryTextColor())} />,
          title: "Drive Sales 24/7: AI Automotive Assistant",
          audioTitle: "Converting a Late-Night Vehicle Inquiry Into a Morning Test Drive",
          scenario: "A potential buyer calls after hours inquiring about a specific model. The AI answers detailed questions about features, pricing, and availability, then books a test drive for the following morning - ensuring no opportunity is lost.",
          keyFeatures: [
            "24/7 Vehicle Information & Comparisons",
            "Service Scheduling & Maintenance Updates",
            "Test Drive Appointments & Follow-ups",
            "Trade-In Valuations & Finance Pre-Qualifications"
          ],
          steps: [
            "Automotive-trained AI answers detailed vehicle questions",
            "Customer preferences recorded & matched to inventory",
            "Appointment scheduled & sales team notified with lead details"
          ],
          impact: "62% of automotive inquiries occur outside business hours when traditional dealerships are closed"
        };
      case "medical":
        return {
          icon: <Stethoscope className={cn("mr-2", getIndustryTextColor())} />,
          title: "Transform Patient Care: 24/7 AI Virtual Receptionist",
          audioTitle: "Night-Time Emergency Toothache Handled Flawlessly",
          scenario: "A distressed patient calls with severe tooth pain at 2 AM. The AI assesses urgency, provides immediate care instructions, and schedules the first available emergency appointment - delivering care guidance when it's most needed.",
          keyFeatures: [
            "HIPAA-Compliant Patient Intake & Scheduling",
            "Symptom Assessment & Triage",
            "Insurance Verification & Copay Information",
            "Appointment Reminders & Follow-up Coordination"
          ],
          steps: [
            "Medical-trained AI triages patient needs & urgency",
            "Appointment scheduled based on availability & priority",
            "Care instructions provided & clinical team notified"
          ],
          impact: "89% of patients value immediate response to health concerns, even outside office hours"
        };
      default:
        return {
          icon: <Restaurant className="mr-2 text-voice-purple" />,
          title: "Increase Reservations",
          audioTitle: "Sample Audio",
          scenario: "Default scenario description",
          keyFeatures: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          steps: ["Step 1", "Step 2", "Step 3"],
          impact: "Impact statement"
        };
    }
  };

  const industryData = getIndustryData();

  return (
    <section className="py-24 bg-voice-dark border-t border-voice-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Hear How Our AI Voice Agents Convert Calls Into Revenue
        </h2>

        <Tabs 
          defaultValue="restaurant" 
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-lg mx-auto mb-12 bg-voice-dark/50 border border-voice-purple/20">
            <TabsTrigger 
              value="restaurant"
              className={cn(
                "flex items-center justify-center py-3 data-[state=active]:text-white", 
                activeIndustry === 'restaurant' ? 'data-[state=active]:bg-[#F97316]/90' : ''
              )}
            >
              <Restaurant className="w-5 h-5 mr-2" /> Restaurant
            </TabsTrigger>
            <TabsTrigger 
              value="car"
              className={cn(
                "flex items-center justify-center py-3 data-[state=active]:text-white", 
                activeIndustry === 'car' ? 'data-[state=active]:bg-[#F97316]/90' : ''
              )}
            >
              <Car className="w-5 h-5 mr-2" /> Car Dealership
            </TabsTrigger>
            <TabsTrigger 
              value="medical"
              className={cn(
                "flex items-center justify-center py-3 data-[state=active]:text-white", 
                activeIndustry === 'medical' ? 'data-[state=active]:bg-[#0EA5E9]/90' : ''
              )}
            >
              <Stethoscope className="w-5 h-5 mr-2" /> Medical Clinic
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audio Visualization Section - Left Side */}
            <div className="relative">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-gray-900/50 rounded-3xl border-8 border-gray-800 shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 phone-glow opacity-50"></div>
                
                {/* Phone Mockup Content */}
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm opacity-70">AI Voice Agent</div>
                    <div className="text-sm opacity-70">2:13</div>
                  </div>

                  {/* Call Transcript */}
                  <div className="flex-1 overflow-y-auto mb-4 text-left text-sm">
                    <div className="mb-3 ml-2 p-2 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%]">
                      Hello, this is VoiceWave AI, how can I assist you today?
                    </div>
                    <div className="mb-3 mr-2 p-2 bg-voice-purple/30 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                      Hi, I'd like to know if you have any availability for dinner tonight for 4 people?
                    </div>
                    <div className="mb-3 ml-2 p-2 bg-gray-800/50 rounded-lg rounded-tl-none max-w-[80%]">
                      Absolutely! Let me check our availability for tonight. What time were you looking for?
                    </div>
                    <div className="mb-6 opacity-70 text-xs text-center">
                      <div className="text-center my-2">• AI is checking availability •</div>
                    </div>
                  </div>

                  {/* Audio Visualization at Bottom */}
                  <div className="h-24 relative flex items-center justify-center">
                    <AudioVisualization 
                      isPlaying={isPlaying} 
                      color={activeIndustry === 'restaurant' ? '#F97316' : 
                             activeIndustry === 'car' ? '#F97316' : 
                             activeIndustry === 'medical' ? '#0EA5E9' : 
                             '#9b87f5'} 
                    />
                    
                    {/* Play/Pause Button with Progress Ring */}
                    <button 
                      onClick={togglePlay}
                      className={cn(
                        "absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10",
                        getIndustryColor()
                      )}
                    >
                      {isPlaying ? 
                        <Pause className="text-white" size={20} /> : 
                        <Play className="text-white ml-1" size={20} />
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Analysis Section - Right Side */}
            <div className="text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  {industryData.icon}
                  {industryData.title}
                </h3>
                <h4 className={cn("text-xl mb-4", getIndustryTextColor())}>
                  {industryData.audioTitle}
                </h4>

                <Collapsible
                  open={isScenarioOpen}
                  onOpenChange={setIsScenarioOpen}
                  className="mb-8"
                >
                  <div className="flex items-center mb-2">
                    <CollapsibleTrigger className="flex items-center text-sm text-voice-cream/70 hover:text-voice-cream">
                      {isScenarioOpen ? (
                        <ChevronUp className="mr-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="mr-1 h-4 w-4" />
                      )}
                      {isScenarioOpen ? "Hide Scenario" : "Show Scenario"}
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="text-voice-cream/80 text-sm border-l-2 border-voice-purple/30 pl-4 py-1">
                    {industryData.scenario}
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Key Features That Go Beyond:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industryData.keyFeatures.map((feature, index) => (
                    <Card key={index} className="bg-voice-dark/50 border-voice-purple/20">
                      <CardContent className="p-4">
                        <p className="text-sm">{feature}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">How It Works:</h4>
                <div className="space-y-4">
                  {industryData.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className={cn("flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs", getIndustryColor())}>
                        {index + 1}
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn("p-4 rounded-lg text-center", activeIndustry === 'restaurant' ? 'bg-[#F97316]/10' : activeIndustry === 'car' ? 'bg-[#F97316]/10' : 'bg-[#0EA5E9]/10')}>
                <p className="font-medium">{industryData.impact}</p>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
