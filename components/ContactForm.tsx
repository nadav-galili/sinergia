"use client";
import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createContact } from "@/lib/actions";

const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      await formSchema.parseAsync(formValues);
      const result = await createContact(prevState, formData);

      if (result.status === "SUCCESS") {
        toast({
          title: "הודעה נשלחה בהצלחה",
          description: "נחזור אליך בהקדם האפשרי",
        });
        router.push("/");
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
    <form action={formAction} className="startup-form rounded-lg px-4 py-8">
      <h2 className="px-6  py-3  text-[32px] font-bold text-primary sm:leading-[64px] leading-[46px] max-w-full ">
        צור קשר
      </h2>
      <div>
        <label htmlFor="name" className="startup-form_label">
          שם:
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          className="startup-form_input"
          required
          placeholder="שם"
        />
        {errors.name && <p className="startup-form_error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="startup-form_label">
          אימייל:
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
      <div>
        <label htmlFor="message" className="startup-form_label">
          הודעה:
        </label>
        <Textarea
          id="message"
          name="message"
          className="startup-form_textarea"
          required
          placeholder="הודעה"
        />
        {errors.message && (
          <p className="startup-form_error">{errors.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}>
        {isPending ? "שולח..." : "שלח"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default ContactForm;
