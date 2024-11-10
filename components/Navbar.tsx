// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "דף הבית", href: "/" },
  { name: "שירותים", href: "/about" },
  { name: "אודות", href: "/services" },
  { name: "פרוייקטים", href: "/contact" },
  { name: "אקדמיה", href: "/contact" },
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

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative min-h-[900px]">
      {/* Background with improved parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/supermarket.webp')",
          backgroundAttachment: "fixed",
        }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </motion.div>

      {/* Navbar Content */}
      <nav className="relative bg-white/95 backdrop-blur-sm shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo with smooth fade */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl font-bold">
              <img
                src="/sinergia-logo.webp"
                alt="Sinergia Logo"
                className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

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
                    <span className="relative text-primary transition-colors duration-300 hover:text-primary-300">
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
        </div>
      </nav>

      {/* Hero Content with improved animations */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-32 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        <motion.h1
          className="text-5xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-2xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)] bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent animate-text-shine"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}>
          {"ייעוץ קמעונאות מתקדם".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="inline-block transform hover:scale-110 transition-transform duration-200">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}>
          פתרונות אסטרטגיים לעסקים קמעונאיים
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-md bg-primary-500 px-6 py-3 text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2">
            Get Started
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-md border border-white px-6 py-3 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
