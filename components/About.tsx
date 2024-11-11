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
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
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
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-4xl font-bold text-white"
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
      image:
        "https://images.cdn-files-a.com/uploads/3440451/800_crop_5ef04f8f3ab29_5ef04f7861b01.jpg",
    },

    {
      id: 2,
      name: "עירית גלילי",
      slug: "irith-galili",
      role: 'מנכ"ל משותף SINERGIA GROUP',
      description:
        "Award-winning designer with expertise in UI/UX and brand identity.",
      image:
        "https://images.cdn-files-a.com/uploads/3440451/800_crop_5ef055c5a68b9_5ef0557891268.jpg",
    },
    {
      id: 3,
      name: "ארזה בן-עמי",
      slug: "arza-ben-ami",
      role: 'מנכ"ל משותף SINERGIA GROUP',
      description:
        "Certified PMP with track record of delivering complex projects.",
      image:
        "https://images.cdn-files-a.com/uploads/3440451/800_crop_5ef0560bb4a39_5ef055f943d4e.jpg",
    },
  ];

  return (
    <section className="lightblue_container rounded-lg">
      <h2 className="text-4xl font-bold text-center text-30-extrabold  mb-12 text-primary-100 underline">
        אודות
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
        <AnimatedStat end={15} title="שנות ניסיון" />
        <AnimatedStat end={200} title="לקוחות מרוצים" />
        <AnimatedStat end={500} title="פרוייקטים שהושלמו" />
      </div>

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
            <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
            <p className="text-gray-400 font-medium mb-3">{partner.role}</p>
            <Link
              href={`/partners/${partner.slug}`}
              className="flex items-center underline">
              <p className="text-lg text-primary">קרא עוד</p>
              <ChevronsLeft className="w-4 h-4 mr-2 text-primary" />
            </Link>
            {/* <p className="text-gray-600">{partner.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
