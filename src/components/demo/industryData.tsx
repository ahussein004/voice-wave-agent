
import { Utensils, Car, Stethoscope, Calendar, Mail, Bell, FileText, Users, MessageSquare } from "lucide-react";
import React from "react";

export interface IndustryDataType {
  icon: React.ReactNode;
  title: string;
  audioTitle: string;
  scenario: string;
  keyFeatures: string[];
  steps: string[];
  impact: string;
}

export interface WorkflowType {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: string;
}

export interface IndustryIntegrationType {
  title: string;
  description: string;
  workflows: WorkflowType[];
}

export const getIndustryData = (activeIndustry: "restaurant" | "car" | "medical"): IndustryDataType => {
  switch (activeIndustry) {
    case "restaurant":
      return {
        icon: <Utensils className="mr-2 text-[#F97316]" />,
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
        icon: <Car className="mr-2 text-[#F97316]" />,
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
        icon: <Stethoscope className="mr-2 text-[#0EA5E9]" />,
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
        icon: <Utensils className="mr-2 text-voice-purple" />,
        title: "Increase Reservations",
        audioTitle: "Sample Audio",
        scenario: "Default scenario description",
        keyFeatures: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        steps: ["Step 1", "Step 2", "Step 3"],
        impact: "Impact statement"
      };
  }
};

export const getIndustryIntegrations = (activeIndustry: "restaurant" | "car" | "medical"): IndustryIntegrationType => {
  switch (activeIndustry) {
    case "restaurant":
      return {
        title: "Restaurant Integration Suite",
        description: "Seamlessly connect your AI Voice Agent with your restaurant management systems to automate reservation processes and enhance customer service.",
        workflows: [
          {
            title: "Reservation System Update",
            description: "Automatically add bookings to your OpenTable, Resy, or custom POS system",
            icon: <Calendar className="h-5 w-5 text-[#F97316]" />,
            status: "Reservation for 4 added to system"
          },
          {
            title: "Customer SMS Confirmation",
            description: "Send branded confirmation texts with special offers and directions",
            icon: <MessageSquare className="h-5 w-5 text-[#F97316]" />,
            status: "Confirmation SMS sent to +1 (555) 123-4567"
          },
          {
            title: "Staff Notification",
            description: "Alert hosts and kitchen staff about special requests and VIP guests",
            icon: <Bell className="h-5 w-5 text-[#F97316]" />,
            status: "Birthday celebration prepped for table #12"
          },
          {
            title: "CRM Update",
            description: "Add new customer data or update existing profiles with preferences",
            icon: <Users className="h-5 w-5 text-[#F97316]" />,
            status: "Customer profile updated with preferences"
          }
        ]
      };
    case "car":
      return {
        title: "Automotive Dealership Integration",
        description: "Connect your AI Voice Agent with your dealership management system to capture leads, schedule appointments, and enhance the sales process.",
        workflows: [
          {
            title: "Lead Management System",
            description: "Automatically create new leads in your CRM with detailed vehicle interests",
            icon: <FileText className="h-5 w-5 text-[#F97316]" />,
            status: "New lead created in CRM system"
          },
          {
            title: "Test Drive Scheduler",
            description: "Book appointments directly into salesperson calendars",
            icon: <Calendar className="h-5 w-5 text-[#F97316]" />,
            status: "Test drive scheduled for 2:00 PM tomorrow"
          },
          {
            title: "Sales Rep Notification",
            description: "Instantly alert available sales staff about new appointments",
            icon: <Bell className="h-5 w-5 text-[#F97316]" />,
            status: "Notification sent to John (Sales Rep)"
          },
          {
            title: "Follow-up Email",
            description: "Send personalized information about vehicles of interest",
            icon: <Mail className="h-5 w-5 text-[#F97316]" />,
            status: "Vehicle details email sent to prospect"
          }
        ]
      };
    case "medical":
      return {
        title: "Medical Practice Integration",
        description: "Connect your AI Voice Agent with your practice management software to streamline appointment scheduling and improve patient care.",
        workflows: [
          {
            title: "EHR System Update",
            description: "Create appointments in your electronic health records system",
            icon: <FileText className="h-5 w-5 text-[#0EA5E9]" />,
            status: "Appointment added to EHR system"
          },
          {
            title: "Patient Portal Update",
            description: "Update patient portal with new appointment information",
            icon: <Users className="h-5 w-5 text-[#0EA5E9]" />,
            status: "Patient portal updated with details"
          },
          {
            title: "Practitioner Alert",
            description: "Send urgent case information to medical staff",
            icon: <Bell className="h-5 w-5 text-[#0EA5E9]" />,
            status: "Urgent case details sent to Dr. Smith"
          },
          {
            title: "Patient Reminder",
            description: "Schedule automated appointment reminders",
            icon: <Calendar className="h-5 w-5 text-[#0EA5E9]" />,
            status: "Reminder scheduled for 24h before appt"
          }
        ]
      };
    default:
      return {
        title: "Default Integration",
        description: "Connect your systems and automate workflows.",
        workflows: []
      };
  }
};
