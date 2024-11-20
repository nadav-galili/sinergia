import Image from "next/image";
import { GET_SERVICE_BY_SLUG } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  try {
    const service = await client.fetch(GET_SERVICE_BY_SLUG, { slug });
    if (!service) {
      notFound();
    }
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6" key={service._id}>
        <div className="bg-white  w-1/2 m-auto dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {service.title}
            </h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <PortableText value={service.description} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching service:", error);
    // You might want to redirect or show an error page here
    notFound();
  }
};

export default ServicePage;
