// import React from "react";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import Header from "./Header";

const RetailAcademy = ({ icon }: { icon: string }) => {
  const courses = [
    {
      id: 1,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      slug: "category-management",
      image: "/categories/category_managment.jpeg",
      cta: "למידע נוסף",
    },
    {
      id: 2,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      slug: "category-management",
      image: "/categories/category_managment.jpeg",
      cta: "למידע נוסף",
    },
    {
      id: 3,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      image: "/categories/category_managment.jpeg",
      cta: "למידע נוסף",
      slug: "category-management",
    },
  ];

  return (
    <section className="container mx-auto">
      <Link href="/academy" className="block">
        <Header headerText="אקדמיה" icon={icon} />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mx-4 md:px-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="max-w-sm mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
            {" "}
            {/* Added max-w-sm and mx-auto */}
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4 font-light">
                {course.description}
              </p>

              <Link
                href={`/academy/${course.id}`}
                className="flex items-center justify-center text-primary">
                {course.cta}
                <ChevronsLeft className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailAcademy;
