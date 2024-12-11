"use client";

import React from "react";
import Image from "next/image";
const PDFViewer = ({
  pdfUrl,
  image1Url,
  image2Url,
  image3Url,
  image4Url,
}: {
  pdfUrl: string;
  image1Url: string;
  image2Url: string;
  image3Url: string;
  image4Url: string;
}) => {
  const isMobile =
    typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

  return (
    <>
      {isMobile ? (
        <>
          <Image
            src={image1Url}
            alt="Academy Image"
            width={500}
            height={500}
            className="w-full h-screen"
          />
          <Image
            src={image2Url}
            alt="Academy Image"
            width={500}
            height={500}
            className="w-full h-screen"
          />
          <Image
            src={image3Url}
            alt="Academy Image"
            width={500}
            height={500}
            className="w-full h-screen"
          />
          <Image
            src={image4Url}
            alt="Academy Image"
            width={500}
            height={500}
            className="w-full h-screen"
          />
        </>
      ) : (
        <iframe
          src={`${pdfUrl}#zoom=150`}
          className="w-full h-screen"
          title="Academy PDF"
          aria-label="Academy PDF Document"
        />
      )}
    </>
  );
};

export default PDFViewer;
