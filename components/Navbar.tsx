// components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import MobileMenu from "@/components/MobileMenu";
import NavItem from "@/components/NavItem";
import Image from "next/image";

const navItems = [
  { name: "אודות", href: "/partners" },
  { name: "שירותים", href: "/services" },
  { name: "פרוייקטים", href: "/projects" },
  { name: "אקדמיה", href: "/academy" },
  { name: "בלוג", href: "/blog" },
  {
    name: "All About Retail",
    href: "https://www.allaboutretail.co.il/",
    target: "_blank",
  },
  { name: "צור קשר", href: "/contact" },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <div className="sticky top-0 z-50 bg-[#303131] md:hidden">
        <div className="flex items-center justify-between h-24 px-4">
          <div>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              navItems={navItems}
              onToggle={handleMobileMenuToggle}
            />
          </div>
          <Link href="/" className="block">
            <Image
              src="/transparentLogo.png"
              alt="Sinergia Logo"
              width={400}
              height={400}
              priority
              className="w-48"
            />
          </Link>
        </div>
      </div>

      <nav className="hidden md:block sticky top-0 bg-[#303131] shadow-md z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-24 items-center justify-between">
            <div className="flex-1 flex justify-start">
              <Link href="/">
                <Image
                  src="/transparentLogo.png"
                  alt="Sinergia Logo"
                  width={400}
                  height={400}
                  priority
                  className="w-48 md:w-[400px]"
                />
              </Link>
            </div>

            <div className="flex-1 flex justify-end">
              <div className="hidden md:flex">
                {navItems.map((item) => (
                  <NavItem
                    key={item.name}
                    item={item}
                    hoveredItem={hoveredItem}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
