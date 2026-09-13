export const contactFields = [
  "name",
  "email",
  "phone",
  "company",
  "service",
  "message",
] as const;

export type ContactField = (typeof contactFields)[number];

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<ContactField, string[]>>;
      /** What the visitor typed, so the form can be refilled. */
      values: Record<ContactField, string>;
    };
