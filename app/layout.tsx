import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AmplitudeProvider } from "@/components/AmplitudeProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { ConsentManagerProvider } from "@/components/ConsentManager";
import Script from "next/script";

// const assistant = localFont({
//   src: [
//     {
//       path: "./fonts/Assistant-Light.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Assistant-SemiBold.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Assistant-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/Assistant-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-assistant",
// });

const assistant = localFont({
  src: [
    {
      path: "./fonts/Assistant-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Assistant-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "Sinergia-Group",
  description: "Sinergia-Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Consent Mode v2 - Initialize before any other tracking scripts */}
        <Script
          id="gtag-consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Set default consent mode - DENIED by default (GDPR compliant)
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'granted',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
            `
          }}
        />
      </head>
      <body className={`${assistant.variable} assistant`}>
        <ConsentManagerProvider>
          <AmplitudeProvider>
            {children}
            <Toaster />
            <CookieConsent />
          </AmplitudeProvider>
        </ConsentManagerProvider>
      </body>
    </html>
  );
}
