"use client";

import { CircleCheckIcon, LoaderCircleIcon, SendIcon } from "lucide-react";
import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import { sendContactMessage } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import type { ContactField, ContactFormState } from "@/lib/contact";
import { site } from "@/lib/site";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm({
  serviceOptions,
}: {
  serviceOptions: { value: string; label: string }[];
}) {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  // Lets the visitor go back to an empty form after a successful send.
  const [dismissed, setDismissed] = useState<ContactFormState | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // After a failed submit, move focus to the first field to fix, or to the
  // error message when sending failed. The submit button is at the bottom,
  // so without this the message can sit out of view.
  useEffect(() => {
    if (state.status !== "error") return;
    const form = formRef.current;
    const target =
      form?.querySelector<HTMLElement>('[aria-invalid="true"]') ??
      form?.querySelector<HTMLElement>('[role="alert"]');
    target?.focus();
  }, [state]);

  if (state.status === "success" && dismissed !== state) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border bg-card p-6 md:p-10"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-tint text-corporate">
          <CircleCheckIcon className="size-6" aria-hidden />
        </span>
        <h2 className="text-2xl leading-tight font-bold tracking-tight text-navy">
          Thanks, your message is on its way
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
          We&apos;ll reply within {site.contact.responseTime}. If it&apos;s urgent,
          call us on {site.contact.phone}.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-2 h-11 px-5"
          onClick={() => setDismissed(state)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? state.values : undefined;

  const fieldProps = (field: ContactField) => ({
    id: field,
    name: field,
    defaultValue: values?.[field] ?? "",
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      action={formAction}
      className="relative flex flex-col gap-5 rounded-xl border bg-card p-6 md:p-8"
    >
      {state.status === "error" && (
        <p
          role="alert"
          tabIndex={-1}
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm leading-relaxed text-destructive outline-none"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" field="name" required errors={errors.name}>
          <Input {...fieldProps("name")} autoComplete="name" required className="h-11" />
        </Field>
        <Field label="Email" field="email" required errors={errors.email}>
          <Input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            className="h-11"
          />
        </Field>
        <Field label="Phone" field="phone" errors={errors.phone}>
          <Input {...fieldProps("phone")} type="tel" autoComplete="tel" className="h-11" />
        </Field>
        <Field label="Company" field="company" errors={errors.company}>
          <Input {...fieldProps("company")} autoComplete="organization" className="h-11" />
        </Field>
      </div>

      <Field label="Service you're interested in" field="service" errors={errors.service}>
        {/* A select only reads defaultValue when it mounts, so remount it to refill the choice. */}
        <NativeSelect
          key={values?.service ?? ""}
          {...fieldProps("service")}
          className="w-full [&_select]:h-11"
        >
          <NativeSelectOption value="">Choose a service</NativeSelectOption>
          {serviceOptions.map((option) => (
            <NativeSelectOption key={option.value} value={option.value}>
              {option.label}
            </NativeSelectOption>
          ))}
          <NativeSelectOption value="not-sure">Not sure yet</NativeSelectOption>
        </NativeSelect>
      </Field>

      <Field label="How can we help?" field="message" required errors={errors.message}>
        <Textarea
          {...fieldProps("message")}
          required
          rows={6}
          placeholder="Tell us about your project, timeline and budget."
          className="min-h-36"
        />
      </Field>

      {/* Spam trap, hidden from people and assistive technology. The name avoids
          words like "website" or "company" that browsers and password managers autofill. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="form_check">Leave this field empty</label>
        <input
          id="form_check"
          name="form_check"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          data-1p-ignore
          data-lpignore="true"
        />
      </div>

      <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-12 w-full gap-2 px-6 text-[0.9375rem] font-semibold sm:w-auto"
        >
          {pending ? (
            <>
              <LoaderCircleIcon className="animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <SendIcon aria-hidden />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  field,
  required = false,
  errors,
  children,
}: {
  label: string;
  field: ContactField;
  required?: boolean;
  errors?: string[];
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={field} className="gap-1 text-sm font-semibold text-navy">
        {label}
        {required ? (
          <span aria-hidden className="text-destructive">
            *
          </span>
        ) : (
          <span className="font-normal text-muted-foreground">(optional)</span>
        )}
      </Label>
      {children}
      {errors?.[0] && (
        <p id={`${field}-error`} className="text-sm text-destructive">
          {errors[0]}
        </p>
      )}
    </div>
  );
}
