import { defineField, defineType } from "sanity";
import { AddUserIcon } from "@sanity/icons";

export const blogSignIn = defineType({
  name: "blogSignIn",
  title: "Blog Sign In",
  type: "document",
  icon: AddUserIcon,
  fields: [
    defineField({
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
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
      title: "email",
    },
  },
});
