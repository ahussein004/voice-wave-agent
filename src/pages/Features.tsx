
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="min-h-screen bg-voice-dark text-voice-cream overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/bg-dots.png')] opacity-10"></div>
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-voice-purple/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 text-sm mb-6 text-indigo-300">
              VoiceSora Features
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Voice AI Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-10">
              Discover how our advanced AI voice agents can transform your business communication and customer experience
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-base px-8 py-6 shadow-lg hover:shadow-indigo-500/25">
                Book Demo
              </Button>
              <Button variant="outline" className="bg-transparent border border-indigo-500/50 text-white hover:bg-white/5 font-medium text-base px-8 py-6">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Core Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-900/95 to-voice-dark relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Core Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered voice solutions deliver exceptional capabilities to help your business thrive
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Voice Conversations",
                description: "Our AI agents engage in fluid, natural-sounding conversations that are indistinguishable from human agents",
                icon: "🔊"
              },
              {
                title: "24/7 Availability",
                description: "Never miss a customer inquiry with round-the-clock service that handles calls even outside business hours",
                icon: "🕒"
              },
              {
                title: "Multi-Language Support",
                description: "Break language barriers with support for over 30 languages and regional dialects",
                icon: "🌎"
              },
              {
                title: "Custom Voice Branding",
                description: "Create a unique voice identity for your business that aligns with your brand personality",
                icon: "🎯"
              },
              {
                title: "Advanced Analytics",
                description: "Gain valuable insights from conversation analysis, sentiment detection, and customer behavior patterns",
                icon: "📊"
              },
              {
                title: "Seamless Integration",
                description: "Easily connect with your existing CRM, helpdesk, and business tools for streamlined operations",
                icon: "🔄"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Advanced Capabilities Section */}
      <section className="py-20 relative bg-voice-dark">
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-indigo-600/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-l from-voice-purple/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Go beyond basic voice assistance with our cutting-edge AI technology
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                title: "Contextual Understanding",
                description: "Our AI agents maintain context throughout conversations, remembering previous interactions and adapting responses accordingly. This creates more meaningful and efficient customer exchanges, eliminating the frustration of repeating information.",
                items: ["Long-term memory retention", "Conversation history awareness", "Dynamic response adaptation"]
              },
              {
                title: "Emotional Intelligence",
                description: "VoiceSora agents can detect and respond appropriately to customer emotions, adjusting tone and approach based on sentiment analysis. This emotional awareness creates more empathetic interactions that improve customer satisfaction.",
                items: ["Real-time sentiment detection", "Adaptive tone adjustment", "Empathetic response generation"]
              },
              {
                title: "Smart Call Routing & Escalation",
                description: "Our system intelligently routes calls based on intent, urgency, and complexity. When necessary, it can seamlessly escalate to human agents with complete context transfer, ensuring no information is lost in the handover.",
                items: ["Intent-based routing", "Urgency detection", "Seamless human handoff"]
              }
            ].map((capability, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-xl border border-indigo-500/30 backdrop-blur-sm h-full">
                    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300">{capability.description}</p>
                  </div>
                </div>
                <div className="md:w-2/3 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
                  <h4 className="text-lg font-medium mb-4 text-white">Key Benefits:</h4>
                  <div className="space-y-3">
                    {capability.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-indigo-600/20 p-2 rounded-full mt-0.5 flex-shrink-0">
                          <Check size={16} className="text-indigo-400" />
                        </div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-voice-dark border-t border-indigo-500/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a demo today and see how VoiceSora can revolutionize your customer communications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-base px-8 py-6 shadow-lg hover:shadow-indigo-500/25">
                Book Your Demo <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
