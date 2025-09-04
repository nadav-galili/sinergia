"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { init, track } from "@amplitude/analytics-browser";
import type { BaseEvent, EventOptions } from "@amplitude/analytics-types";
import { consentManager } from "./ConsentManager";

type TrackFunction = (
  eventInput: string | BaseEvent,
  eventProperties?: Record<string, unknown>,
  eventOptions?: EventOptions
) => {
  promise: Promise<{
    event: {
      event_type: string | BaseEvent;
    };
    code: number;
    message: string;
  }>;
} | ReturnType<typeof track>;

interface AmplitudeContextType {
  track: TrackFunction;
  isAnalyticsEnabled: boolean;
}

const AmplitudeContext = createContext<AmplitudeContextType | undefined>(
  undefined
);

interface AmplitudeProviderProps {
  children: ReactNode;
}

export const AmplitudeProvider = ({ children }: AmplitudeProviderProps) => {
  const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check cookie consent using the consent manager
    const checkConsent = () => {
      const hasConsented = consentManager.hasConsented();
      setIsAnalyticsEnabled(hasConsented);

      // Initialize Amplitude only once when consent is granted
      if (hasConsented && !isInitialized) {
        const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

        if (!apiKey) {
          console.warn(
            "Amplitude API key not found. Analytics will not be initialized."
          );
          return;
        }

        // Initialize Amplitude with minimal tracking - respecting consent mode
        init(apiKey, {
          defaultTracking: {
            sessions: false, // Disable automatic session tracking
            pageViews: false, // Disable automatic page view tracking
            formInteractions: false, // Disable automatic form tracking
            fileDownloads: false, // Disable automatic download tracking
          },
          // Respect consent mode settings
          optOut: false, // We handle opt-out via consent mode
        });

        setIsInitialized(true);
        console.log("Amplitude analytics initialized successfully with consent");
      }
    };

    // Check initial consent
    checkConsent();

    // Listen for storage changes (when consent is updated)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        checkConsent();
      }
    };

    // Listen for custom consent events
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("consent-changed", handleConsentChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("consent-changed", handleConsentChange);
    };
  }, [isInitialized]);

  // Wrap track function to only execute if analytics is enabled
  const conditionalTrack: TrackFunction = (
    eventInput: string | BaseEvent,
    eventProperties?: Record<string, unknown>,
    eventOptions?: EventOptions
  ) => {
    if (isAnalyticsEnabled) {
      return track(eventInput, eventProperties, eventOptions);
    } else {
      console.log("Analytics tracking disabled - event not sent:", eventInput, eventProperties);
      // Return a mock successful response
      return {
        promise: Promise.resolve({
          event: {
            event_type: eventInput,
          },
          code: 200,
          message: "Event tracking disabled due to cookie consent"
        })
      };
    }
  };

  const value = {
    track: conditionalTrack,
    isAnalyticsEnabled,
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
