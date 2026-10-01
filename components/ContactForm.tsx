"use client";
import { useRef, useState } from "react";
import Icon from "./Icon";
import { fileAccept, serviceOptions, validate, validateFile } from "@/lib/validation";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error"; message: string };

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{label}{optional && <span className="opt"> (optional)</span>}</label>
      {children}
      {error && <span className="err" id={`${id}-err`}>{error}</span>}
    </div>
  );
}

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const a = (name: string) => ({ id: `q-${name}`, name, "aria-invalid": !!errors[name] || undefined, "aria-describedby": errors[name] ? `q-${name}-err` : undefined });

  function focusFirstError(errs: Record<string, string>) {
    const first = Object.keys(errs)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const file = fd.get("file") as File | null;
    const v = validate(Object.fromEntries(fd.entries()));
    const fileError = validateFile(file);
    const errs = { ...(v.ok ? {} : v.errors), ...(fileError ? { file: fileError } : {}) };
    if (Object.keys(errs).length) { setErrors(errs); setState({ kind: "idle" }); focusFirstError(errs); return; }
    if (!file || file.size === 0) fd.delete("file");

    setErrors({});
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { setState({ kind: "ok" }); form.reset(); setFileName(""); }
      else if (data.errors) { setErrors(data.errors); setState({ kind: "idle" }); focusFirstError(data.errors); }
      else setState({ kind: "error", message: data.error ?? "Something went wrong. Please call or WhatsApp us." });
    } catch {
      setState({ kind: "error", message: "Network error. Please check your connection and try again, or call us." });
    }
  }

  if (state.kind === "ok") {
    return (
      <div className="form-card form-done" role="status">
        <span className="done-icon"><Icon name="check" size={28} /></span>
        <h3>Thank you. Your request has been sent.</h3>
        <p>Our team will review your project details and get back to you.</p>
        <button type="button" className="btn btn-outline" onClick={() => setState({ kind: "idle" })}>Send another request</button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="form-card qf" onSubmit={onSubmit} noValidate>
      <div className="qf-grid">
        <Field id="q-name" label="Full name" error={errors.name}>
          <input {...a("name")} autoComplete="name" required />
        </Field>
        <Field id="q-company" label="Company" error={errors.company} optional>
          <input {...a("company")} autoComplete="organization" />
        </Field>
        <Field id="q-phone" label="Phone number" error={errors.phone}>
          <input {...a("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="+250 7xx xxx xxx" />
        </Field>
        <Field id="q-email" label="Email" error={errors.email}>
          <input {...a("email")} type="email" autoComplete="email" />
        </Field>
        <Field id="q-service" label="Service required" error={errors.service}>
          <select {...a("service")} defaultValue={defaultService ?? ""} required>
            <option value="" disabled>Choose a service</option>
            {serviceOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="q-location" label="Project location" error={errors.location} optional>
          <input {...a("location")} placeholder="e.g. Kicukiro, Kigali" />
        </Field>
      </div>
      <Field id="q-message" label="Project description" error={errors.message}>
        <textarea {...a("message")} rows={5} required placeholder="What do you need built, repaired or supplied? Include size, timing and any other details." />
      </Field>
      <Field id="q-file" label="Attach a document" error={errors.file} optional>
        <input {...a("file")} type="file" accept={fileAccept} className="file-input" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        <label className="file" htmlFor="q-file" aria-hidden="true">
          <Icon name="upload" size={20} />
          <span>{fileName || "Drawings, a BOQ or photos (PDF, Word, JPG or PNG, up to 4 MB)"}</span>
        </label>
      </Field>
      <div className="hp" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className="note">Please give a phone number or an email address so we can reply.</p>
      <button className="btn btn-primary btn-block" type="submit" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Sending..." : "Submit request"}
        {state.kind !== "sending" && <Icon name="arrow" size={18} />}
      </button>
      <div aria-live="polite">
        {state.kind === "error" && <p className="alert">{state.message}</p>}
      </div>
    </form>
  );
}
