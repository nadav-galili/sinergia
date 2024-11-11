import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: [
    {
      path: "./fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Light.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
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
      <body className={`${rubik.variable} rubik`}>{children}</body>
    </html>
  );
}
