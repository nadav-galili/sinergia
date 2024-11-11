"use client";

import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  return <div>{params.slug}</div>;
};

export default Page;
