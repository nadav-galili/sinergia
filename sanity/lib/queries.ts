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

export const POST_BY_ID_QUERY = defineQuery(
  `*[_type=="post" && _id==$id][0]{
  _id,
  title,
  slug,
  _createdAt,
  body[]{
      ...,
      asset->{
        _id,
        url // Fetch the actual URL here
      }
    },
    publishedAt,
  author->{
    _id,
    name,
 
  },
  views,
   category,
  "imageUrl":mainImage.asset->url,
   }
  `
);

export const POST_VIEWS_QUERY = defineQuery(
  `*[_type=="post" && _id==$id][0]{
   _id,
   views
  }`
);

export const CHECK_IF_EMAIL_EXISTS = defineQuery(
  `*[_type=="blogSignIn" && email==$email][0]{
  _id
  }`
);

export const GET_ACADEMY =
  defineQuery(`*[_type == "academy"] | order(_createdAt asc) {
  _id,
  title,
  sub_title,
  slug,
  icon
}`);

export const GET_ACADEMY_BY_ID =
  defineQuery(`*[_type == "academy" && _id == $id][0]{
  _id,
  title,
  sub_title,
  slug,
  "pdfUrl": pdf.asset->url
}`);
