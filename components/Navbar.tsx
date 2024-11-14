// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { name: "שירותים", href: "/services" },
  { name: "אודות", href: "/partners" },
  { name: "פרוייקטים", href: "/projects" },
  { name: "אקדמיה", href: "/academy" },
  { name: "צור קשר", href: "/contact" },
];

// Add animation variants for reusability
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

// const letterAnimation = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 12,
//     },
//   },
// };

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Background with improved parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
          transition: "background-image 1s ease-in-out",
        }}>
        <div className="absolute inset-0 bg-black/10 transform-gpu" />
      </motion.div>

      {/* Navbar Content */}
      <nav className="relative bg-[#455159] shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Logo with smooth fade */}
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
                  rotate: isMobileMenuOpen ? 240 : 0,
                  x: isMobileMenuOpen ? 0 : 0,
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
                  rotate: isMobileMenuOpen ? -60 : 0,
                  y: isMobileMenuOpen ? -15 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
            </button>

            {/* Navigation Items with stagger effect */}
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
                    <span className="relative !text-white transition-colors duration-300 hover:text-primary text-30-semibold">
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
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4">
              {navItems.map((item) => (
                <Link
                  onClick={handleMobileMenuToggle}
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:bg-primary-500">
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content with improved animations */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-2xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)] bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent animate-text-shine">
          ייעוץ קמעונאות מתקדם
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-30-semibold !text-white !font-light drop-shadow-2xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)] bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent animate-text-shine rounded-lg px-4 py-2 bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}>
          פתרונות אסטרטגיים לעסקים קמעונאיים
        </motion.p>
      </motion.div>
    </div>
  );
}
