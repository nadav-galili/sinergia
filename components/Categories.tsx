"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  ShoppingCart,
  Handshake,
  ChartNoAxesCombined,
  ShoppingBasket,
  ChevronsLeft,
  Sparkles,
} from "lucide-react";
import Header from "./Header";

import Image from "next/image";
import Link from "next/link";

interface Category {
  title: string;
  slug: string;
  subtitles: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

const Categories = ({ icon }: { icon: string }) => {
  const categories: Category[] = [
    {
      title: "ייעוץ אסטרטגי",
      slug: "strategic-consultence",
      subtitles: [
        "ליווי מקצועי לרשתות וספקים",
        "אסטרטגיה עסקית  קמעונאית",
        "פיתוח תוכניות עבודה",
        "ניתוח שוק ומתחרים",
        "הטמעת שינויים אסטרטגיים וטכנולוגיים",
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
      imageUrl: "/ourServices/services1.jpeg",
    },

    {
      title: "הדרכות קמעונאיות",
      slug: "retail-training",
      icon: <Handshake className="w-6 h-6" />,
      subtitles: [
        "תכניות הדרכה למנהלים במטה ובשטח",
        "תוכניות הדרכה לעתודה ניהולית",
        "תוכניות הדרכה למטה סחר ומנהלי קטגוריה",
        "פיתוח תהליכי הדרכה  למערכי המכירות",
      ],
      imageUrl: "/ourServices/services2.jpeg",
    },
    {
      title: "לומדות באנימציה",
      slug: "animation-training",
      icon: <Sparkles className="w-6 h-6" />,
      subtitles: [
        "לומדות לדרגי התפעול בחנויות",
        "לומדות לתהליכי מכירה ושירות",
        "לומדות לרגולציה בתחום הקמעונאות",
        "לומדות  לתהליכי השקה/מבצע ייחודי ועוד",
      ],
      imageUrl: "/ourServices/services3.jpeg",
    },
    {
      title: "פלנוגרמות",
      slug: "planograms",
      icon: <ShoppingBasket className="w-6 h-6" />,
      subtitles: [
        "אנליטיקס ופיתוח פלנוגרמות",
        "שיתוף פעולה עם חברת ARIG",
        "אופטימיזציה של שטחי מדף",
        "ביסוס על עץ החלטות קניה",
      ],
      imageUrl: "/ourServices/services4.jpeg",
    },
    // Add more categories as needed
  ];

  return (
    <section className="container mx-auto">
      <Link href="/services" className="block">
        <Header headerText="השירותים שלנו" icon={icon} />
      </Link>
      <motion.div
        className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}>
        {categories.map((category) => {
          return (
            <motion.div
              key={category.title}
              variants={{
                hidden: {
                  y: 100,
                  opacity: 0,
                  scale: 0.8,
                },
                show: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.8,
                  },
                },
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative min-h-[180px] overflow-hidden">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  sizes="100vw"
                  className="absolute inset-0 object-cover w-full h-full hover:scale-105 transition-all duration-300"
                />
              </div>

              <div className="bg-primary flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <Link href={`/services/${category.slug}`}>
                    <h3 className="text-2xl  text-white font-bold flex items-center">
                      {category.title}
                      <ChevronsLeft className="w-6 h-6 ml-2" />
                    </h3>
                  </Link>
                </div>
                {category.icon && (
                  <div className="text-white">{category.icon}</div>
                )}
              </div>
              <div className="space-y-2 mt-2">
                {category.subtitles.map((subtitle, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-1">
                    <Check className="h-4 w-4 text-success" />
                    <span className="font-semibold text-lg">{subtitle}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Categories;
