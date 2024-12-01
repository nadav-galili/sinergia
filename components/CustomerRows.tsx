"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Customer {
  _id: string;
  name: string;
  imageUrl: string;
}

const CustomerRow = ({
  items,
  direction,
  speed,
}: {
  items: Customer[];
  direction: "left" | "right";
  speed?: number;
}) => {
  if (items.length === 0) return null;

  return (
    <div className="relative h-20 w-full overflow-hidden">
      <motion.div
        className="flex space-x-8 absolute left-0"
        animate={{
          x:
            direction === "left"
              ? [0, `-${items.length * 208}px`]
              : [0, `${items.length * 208}px`],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: `${items.length * 208}px` }}>
        {[...items, ...items, ...items, ...items, ...items, ...items].map(
          (customer, idx) => (
            <div
              key={`${customer._id}-${idx}`}
              className="flex-shrink-0 w-[130px] h-20 flex justify-center items-center p-2 
               rounded-lg border border-gray-200 shadow-sm 
              hover:shadow-md hover:border-gray-300 transition-all duration-200">
              <Image
                src={`${customer.imageUrl}?`}
                alt={`${customer.name} logo`}
                width={130}
                height={20}
                className="object-contain w-auto h-full "
              />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export const CustomerRows = ({
  rows,
}: {
  rows: { row1: Customer[]; row2: Customer[]; row3: Customer[] };
}) => {
  return (
    <div className="flex flex-col gap-8 overflow-hidden bg-white rounded-lg">
      <CustomerRow items={rows.row1} direction="left" speed={120} />
      <CustomerRow items={rows.row2} direction="right" speed={150} />
      <CustomerRow items={rows.row3} direction="left" speed={120} />
    </div>
  );
};
