"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();

  return (
    <>
      <h1 className="text-2xl font-bold text-primary underline text-center">
        academy course no.{params.id}
      </h1>
      <div>{params.id}</div>
    </>
  );
};

export default Page;
