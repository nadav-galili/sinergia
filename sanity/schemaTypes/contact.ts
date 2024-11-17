import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "message",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "submittedAt",
      type: "datetime",
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
