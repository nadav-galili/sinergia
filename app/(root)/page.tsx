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
      <Categories icon="1" />
      <About icon="1" />
      <RetailAcademy icon="1" />
      <Projects icon="1" />
      <OurCustomers />

      <div className="flex flex-col items-center justify-center mt-4  py-4 ">
        <div className=" rounded-lg font-bold text-primary px-4 py-6 text-3xl hover:scale-105 transition-transform">
          <Link href="/contact" className=" flex items-center gap-4">
            צרו קשר
            <Mail className="min-w-20 min-h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
