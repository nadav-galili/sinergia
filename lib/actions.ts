"use server";

import { CHECK_IF_EMAIL_EXISTS } from "@/sanity/lib/queries";
import { parseServerActionResponse } from "./utils";

import { writeClient } from "@/sanity/lib/write-client";
import { sanityFetch } from "@/sanity/lib/live";

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

export const createBlogSignIn = async (state: any, form: FormData) => {
  const { email } = Object.fromEntries(Array.from(form));

  try {
    const blogSignIn = {
      email,
    };

    const result = await writeClient.create({
      _type: "blogSignIn",
      ...blogSignIn,
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

// Add this to your actions file
export async function checkEmailExists(email: string) {
  "use server";

  const exists = await sanityFetch({
    query: CHECK_IF_EMAIL_EXISTS,
    params: { email },
  });
  return exists?.data;
}
