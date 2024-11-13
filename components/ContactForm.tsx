"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isPending = false;
  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="name" className="startup-form_label">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          className="startup-form_input"
          required
          placeholder="Name"
        />
        {errors.name && <p className="startup-form_error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="startup-form_label">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          className="startup-form_input"
          required
          placeholder="Email"
        />
        {errors.email && <p className="startup-form_error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="startup-form_label">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          className="startup-form_textarea"
          required
          placeholder="Message"
        />
        {errors.message && (
          <p className="startup-form_error">{errors.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default ContactForm;
