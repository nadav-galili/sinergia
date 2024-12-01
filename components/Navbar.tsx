"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";

const navItems = [
  { name: "אודות", href: "/partners" },
  { name: "שירותים", href: "/services" },
  { name: "פרוייקטים", href: "/projects" },
  { name: "אקדמיה", href: "/academy" },
  { name: "בלוג", href: "/blog" },
  { name: "צור קשר", href: "/contact" },
];

const fadeInFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

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

  // Fix hydration issues by waiting for client-side render
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Preload images safely
  useEffect(() => {
    if (!isClient) return;

    const preloadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            if (typeof window !== "undefined") {
              const img = document.createElement("img");
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            } else {
              resolve(null);
            }
          });
        });

        // Also preload the logo
        const logoPromise = new Promise((resolve, reject) => {
          const img = document.createElement("img");
          img.src = "/transparentLogo.png";
          img.onload = resolve;
          img.onerror = reject;
        });

        await Promise.all([...imagePromises, logoPromise]);
        setImagesLoaded(true);

        // Add a slight delay before showing the content
        setTimeout(() => {
          setIsFullyLoaded(true);
        }, 500);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true);
        setIsFullyLoaded(true);
      }
    };

    preloadImages();
  }, [isClient]);

  // Image transition effect with adjusted timing
  useEffect(() => {
    if (!isClient || !imagesLoaded) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // 1 second transition duration
    }, 2000); // 2 seconds display time

    return () => clearInterval(interval);
  }, [isClient, imagesLoaded, currentImageIndex]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Loading screen
  if (!isFullyLoaded) {
    return <Loader />;
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      {/* Background Images with Enhanced Crossfade */}
      <div className="absolute inset-0 h-full overflow-hidden">
        {isClient && imagesLoaded && (
          <AnimatePresence mode="sync">
            {/* Current Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0 h-full">
              <div className="relative h-full w-full">
                <Image
                  src={images[currentImageIndex]}
                  alt={`Background ${currentImageIndex + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>

            {/* Previous Image */}
            <motion.div
              key={`prev-${previousImageIndex}`}
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0 h-full">
              <div className="relative h-full w-full">
                <Image
                  src={images[previousImageIndex]}
                  alt={`Background Previous ${previousImageIndex + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Navbar Content */}
      <nav className="relative bg-[#455159] shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1">
              <Link href="/">
                <Image
                  src="/transparentLogo.png"
                  alt="Sinergia Logo"
                  width={400}
                  height={400}
                  priority
                  className=""
                />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-12"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu">
              <motion.div
                className="bg-white w-6 h-1 mb-1"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="bg-white w-6 h-1 mb-1"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="bg-white w-6 h-1"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
            </button>

            {/* Navigation Items */}
            {isClient && (
              <motion.div
                className="hidden md:flex"
                variants={staggerContainer}
                initial="hidden"
                animate="visible">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeInFromTop}
                    className="ml-8">
                    <Link
                      href={item.href}
                      className="group relative px-2 py-1"
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}>
                      <span className="relative !text-white transition-colors duration-300 hover:text-primary text-2xl">
                        {item.name}
                        {hoveredItem === item.name && (
                          <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary-300"
                            layoutId="underline"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden">
                {navItems.map((item) => (
                  <Link
                    onClick={handleMobileMenuToggle}
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-white hover:bg-primary-500">
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Content */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        <h1 className="text-5xl font-bold font-assistant tracking-tight sm:text-6xl text-white drop-shadow-2xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)] bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent animate-text-shine">
          ייעוץ קמעונאות מתקדם
        </h1>

        <p className="mx-auto mt-1 bg-black/30 max-w-[33rem] font-regular text-4xl font-assistant rounded-lg  py-2 text-white relative">
          פתרונות אסטרטגיים לעסקים קמעונאיים
        </p>
      </motion.div>
    </motion.div>
  );
}
