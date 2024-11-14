// "use client";

import Image from "next/image";

// Define a type for the customer data
interface Customer {
  _id: string;
  name: string;
  imageUrl: string;
}

import { client } from "@/sanity/lib/client";
import { GET_OUR_CUSTOMERS } from "@/sanity/lib/queries";

const OurCustomers = async () => {
  const ourCustomers: Customer[] = await client.fetch(GET_OUR_CUSTOMERS);

  return (
    <>
      <h2 className="heading text-center mx-auto rounded-lg mb-4">
        בין לקוחותינו
      </h2>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 p-4">
        {ourCustomers.map((customer: Customer) => (
          <div
            key={customer._id}
            className="w-[calc(20%-1rem)] min-w-[150px] h-20 flex justify-center items-center p-2 
            rounded-lg border border-gray-200 bg-white shadow-sm 
            hover:shadow-md hover:border-gray-300 transition-all duration-200">
            <Image
              src={`${customer.imageUrl}?w=120&h=120&fit=max`}
              alt={`${customer.name} logo`}
              width={80}
              height={80}
              className="object-contain w-auto h-full opacity-90 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default OurCustomers;
