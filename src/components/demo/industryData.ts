
import { Utensils, Car, Stethoscope } from "lucide-react";
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
