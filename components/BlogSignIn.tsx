"use client";
import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { blogSignInSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createBlogSignIn } from "@/lib/actions";
import { checkEmailExists } from "@/lib/actions";

const BlogSignIn = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        email: formData.get("email") as string,
      };

      await blogSignInSchema.parseAsync(formValues);
      const emailExists = await checkEmailExists(formValues.email);

      if (emailExists) {
        toast({
          title: "כבר נרשמת לבלוג",
          description: "נשלח לך מייל כשיתפרסם פוסט חדש",
          variant: "destructive",
        });
        return;
      }

      const result = await createBlogSignIn(prevState, formData);

      if (result.status === "SUCCESS") {
        toast({
          title: "נרשמת לבלוג בהצלחה",
          description: "נשלח לך מייל כשיתפרסם פוסט חדש",
        });
        router.push("/blog");
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "שגיאה",
          description: "אנא בדוק את הטופס לשגיאות",
          variant: "destructive",
        });
        return { ...prevState, error: "validation error", status: "ERROR" };
      }

      toast({
        title: "שגיאה",
        description: "משהו השתבש",
        variant: "destructive",
      });
      return {
        ...prevState,
        error: "Something went wrong",
        status: "ERROR",
      };
    }
  };
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="w-full max-w-3xl mx-auto">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label htmlFor="email" className="startup-form_label">
            הירשם לבלוג
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            className="startup-form_input"
            required
            placeholder="אימייל"
          />
          {errors.email && <p className="startup-form_error">{errors.email}</p>}
        </div>
        <Button
          type="submit"
          className="blog-form_btn text-white"
          disabled={isPending}>
          {isPending ? "נרשם..." : "הירשם"}
          <Send className="size-6 mr-2" />
        </Button>
      </div>
    </form>
  );
};

export default BlogSignIn;
