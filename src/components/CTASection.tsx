
import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Shield, Clock, Building } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { label: "Restaurant", value: "restaurant" },
  { label: "Car Dealership", value: "car" },
  { label: "Medical Clinic", value: "medical" }
];

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-voice-dark to-voice-dark/95 border-t border-voice-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Converting Calls Into Revenue Today
          </motion.h2>
          <motion.p 
            className="text-lg text-voice-cream/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book your free demo to hear how our AI voice agents can transform your business
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div 
            className="bg-voice-dark/50 p-8 rounded-xl border border-voice-purple/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-voice-dark/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input id="business" placeholder="Company name" className="bg-voice-dark/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select>
                  <SelectTrigger className="bg-voice-dark/50">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" className="bg-voice-dark/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" className="bg-voice-dark/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-time">Preferred Contact Time</Label>
                <Input 
                  id="contact-time" 
                  type="text" 
                  placeholder="e.g. Weekday afternoons"
                  className="bg-voice-dark/50"
                />
              </div>

              <Button 
                className="w-full bg-voice-purple hover:bg-voice-purple-dark text-white text-lg py-6"
                size="lg"
              >
                Book My Free Demo
              </Button>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                  <Shield className="w-6 h-6 text-voice-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-voice-cream">Enterprise-Grade Security</h3>
                  <p className="text-voice-cream/70">Your data is protected with bank-level encryption</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                  <Clock className="w-6 h-6 text-voice-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-voice-cream">Fast Setup</h3>
                  <p className="text-voice-cream/70">Get up and running in under 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-voice-purple/10 border border-voice-purple/20">
                  <Building className="w-6 h-6 text-voice-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-voice-cream">No Obligation</h3>
                  <p className="text-voice-cream/70">Try without any long-term commitments</p>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="mt-12 pt-12 border-t border-voice-purple/10">
              <p className="text-sm text-voice-cream/60 mb-6">Trusted by leading businesses:</p>
              <div className="grid grid-cols-3 gap-6 opacity-50">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="h-12 bg-voice-cream/5 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
