import React from "react";
import Categories from "@/components/Categories";
import Parallex from "@/components/Parallex";
// import Academy from "@/components/Academy";
import RetailAcademy from "@/components/RetailAcademy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Categories />
      <Parallex />
      <RetailAcademy />
      <Contact />
    </div>
  );
}
