// schemas/post.ts
import { defineField, defineType } from "sanity";
import { ComposeIcon } from "@sanity/icons";

export const academy = defineType({
  name: "academy",
  title: "Academy",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    //  define a pdf
    defineField({
      name: "pdf",
      title: "PDF",
      type: "file",
    }),
    defineField({
      name: "image1",
      title: "image1",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "image2",
      title: "image2",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image3",
      title: "image3",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image4",
      title: "image4",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
});
