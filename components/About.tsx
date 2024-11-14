"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { ChevronsLeft } from "lucide-react";

interface StatProps {
  end: number;
  title: string;
}

const AnimatedStat = ({ end, title }: StatProps) => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && inView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, end, mounted]);

  if (!mounted) {
    return (
      <div ref={ref} className="text-center">
        <div className="text-4xl font-bold text-white">0+</div>
        <h3 className="mt-2 text-xl">{title}</h3>
      </div>
    );
  }

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-2xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}>
        {count}+
      </motion.div>
      <h3 className="mt-2 text-xl">{title}</h3>
    </div>
  );
};

const About = () => {
  const partners = [
    {
      id: 1,
      name: "אלי מרון",
      slug: "eli-maron",
      role: 'מנכ"ל משותף SINERGIA GROUP',
      description:
        "15+ years of experience in web development and system architecture.",
      image: "/partners/eli.jpg",
    },

    {
      id: 2,
      name: "עירית גלילי",
      slug: "irit-galili",
      role: 'מנכ"ל משותף SINERGIA GROUP',
      description:
        "Award-winning designer with expertise in UI/UX and brand identity.",
      image: "/partners/irit.jpg",
    },
    {
      id: 3,
      name: "ארזה בן-עמי",
      slug: "arza-ben-ami",
      role: 'מנכ"ל משותף SINERGIA GROUP',
      description:
        "Certified PMP with track record of delivering complex projects.",
      image: "/partners/arza.jpg",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto mt-24 px-4 md:px-16">
      <div className="lightblue_container rounded-lg ">
        <h2 className="heading rounded-lg w-1/3 mx-auto">אודות</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
          <AnimatedStat end={15} title="שנות ניסיון" />
          <AnimatedStat end={200} title="לקוחות מרוצים" />
          <AnimatedStat end={500} title="פרוייקטים שהושלמו" />
        </div>

        <Link
          href={`/partners/`}
          className="flex items-center underline text-white mb-3">
          <p className="text-xl text-white">קרא עוד</p>
          <ChevronsLeft className="w-8 h-8 mr-2 text-white" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="p-6 rounded-lg bg-white shadow-lg">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={partner.image}
                    alt={`${partner.name}'s profile`}
                  />
                  <AvatarFallback>
                    {partner.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
              <p className="text-gray-400 font-light mb-3">{partner.role}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
