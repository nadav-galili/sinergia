"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAmplitudeTracking } from "@/hooks/useAmplitudeTracking";
import { partners } from "@/lib/partners";
import Link from "next/link";
const Page = () => {
  const { trackPageView } = useAmplitudeTracking();
  trackPageView("partners_page_visible", {
    location: "partners",
  });
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <Link
            href={`/partners/${partner.slug}`}
            key={partner.slug}
            className="partners-bg bg-white rounded-lg shadow-lg p-8 space-y-6 block hover:opacity-90 transition-opacity">
            {partner.image && (
              <div className="flex justify-center mb-8">
                <Avatar className="w-32 h-32">
                  <AvatarImage
                    src={partner.image}
                    alt={`${partner.name}'s profile`}
                  />
                  <AvatarFallback>
                    {partner.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}

            <h1 className="text-2xl font-bold text-white underline text-center">
              {partner.name}
            </h1>
            <h2 className="text-xl font-bold text-gray-700 text-center">
              {partner.title}
            </h2>

            {partner.content && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-right">
                {partner.content}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
