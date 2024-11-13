import { defineField, defineType } from "sanity";

export const ourCustomer = defineType({
  name: "ourcustomer",
  title: "OurCustomer",
  type: "document",

  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),

    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
