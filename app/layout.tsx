import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={`${assistant.variable} assistant`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
