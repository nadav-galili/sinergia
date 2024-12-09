//import { useParams } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_ACADEMY_BY_ID } from "@/sanity/lib/queries";
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const academy = await sanityFetch({
    query: GET_ACADEMY_BY_ID,
    params: { id },
  });

  return (
    <div className="container mx-auto min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center my-5">
        {academy.data.title}
      </h1>

      <iframe
        src={`${academy.data.pdfUrl}#zoom=150`}
        className="w-full h-screen"
        title="Academy PDF"
        aria-label="Academy PDF Document"
      />
    </div>
  );
};

export default Page;
