// components/Parallex.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import About from "./About";
import Projects from "./Projects";

export default function Parallex() {
  return (
    <div className="relative">
      {/* Sticky Background Container */}
      <div className="sticky top-0 -z-10 h-screen w-full">
        <Image
          src="/about/about2.webp" // Replace with your image
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Scrolling Content */}
      <div className="relative">
        {/* First Section */}
        <div className="flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <About />
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <Projects />
          </motion.div>
        </div>

        {/* Third Section */}
        {/* <div className="flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl px-4 text-center">
            <h2 className="text-5xl font-bold text-white">Join Our Vision</h2>
            <p className="mt-6 text-xl leading-relaxed text-white/80">
              Be part of something extraordinary. Together, we can build the
              future we want to see.
            </p>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}
