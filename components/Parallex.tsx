"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About";
import Projects from "./Projects";

export default function Parallax() {
  const { scrollYProgress } = useScroll();

  // Transform values for the About section
  const aboutY = useTransform(scrollYProgress, [0, 0.33], ["0%", "-100%"]);

  // Transform values for the Projects section
  const projectsY = useTransform(scrollYProgress, [0.15, 0.45], ["50%", "0%"]);

  return (
    <div className="relative">
      {/* Sticky Background Container */}
      <div className="sticky top-0 -z-10 h-screen w-full">
        <Image
          src="/about/about2.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        {/* First Section */}
        <motion.div
          className="flex min-h-screen items-center justify-center"
          style={{ y: aboutY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <About />
        </motion.div>

        {/* Second Section - Reduced top margin */}
        <motion.div
          className="flex min-h-[50vh] items-center justify-center -mt-[50vh]" // Adjusted height and added negative margin
          style={{ y: projectsY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <Projects />
        </motion.div>
      </div>
    </div>
  );
}
