import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component from Shadcn

const RetailAcademy = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="/path/to/image1.jpg"
          alt="Card 1 Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">Card 1 Header</h2>
          <p className="text-gray-600">Card 1 Subheader</p>
          <Button className="mt-4" aria-label="More about Card 1">
            More
          </Button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="/path/to/image2.jpg"
          alt="Card 2 Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">Card 2 Header</h2>
          <p className="text-gray-600">Card 2 Subheader</p>
          <Button className="mt-4" aria-label="More about Card 2">
            More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetailAcademy;
