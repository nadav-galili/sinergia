"use client";

import { useEffect } from "react";

// Extend the global Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      target?: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export interface ConsentState {
  ad_storage: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

export const DEFAULT_CONSENT_STATE: ConsentState = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted', // Usually granted for essential functionality
  personalization_storage: 'denied',
  security_storage: 'granted', // Usually granted for security
};

export const ACCEPTED_CONSENT_STATE: ConsentState = {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
};

export const DENIED_CONSENT_STATE: ConsentState = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
};

class ConsentManager {
  private static instance: ConsentManager;
  private isInitialized = false;

  static getInstance(): ConsentManager {
    if (!ConsentManager.instance) {
      ConsentManager.instance = new ConsentManager();
    }
    return ConsentManager.instance;
  }

  private initializeGtag(): void {
    if (typeof window === 'undefined') return;

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };

    // Set the initial consent mode - BEFORE any tracking tags load
    window.gtag('consent', 'default', {
      ...DEFAULT_CONSENT_STATE,
      wait_for_update: 500, // Wait 500ms for user choice
    });

    this.isInitialized = true;
  }

  initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.initializeGtag();
    
    // Check if user has already made a consent choice
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      const consentState = savedConsent === 'accepted' 
        ? ACCEPTED_CONSENT_STATE 
        : DENIED_CONSENT_STATE;
      
      this.updateConsent(consentState);
    }
  }

  updateConsent(consentState: ConsentState): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    // Update Google Consent Mode
    window.gtag('consent', 'update', consentState);

    // Log for debugging
    console.log('Consent mode updated:', consentState);
  }

  grantConsent(): void {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
    this.updateConsent(ACCEPTED_CONSENT_STATE);
  }

  denyConsent(): void {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
    this.updateConsent(DENIED_CONSENT_STATE);
  }

  revokeConsent(): void {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-timestamp');
    this.updateConsent(DEFAULT_CONSENT_STATE);
  }

  getConsentStatus(): 'accepted' | 'declined' | null {
    if (typeof window === 'undefined') return null;
    
    const consent = localStorage.getItem('cookie-consent');
    return consent as 'accepted' | 'declined' | null;
  }

  hasConsented(): boolean {
    return this.getConsentStatus() === 'accepted';
  }
}

export const consentManager = ConsentManager.getInstance();

// React component to initialize consent manager
export const ConsentManagerProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  useEffect(() => {
    // Initialize consent manager as early as possible
    consentManager.initialize();
  }, []);

  return <>{children}</>;
};