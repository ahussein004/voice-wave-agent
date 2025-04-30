
export interface Message {
  sender: "ai" | "user" | "system";
  text: string;
}

export const getConversationMessages = (activeIndustry: "restaurant" | "car" | "medical"): Message[] => {
  switch (activeIndustry) {
    case "restaurant":
      return [
        { sender: "ai", text: "Thank you for calling Savarelle. How may I assist you today?" },
        { sender: "user", text: "Hi, I'd like to make a reservation for this Saturday at 8 PM for 4 people." },
        { sender: "ai", text: "Certainly! I'd be happy to help with that. Would you prefer indoor seating or our garden patio?" },
        { sender: "user", text: "The garden patio would be great. It's my friend's birthday." },
        { sender: "system", text: "Checking availability for garden patio..." }
      ];
    case "car":
      return [
        { sender: "ai", text: "Welcome to Westgate Luxury Motors. How can I help you today?" },
        { sender: "user", text: "Hi, I saw a Porsche Cayenne on your website and wanted to know if it's still available." },
        { sender: "ai", text: "Yes, we do have the Porsche Cayenne in stock. Would you like to schedule a test drive or learn more about financing options?" },
        { sender: "user", text: "I'm interested in both. What kind of financing rates do you offer?" },
        { sender: "system", text: "Retrieving current financing offers..." }
      ];
    case "medical":
      return [
        { sender: "ai", text: "Thank you for calling Trinity Health and Wellness. How may I assist you today?" },
        { sender: "user", text: "Hi, I'm having a stomach ache and would like to see a doctor today if possible." },
        { sender: "ai", text: "I'm sorry to hear that. I'd be happy to check for any available appointments today. Are you a current patient with us?" },
        { sender: "user", text: "No, this would be my first visit." },
        { sender: "system", text: "Checking same-day availability..." }
      ];
    default:
      return [];
  }
};

export const getIndustryTitle = (activeIndustry: "restaurant" | "car" | "medical"): string => {
  switch (activeIndustry) {
    case "restaurant":
      return "Restaurant Reservation";
    case "car":
      return "Car Dealership Inquiry";
    case "medical":
      return "Healthcare Appointment";
    default:
      return "AI Voice Agent";
  }
};

export const getCtaText = (activeIndustry: "restaurant" | "car" | "medical"): string => {
  switch (activeIndustry) {
    case "restaurant":
      return "See how our AI handles restaurant reservations";
    case "car":
      return "See how our AI handles car sales inquiries";
    case "medical":
      return "See how our AI handles medical appointments";
    default:
      return "Listen to our AI voice agent in action";
  }
};
