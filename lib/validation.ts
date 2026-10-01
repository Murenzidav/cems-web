import { services } from "@/content/services";

export const serviceOptions = [...services.map((s) => s.title), "Other"];

export type ContactInput = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
  website?: string; // honeypot
};
export type Result = { ok: true; data: ContactInput } | { ok: false; errors: Record<string, string> };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isEmail = (v: string) => emailRe.test(v.trim());

// Optional attachment. Kept under 4 MB so the request fits serverless body limits.
export const MAX_FILE_BYTES = 4 * 1024 * 1024;
export const fileTypes: Record<string, string> = {
  "application/pdf": ".pdf",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
};
export const fileAccept = Object.values(fileTypes).concat(".jpeg").join(",");

export function validateFile(file: { size: number; type: string } | null | undefined): string | null {
  if (!file || file.size === 0) return null;
  if (!(file.type in fileTypes)) return "Please attach a PDF, Word document, JPG or PNG.";
  if (file.size > MAX_FILE_BYTES) return "The file is too large. The limit is 4 MB.";
  return null;
}

const str = (v: unknown) => String(v ?? "").trim();

export function validate(input: Partial<Record<keyof ContactInput, unknown>>): Result {
  const errors: Record<string, string> = {};
  const data: ContactInput = {
    name: str(input.name),
    company: str(input.company),
    phone: str(input.phone),
    email: str(input.email),
    service: str(input.service),
    location: str(input.location),
    message: str(input.message),
  };
  const digits = data.phone.replace(/\D/g, "");

  if (data.name.length < 2) errors.name = "Please enter your full name.";
  else if (data.name.length > 100) errors.name = "Please shorten your name.";
  if (data.company.length > 120) errors.company = "Please shorten the company name.";
  if (!data.phone && !data.email) errors.phone = "Please enter a phone number or an email address.";
  if (data.phone && (digits.length < 7 || digits.length > 15 || /[^\d\s+()-]/.test(data.phone))) errors.phone = "Please enter a valid phone number.";
  if (data.email && (!isEmail(data.email) || data.email.length > 120)) errors.email = "Please enter a valid email address.";
  if (!serviceOptions.includes(data.service)) errors.service = "Please choose a service.";
  if (data.location.length > 120) errors.location = "Please shorten the location.";
  if (data.message.length < 10) errors.message = "Please describe your project (at least 10 characters).";
  else if (data.message.length > 3000) errors.message = "Please keep the description under 3000 characters.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, data };
}
