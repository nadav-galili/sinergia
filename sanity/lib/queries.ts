import { defineQuery } from "next-sanity";

export const GET_OUR_CUSTOMERS = defineQuery(`*[_type == "ourcustomer"]{
    _id,
    name,
    "imageUrl": image.asset->url
    }`);
