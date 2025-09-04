"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Settings, Cookie, Shield, BarChart3 } from "lucide-react";
import { consentManager } from "./ConsentManager";

interface ConsentPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsentPreferences = ({ isOpen, onClose }: ConsentPreferencesProps) => {
  const [currentConsent, setCurrentConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    setCurrentConsent(consentManager.getConsentStatus());
  }, []);

  const handleSavePreferences = (accepted: boolean) => {
    if (accepted) {
      consentManager.grantConsent();
    } else {
      consentManager.denyConsent();
    }
    
    setCurrentConsent(accepted ? 'accepted' : 'declined');
    
    // Dispatch consent change event
    window.dispatchEvent(new CustomEvent('consent-changed', { 
      detail: { accepted } 
    }));
    
    onClose();
  };

  const handleRevokeConsent = () => {
    consentManager.revokeConsent();
    setCurrentConsent(null);
    
    // Dispatch consent change event
    window.dispatchEvent(new CustomEvent('consent-changed', { 
      detail: { accepted: false } 
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                העדפות פרטיות
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                נהל את הגדרות העוגיות וההסכמות שלך
              </p>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            סטטוס נוכחי
          </h3>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              currentConsent === 'accepted' ? 'bg-green-500' :
              currentConsent === 'declined' ? 'bg-red-500' : 'bg-yellow-500'
            }`} />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {currentConsent === 'accepted' ? 'עוגיות מאושרות' :
               currentConsent === 'declined' ? 'עוגיות נדחות' : 'לא נבחר'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Analytics Cookies */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                עוגיות אנליטיקה
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mr-8">
              עוגיות אלו עוזרות לנו להבין כיצד משתמשים מתקשרים עם האתר שלנו על ידי איסוף 
              מידע אנונימי. אנו משתמשים ב-Amplitude Analytics לניתוח נתונים.
            </p>
          </div>

          {/* Essential Cookies */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                עוגיות חיוניות
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mr-8">
              עוגיות אלו חיוניות לתפקוד האתר ולא ניתן לבטל אותן. הן כוללות הגדרות 
              אבטחה והעדפות משתמש בסיסיות.
            </p>
            <div className="mr-8">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                תמיד מופעל
              </span>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Cookie className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                עוגיות שיווק
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mr-8">
              עוגיות אלו משמשות לשיווק ממוקד ולמדידת יעילות קמפיינים פרסומיים.
              כרגע אנחנו לא משתמשים בעוגיות שיווק.
            </p>
            <div className="mr-8">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                לא בשימוש
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSavePreferences(true)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              אשר כל העוגיות
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSavePreferences(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              דחה עוגיות אופציונליות
            </motion.button>
          </div>

          {currentConsent && (
            <div className="text-center">
              <button
                onClick={handleRevokeConsent}
                className="text-sm text-red-600 hover:text-red-700 underline"
              >
                בטל את כל ההסכמות
              </button>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              סגור
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Hook to manage consent preferences modal
export const useConsentPreferences = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    openPreferences: () => setIsOpen(true),
    closePreferences: () => setIsOpen(false),
  };
};