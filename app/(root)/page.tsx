import React from "react";
// import Categories from "@/components/Categories";
// import Parallex from "@/components/Parallex";
import RetailAcademy from "@/components/RetailAcademy";
import Academy from "@/components/Academy";
import OurCustomers from "@/components/OurCustomers";
import { Mail } from "lucide-react";
import Link from "next/link";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GlowServices from "@/components/GlowServices";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <>
      <div>
        <Hero />
        <GlowServices icon="1" />
        <About icon="1" />
        <Academy />
        {/* <RetailAcademy icon="1" /> */}
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
    </>
  );
}
