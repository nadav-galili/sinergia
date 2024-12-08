//import { useParams } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_ACADEMY_BY_ID } from "@/sanity/lib/queries";
import Image from "next/image";
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // const params = useParams();
  const academy = await sanityFetch({
    query: GET_ACADEMY_BY_ID,
    params: { id },
  });
  console.log("🚀 ~ Page ~ academy:", academy);

  const images = [
    { id: 1, image: "/testAcademy/1.jpeg" },
    { id: 2, image: "/testAcademy/2.jpeg" },
    { id: 3, image: "/testAcademy/3.jpeg" },
    { id: 4, image: "/testAcademy/4.jpeg" },
  ];
  return (
    <div className="container mx-auto min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center my-5">
        {academy.data.title}
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.image}
            width={700}
            height={700}
            alt={`Image ${image.id}`}
          />
        ))}
      </div>
      {/* <iframe
        src={`${academy.data.pdfUrl}#zoom=150`}
        className="w-full h-screen"
        title="Academy PDF"
        aria-label="Academy PDF Document"
      /> */}
    </div>
  );
};

export default Page;
