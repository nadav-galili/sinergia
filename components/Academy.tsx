import Link from "next/link";
import Header from "./Header";
import {
  ShoppingBag,
  ShoppingCart,
  ScanBarcode,
  ShoppingBasket,
} from "lucide-react";
import { GET_ACADEMY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { academy } from "@/sanity/schemaTypes/academy";

const iconMap = {
  ShoppingBag,
  ShoppingCart,
  ScanBarcode,
  ShoppingBasket,
};

type AcademyType = Omit<typeof academy, "_id"> & {
  _id: string;
  title: string;
  sub_title: string;
  slug: string;
  icon: keyof typeof iconMap;
};

const Academy = async ({ icon }: { icon: string }) => {
  const { data: academyCourses } = await sanityFetch({ query: GET_ACADEMY });

  return (
    <section className="container mx-auto my-10 py-10">
      <Link href="/academy" className="block">
        <Header headerText="אקדמיה" icon={icon} />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {academyCourses.map((course: AcademyType) => {
          const Icon = iconMap[course.icon as keyof typeof iconMap];
          return (
            <div
              key={course._id}
              className="col-span-1 h-64 shadow-md rounded-lg overflow-hidden border-2
               border-primary academy-gradient hover:scale-105 transition-all duration-300">
              <div className="flex flex-col justify-between h-full p-4">
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-400 mb-4 font-light text-xl">
                    {course.sub_title}
                  </p>
                </div>
                <div className="mt-auto flex flex-row justify-between">
                  <Link
                    href={`/academy/${course._id}`}
                    className="text-white text-2xl font-semibold flex flex-row items-center gap-2">
                    מידע נוסף
                  </Link>
                  {Icon && <Icon className="text-white" size={70} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Academy;
