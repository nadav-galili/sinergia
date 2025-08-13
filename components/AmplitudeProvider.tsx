"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { init, track } from "@amplitude/analytics-browser";

interface AmplitudeContextType {
  track: typeof track;
}

const AmplitudeContext = createContext<AmplitudeContextType | undefined>(
  undefined
);

interface AmplitudeProviderProps {
  children: ReactNode;
}

export const AmplitudeProvider = ({ children }: AmplitudeProviderProps) => {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

    if (!apiKey) {
      console.warn(
        "Amplitude API key not found. Analytics will not be initialized."
      );
      return;
    }

    // Initialize Amplitude with minimal tracking
    init(apiKey, {
      defaultTracking: {
        sessions: false, // Disable automatic session tracking
        pageViews: false, // Disable automatic page view tracking
        formInteractions: false, // Disable automatic form tracking
        fileDownloads: false, // Disable automatic download tracking
      },
    });

    console.log("Amplitude analytics initialized successfully");
  }, []);

  const value = {
    track,
  };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export const useAmplitude = (): AmplitudeContextType => {
  const context = useContext(AmplitudeContext);

  if (context === undefined) {
    throw new Error("useAmplitude must be used within an AmplitudeProvider");
  }

  return context;
};
