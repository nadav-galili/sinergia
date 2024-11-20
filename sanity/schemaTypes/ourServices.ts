import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const ourServices = defineType({
  name: "ourservices",
  title: "OurServices",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
