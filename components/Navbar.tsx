// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import BackgroundImages from "@/components/BackgroundImages";
import MobileMenu from "@/components/MobileMenu";
import NavItem from "@/components/NavItem";
import Image from "next/image";

const navItems = [
  { name: "אודות", href: "/partners" },
  { name: "שירותים", href: "/services" },
  { name: "פרוייקטים", href: "/projects" },
  { name: "אקדמיה", href: "/academy" },
  { name: "בלוג", href: "/blog" },
  { name: "צור קשר", href: "/contact" },
];

const images = [
  "/header/header3.jpeg",
  "/header/header4.jpeg",
  "/header/header5.jpeg",
  "/header/header6.jpeg",
  "/header/header7.jpeg",
  "/header/header8.jpeg",
  "/header/header9.jpeg",
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = (event: Event) => resolve();
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
      setTimeout(() => setIsFullyLoaded(true), 500);
    };

    preloadImages();
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !imagesLoaded) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [isClient, imagesLoaded, currentImageIndex]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  if (!isFullyLoaded) {
    return <Loader />;
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <div className="sticky top-0 z-50 bg-[#303131] md:hidden">
        <div className="flex items-center justify-between h-24 px-4">
          <div>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              navItems={navItems}
              onToggle={handleMobileMenuToggle}
            />
          </div>
          <Link href="/" className="block">
            <Image
              src="/transparentLogo.png"
              alt="Sinergia Logo"
              width={400}
              height={400}
              priority
              className="w-48"
            />
          </Link>
        </div>
      </div>

      <BackgroundImages
        images={images}
        currentImageIndex={currentImageIndex}
        previousImageIndex={previousImageIndex}
        isClient={isClient}
        imagesLoaded={imagesLoaded}
      />

      <nav className="hidden md:block sticky top-0 bg-[#303131] shadow-md z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-24 items-center justify-between">
            <div className="flex-1 flex justify-start">
              <Link href="/">
                <Image
                  src="/transparentLogo.png"
                  alt="Sinergia Logo"
                  width={400}
                  height={400}
                  priority
                  className="w-48 md:w-[400px]"
                />
              </Link>
            </div>

            <div className="flex-1 flex justify-end">
              <div className="hidden md:flex">
                {navItems.map((item) => (
                  <NavItem
                    key={item.name}
                    item={item}
                    hoveredItem={hoveredItem}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-16 text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        <h1 className="text-5xl font-bold mx-auto mt-1 bg-black/30 max-w-[33rem] font-regular font-assistant rounded-lg py-2 text-white relative">
          ייעוץ קמעונאות מתקדם
        </h1>
        <p className="mx-auto mt-1 bg-black/30 max-w-[33rem] font-regular text-4xl font-assistant rounded-lg py-2 text-white relative">
          פתרונות אסטרטגיים לעסקים קמעונאיים
        </p>
      </motion.div>
    </motion.div>
  );
}
