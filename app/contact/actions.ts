"use server";

import { Resend } from "resend";
import { z } from "zod";
import {
  contactFields,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

const oneLine = /^[^\r\n]*$/;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Enter your name" })
    .max(100, { error: "Keep your name under 100 characters" })
    .regex(oneLine, { error: "Enter your name on one line" }),
  email: z
    .string()
    .trim()
    .pipe(z.email({ error: "Enter a valid email address, like name@example.com" })),
  phone: z
    .string()
    .trim()
    .max(40, { error: "Keep the phone number under 40 characters" })
    .regex(oneLine, { error: "Enter the phone number on one line" }),
  company: z
    .string()
    .trim()
    .max(120, { error: "Keep the company name under 120 characters" })
    .regex(oneLine, { error: "Enter the company name on one line" }),
  service: z
    .string()
    .refine((value) => value === "" || value === "not-sure" || Boolean(getService(value)), {
      error: "Choose a service from the list",
    }),
  message: z
    .string()
    .trim()
    .min(20, { error: "Tell us a bit more about what you need (at least 20 characters)" })
    .max(5000, { error: "Keep your message under 5,000 characters" }),
});

const sendFailed = `We couldn't send your message just now. Please try again, or email us at ${site.contact.email}.`;

export async function sendContactMessage(
  _previous: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = Object.fromEntries(
    contactFields.map((field) => [field, String(formData.get(field) ?? "")])
  ) as Record<ContactField, string>;

  // Spam trap: people never see this field, so anything in it came from a bot.
  // Report success so the bot moves on, but send nothing.
  if (String(formData.get("form_check") ?? "") !== "") {
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "Contact form: RESEND_API_KEY and CONTACT_TO_EMAIL must be set to send messages."
    );
    return { status: "error", message: sendFailed, values };
  }

  const { name, email, phone, company, service, message } = parsed.data;
  const serviceTitle =
    service === "not-sure" ? "Not sure yet" : getService(service)?.title;

  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    company && `Company: ${company}`,
    serviceTitle && `Service: ${serviceTitle}`,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "PrimeAxis Website <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New enquiry from ${name}${serviceTitle ? ` (${serviceTitle})` : ""}`,
    text: `${details}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend did not accept the message.", error);
    return { status: "error", message: sendFailed, values };
  }

  return { status: "success" };
}
