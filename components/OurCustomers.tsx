"use client";
import Image from "next/image";
import bigShop from "@/public/customers/big-shop.png";
import dorAlon from "@/public/customers/dor-alon.jpg";
import macabiPharm from "@/public/customers/macabi-pharm.jpg";
import hashmal from "@/public/customers/hashmal.webp";

const customerData = [
  { name: "Customer 1", logo: bigShop },
  { name: "Customer 1", logo: bigShop },
  { name: "Customer 1", logo: bigShop },

  { name: "Customer 2", logo: dorAlon },
  { name: "Customer 2", logo: dorAlon },

  { name: "Customer 3", logo: macabiPharm },
  { name: "Customer 3", logo: macabiPharm },

  { name: "Customer 4", logo: hashmal },
  { name: "Customer 4", logo: hashmal },
  { name: "Customer 4", logo: hashmal },
];

const OurCustomers = () => {
  return (
    <>
      <h2 className="heading text-center mx-auto rounded-lg mb-4">
        בין לקוחותינו
      </h2>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 p-4">
        {customerData.map((customer, index) => (
          <div
            key={index}
            className="w-[calc(20%-1rem)] min-w-[150px] h-20 flex justify-center items-center p-2 
            rounded-lg border border-gray-200 bg-white shadow-sm 
            hover:shadow-md hover:border-gray-300 transition-all duration-200">
            <Image
              src={customer.logo}
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
