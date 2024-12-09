"use client";

import BackgroundImages from "@/components/BackgroundImages";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const images = [
  "/header/header3.jpeg",
  "/header/header4.jpeg",
  "/header/header5.jpeg",
  "/header/header6.jpeg",
  "/header/header7.jpeg",
  "/header/header8.jpeg",
  "/header/header9.jpeg",
];

const Hero = () => {
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
    <div className="mb-10">
      <BackgroundImages
        images={images}
        currentImageIndex={currentImageIndex}
        previousImageIndex={previousImageIndex}
        isClient={isClient}
        imagesLoaded={imagesLoaded}
      />
      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-16 text-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        <h1 className="text-4xl sm:text-5xl font-bold mx-auto mt-1 bg-black/30 max-w-[33rem] font-regular font-assistant rounded-lg py-2 text-white relative">
          ייעוץ קמעונאות מתקדם
        </h1>
        <h2 className="mx-auto mt-1 bg-black/30 max-w-[33rem] font-regular text-3xl sm:text-4xl font-assistant rounded-lg py-2 text-white relative">
          פתרונות אסטרטגיים לעסקים קמעונאיים
        </h2>
      </motion.div>
    </div>
  );
};

export default Hero;
