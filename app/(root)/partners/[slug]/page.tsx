"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAmplitudeTracking } from "@/hooks/useAmplitudeTracking";
import { getPartnerBySlug, type Partner } from "@/lib/partners";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const PartnerPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { trackPageView } = useAmplitudeTracking();
  const [partner, setPartner] = useState<Partner | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPartner = async () => {
      try {
        const resolvedParams = await params;
        const resolvedSlug = resolvedParams.slug;
        const foundPartner = getPartnerBySlug(resolvedSlug);
        setPartner(foundPartner);

        if (foundPartner) {
          trackPageView("partner_detail_page_visible", {
            location: "partners",
            partnerSlug: resolvedSlug,
          });
        }
      } catch (error) {
        console.error("Error loading partner:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPartner();
  }, [params, trackPageView]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">Loading...</div>
      </div>
    );
  }

  if (!partner) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="partners-bg bg-white rounded-lg shadow-lg p-8 space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
