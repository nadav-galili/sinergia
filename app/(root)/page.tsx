import React from "react";
import Categories from "@/components/Categories";
// import Parallex from "@/components/Parallex";
import RetailAcademy from "@/components/RetailAcademy";
import OurCustomers from "@/components/OurCustomers";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div>
      <Categories />
      {/* <Parallex /> */}
      <RetailAcademy />
      <About />
      <Projects />
      <OurCustomers />

      <div className="flex flex-col items-center justify-center my-10  py-10 bg-gradient-to-b from-transparent to-gray-50">
        <Button className=" font-bold text-white px-10 py-12 text-4xl hover:scale-105 transition-transform">
          <Link href="/contact" className="flex items-center gap-4">
            צרו קשר
            <Mail className="min-w-20 min-h-10" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
