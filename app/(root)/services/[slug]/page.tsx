"use client";

//get the slug from the url
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  return <div>{params.slug}</div>;
};

export default page;
