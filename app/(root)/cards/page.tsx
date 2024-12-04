"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  ShoppingCart,
  Handshake,
  ChartNoAxesCombined,
  ShoppingBasket,
  ChevronsLeft,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";

import Image from "next/image";
import Link from "next/link";

interface Category {
  title: string;
  slug: string;
  subtitles: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

const CardsPage = ({ icon }: { icon: string }) => {
  const categories: Category[] = [
    {
      title: "ייעוץ אסטרטגי",
      slug: "strategic-consultence",
      subtitles: [
        "ליווי מקצועי לרשתות וספקים",
        "אסטרטגיה עסקית  קמעונאית",
        "פיתוח תוכניות עבודה",
        "ניתוח שוק ומתחרים",
        "הטמעת שינויים אסטרטגיים וטכנולוגיים",
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
      imageUrl: "/ourServices/services1.jpeg",
    },

    {
      title: "הדרכות קמעונאיות",
      slug: "retail-training",
      icon: <Handshake className="w-6 h-6" />,
      subtitles: [
        "תכניות הדרכה למנהלים במטה ובשטח",
        "תוכניות הדרכה לעתודה ניהולית",
        "תוכניות הדרכה למטה סחר ומנהלי קטגוריה",
        "פיתוח תהליכי הדרכה  למערכי המכירות",
      ],
      imageUrl: "/ourServices/services2.jpeg",
    },
    {
      title: "לומדות באנימציה",
      slug: "animation-training",
      icon: <Sparkles className="w-6 h-6" />,
      subtitles: [
        "לומדות לדרגי התפעול בחנויות",
        "לומדות לתהליכי מכירה ושירות",
        "לומדות לרגולציה בתחום הקמעונאות",
        "לומדות  לתהליכי השקה/מבצע ייחודי ועוד",
      ],
      imageUrl: "/ourServices/services3.jpeg",
    },
    {
      title: "פלנוגרמות",
      slug: "planograms",
      icon: <ShoppingBasket className="w-6 h-6" />,
      subtitles: [
        "אנליטיקס ופיתוח פלנוגרמות",
        "שיתוף פעולה עם חברת ARIG",
        "אופטימיזציה של שטחי מדף",
        "ביסוס על עץ החלטות קניה",
      ],
      imageUrl: "/ourServices/services4.jpeg",
    },
    // Add more categories as needed
  ];

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;
    const cards = Array.from(
      document.querySelectorAll(".card")
    ) as HTMLElement[];

    if (!cardsContainer || !overlay) return;

    const applyOverlayMask = (e: PointerEvent) => {
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;
      overlay.style.setProperty("--opacity", "1");
      overlay.style.setProperty("--x", `${x}px`);
      overlay.style.setProperty("--y", `${y}px`);
    };

    const createOverlayCta = (overlayCard: HTMLElement, ctaEl: Element) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", "true");
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardEl = entry.target as HTMLElement;
        const cardIndex = cards.indexOf(cardEl);
        const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];

        if (cardIndex >= 0 && overlay.children[cardIndex]) {
          const overlayChild = overlay.children[cardIndex] as HTMLElement;
          overlayChild.style.width = `${width}px`;
          overlayChild.style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl: HTMLElement) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      createOverlayCta(overlayCard, cardEl.lastElementChild!);
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);

    return () => {
      observer.disconnect();
      document.body.removeEventListener("pointermove", applyOverlayMask);
    };
  }, []);

  return (
    <main className="main flow container mx-auto rounded-lg">
      <Link href="/services" className="main__heading">
        <Header headerText="השירותים שלנו" icon={icon} />
      </Link>
      <div className="main__cards cards" ref={cardsContainerRef}>
        <div className="cards__inner  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {categories.map((category) => (
            <div
              className="cards__card card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border-2
              border-primary"
              key={category.title}>
              <div className="relative min-h-[180px] overflow-hidden">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  sizes="100vw"
                  className="absolute inset-0 object-cover w-full h-full hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="bg-black flex items-center justify-between p-2">
                <div className="flex items-center gap-2 ">
                  <Link href={`/services/${category.slug}`}>
                    <h3 className="text-2xl  text-white font-bold flex items-center">
                      {category.title}
                      <ChevronsLeft className="w-6 h-6 ml-2" />
                    </h3>
                  </Link>
                </div>
                {category.icon && (
                  <div className="text-white">{category.icon}</div>
                )}
              </div>
              {/* <h2 className="card__heading">{category.title}</h2> */}
              {/* <p className="card__price">$29.99</p> */}
              {/* <ul role="list" className="card__bullets flow">
                <li>Access to all premium workouts and nutrition plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual coaching session every month</li>
                <li>Exclusive content and early access to new features</li>
              </ul>
              <a href="#ultimate" className="card__cta cta">
                Go Ultate
              </a> */}
              <div className="space-y-2 mt-2 ">
                {category.subtitles.map((subtitle, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-1 ">
                    <Check className="h-4 w-4 text-success" />
                    <span className="font-semibold text-lg">{subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="overlay cards__inner" ref={overlayRef}></div>
      </div>
    </main>
  );
};

export default CardsPage;
