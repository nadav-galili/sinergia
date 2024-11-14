"use server";

import { parseServerActionResponse } from "./utils";

import { writeClient } from "@/sanity/lib/write-client";

export const createContact = async (state: any, form: FormData) => {
  const { name, email, message } = Object.fromEntries(Array.from(form));

  try {
    const contact = {
      name,
      email,
      message,
    };

    const result = await writeClient.create({
      _type: "contact",
      ...contact,
    });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      status: "ERROR",
      error: "Something went wrong",
    });
  }
};
