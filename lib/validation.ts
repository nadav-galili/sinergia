import { z } from "zod";

export const formSchema = z.object({
  name: z.string().max(40).min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, { message: "Message is required" }),
});

export const blogSignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});
