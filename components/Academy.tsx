// import React from "react";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import {
  ShoppingBag,
  ShoppingCart,
  ScanBarcode,
  ShoppingBasket,
} from "lucide-react";

import Image from "next/image";
import Header from "./Header";

const Academy = () => {
  const courses = [
    {
      id: 1,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      slug: "category-management",
      image: "/academy/academy1.jpeg",
      cta: "למידע נוסף",
      icon: ShoppingBag,
    },
    {
      id: 2,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      slug: "category-management",
      image: "/academy/academy1.jpeg",
      cta: "למידע נוסף",
      icon: ScanBarcode,
    },
    {
      id: 3,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      image: "/academy/academy1.jpeg",
      cta: "למידע נוסף",
      slug: "category-management",
      icon: ShoppingBasket,
    },
    {
      id: 4,
      title: "ניהול קטגוריות מתקדם",
      description: "קורס מקיף לניהול קטגוריות בקמעונאות",
      image: "/academy/academy1.jpeg",
      cta: "למידע נוסף",
      slug: "category-management",
      icon: ShoppingCart,
    },
  ];

  return (
    <section className="container mx-auto my-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="col-span-1 h-64  shadow-md rounded-lg overflow-hidden border-2 border-primary academy-gradient">
            <div className="flex flex-col justify-between h-full p-4 ">
              <div>
                <h2 className="text-2xl text-white font-semibold mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-400 mb-4 font-light text-xl">
                  {course.description}
                </p>
              </div>
              <div className="mt-auto flex flex-row justify-between">
                <Link
                  href={`/academy/${course.id}`}
                  className="text-white text-2xl font-semibold flex flex-row items-center gap-2">
                  {course.cta}
                </Link>
                <course.icon className="text-white text-2xl" size={52} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academy;
