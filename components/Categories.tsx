"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
interface Category {
  title: string;
  subtitles: string[];
  imageUrl: string;
}

const Categories = () => {
  const categories: Category[] = [
    {
      title: "ייעוץ אסטרטגי",
      subtitles: [
        "ליווי מקצועי לרשתות",
        "בניית אסטרטגיה עסקית",
        "פיתוח תוכניות עבודה",
        "ניתוח שוק ומתחרים",
      ],
      imageUrl: "/categories/strategic_consultence.jpeg",
    },

    {
      title: "הדרכות ניהוליות ומקצועיות",
      subtitles: [
        "תכניות הדרכה מותאמות אישית לצוותי מכירות",
        "ניהול",
        "תכניות הדרכה מותאמות אישית לצוותי מכירות",
        "ניהול",
      ],
      imageUrl: "/categories/category3.jpeg",
    },
    {
      title: "ניתוח דאטה",
      subtitles: [
        "ניתוח מעמיק של נתוני מכירות",
        "מלאי והתנהגות צרכנים",
        "ניתוח מעמיק של נתוני מכירות",
        "מלאי והתנהגות צרכנים",
      ],
      imageUrl: "/categories/data_analysis.jpeg",
    },
    {
      title: "פלנוגרמות",
      subtitles: [
        "תכנון מדויק של סידור וניצול שטחי מדף",
        "תכנון מדויק של סידור וניצול שטחי מדף",
        "תכנון מדויק של סידור וניצול שטחי מדף",
        "תכנון מדויק של סידור וניצול שטחי מדף",
      ],
      imageUrl: "/categories/category4.jpeg",
    },
    // Add more categories as needed
  ];

  return (
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
      {categories.map((category) => (
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
          <div className="relative min-h-[250px]">
            <Image
              src={category.imageUrl}
              alt={category.title}
              fill
              sizes="100vw"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl text-primary font-bold">{category.title}</h3>
            <div className="space-y-2 mt-2">
              {category.subtitles.map((subtitle, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>{subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Categories;
