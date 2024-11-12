import React from "react";
import Categories from "@/components/Categories";
import Parallex from "@/components/Parallex";
import RetailAcademy from "@/components/RetailAcademy";
import OurCustomers from "@/components/OurCustomers";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Categories />
      {/* <Parallex /> */}
      <RetailAcademy />
      <About />
      <Projects />
      <OurCustomers />

      <div className="flex flex-col items-center justify-center my-10  py-10 bg-gradient-to-b from-transparent to-gray-50">
        <Button className="text-3xl font-bold text-white">
          צרו קשר
          <Mail className="w-10 h-10" />
        </Button>
      </div>
    </div>
  );
}
