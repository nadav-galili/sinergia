"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
      imageUrl: "/categories/category1.jpeg",
    },
    {
      title: "ניתוח דאטה",
      subtitles: [
        "ניתוח מעמיק של נתוני מכירות",
        "מלאי והתנהגות צרכנים",
        "ניתוח מעמיק של נתוני מכירות",
        "מלאי והתנהגות צרכנים",
      ],
      imageUrl: "/categories/category2.jpeg",
    },

    {
      title: "הדרכות מקצועיות",
      subtitles: [
        "תכניות הדרכה מותאמות אישית לצוותי מכירות",
        "ניהול",
        "תכניות הדרכה מותאמות אישית לצוותי מכירות",
        "ניהול",
      ],
      imageUrl: "/categories/category3.jpeg",
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
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 2,
          },
        },
      }}>
      {categories.map((category) => (
        <motion.div
          key={category.title}
          variants={{
            hidden: { y: 50, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
          }}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="relative min-h-[250px]">
            <img
              src={category.imageUrl}
              alt={category.title}
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
