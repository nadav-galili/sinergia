import { defineQuery } from "next-sanity";

export const GET_OUR_CUSTOMERS = defineQuery(`*[_type == "ourcustomer"]{
    _id,
    id,
    name,
    "imageUrl": image.asset->url
  }|order(id asc)`);
