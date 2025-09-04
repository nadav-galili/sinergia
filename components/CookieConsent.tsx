"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { consentManager } from "./ConsentManager";

interface CookieConsentProps {
  onConsentChange?: (hasConsented: boolean) => void;
}

export const CookieConsent = ({ onConsentChange }: CookieConsentProps) => {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = consentManager.getConsentStatus();
    if (!consentStatus) {
      setShowBanner(true);
    }
    setIsLoading(false);
  }, []);

  const handleConsent = (accepted: boolean) => {
    if (accepted) {
      consentManager.grantConsent();
    } else {
      consentManager.denyConsent();
    }
    
    setShowBanner(false);
    onConsentChange?.(accepted);

    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('consent-changed', { 
      detail: { accepted } 
    }));
  };

  if (isLoading || !showBanner) {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      שימוש בעוגיות באתר
                    </h3>

                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-2">
                      <p>
                        אנחנו משתמשים בעוגיות כדי לשפר את החוויה שלך באתר ולאסוף
                        נתונים אנליטיים שעוזרים לנו להבין איך המשתמשים שלנו
                        משתמשים בשירותים שלנו.
                      </p>
                      <p>העוגיות משמשות אותנו ל:</p>
                      <ul className="list-disc list-inside mr-4 space-y-1 text-gray-500 dark:text-gray-400">
                        <li>ניתוח שימוש באתר (Amplitude Analytics)</li>
                        <li>שיפור ביצועי האתר</li>
                        <li>מתן חוויה מותאמת אישית</li>
                      </ul>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        אתה יכול לבחור לאשר או לדחות את השימוש בעוגיות.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleConsent(true)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm md:text-base">
                    אשר שימוש בעוגיות
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleConsent(false)}
                    className="flex-1 sm:flex-initial bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm md:text-base">
                    דחה עוגיות
                  </motion.button>
                </div>

                {/* Privacy Link */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    למידע נוסף על מדיניות הפרטיות שלנו,{" "}
                    <Link 
                      href="/privacy-policy" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      לחץ כאן
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Hook to check if user has consented to cookies
export const useCookieConsent = () => {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);

  useEffect(() => {
    const consentStatus = consentManager.getConsentStatus();
    setHasConsented(consentStatus === "accepted");

    // Listen for consent changes
    const handleConsentChange = () => {
      const newStatus = consentManager.getConsentStatus();
      setHasConsented(newStatus === "accepted");
    };

    window.addEventListener('consent-changed', handleConsentChange);
    return () => window.removeEventListener('consent-changed', handleConsentChange);
  }, []);

  return {
    hasConsented,
    hasDeclined: hasConsented === false,
    isLoading: hasConsented === null,
    revokeConsent: () => {
      consentManager.revokeConsent();
      window.dispatchEvent(new CustomEvent('consent-changed'));
    },
  };
};
