import { defineQuery } from "next-sanity";

export const GET_OUR_CUSTOMERS = defineQuery(`*[_type == "ourcustomer"]{
    _id,
    id,
    name,
    "imageUrl": image.asset->url
  }|order(id asc)`);

export const GET_SERVICE_BY_SLUG =
  defineQuery(`*[_type == "ourservices" && slug.current == $slug][0]{
  _id,
  id,
  title,
  description,
  "imageUrl": image.asset->url,
  blockContent
}`);

export const GET_POSTS =
  defineQuery(`*[_type=="post" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  publishedAt,
  author->{
    _id,
    name,
    image,
  },
  views,
  body,
  category,
  "mainImageUrl": mainImage.asset->url,
}`);
