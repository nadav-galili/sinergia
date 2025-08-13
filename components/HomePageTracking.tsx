"use client";

import React, { useEffect } from "react";
import { useAmplitudeTracking } from "@/hooks/useAmplitudeTracking";

interface HomePageTrackingProps {
  children: React.ReactNode;
}

export const HomePageTracking = ({ children }: HomePageTrackingProps) => {
  const { trackPageView } = useAmplitudeTracking();

  useEffect(() => {
    // Track page view when component mounts
    trackPageView("Home", {
      page_type: "landing",
      section: "main",
      timestamp: new Date().toISOString(),
    });
  }, [trackPageView]);

  return <>{children}</>;
};

// Separate component for contact button tracking
export const ContactButtonTracking = () => {
  const { trackButtonClick } = useAmplitudeTracking();

  const handleContactClick = () => {
    trackButtonClick("contact_button", {
      location: "homepage",
      button_type: "cta",
      destination: "/contact",
    });
  };

  return { handleContactClick };
};
