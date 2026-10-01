import { NextResponse } from "next/server";
import { validate, validateFile } from "@/lib/validation";

export async function POST(req: Request) {
  let fields: Record<string, unknown>;
  let file: File | null = null;
  try {
    if ((req.headers.get("content-type") ?? "").includes("multipart/form-data")) {
      const fd = await req.formData();
      fields = Object.fromEntries([...fd.entries()].filter(([, v]) => typeof v === "string"));
      const f = fd.get("file");
      file = f instanceof File && f.size > 0 ? f : null;
    } else {
      fields = await req.json();
    }
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  // Honeypot: bots fill this hidden field. Pretend success and drop the message.
  if (typeof fields.website === "string" && fields.website.trim() !== "") return NextResponse.json({ ok: true });

  const result = validate(fields);
  const fileError = validateFile(file);
  if (!result.ok || fileError) {
    const errors = { ...(result.ok ? {} : result.errors), ...(fileError ? { file: fileError } : {}) };
    return NextResponse.json({ errors }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !to || !from) {
    return NextResponse.json({ error: "Online requests are not set up yet. Please call or WhatsApp us." }, { status: 503 });
  }

  const { name, company, phone, email, service, location, message } = result.data;
  const details = [
    ["Name", name],
    ["Company", company],
    ["Phone", phone],
    ["Email", email],
    ["Service", service],
    ["Project location", location],
    ["Attachment", file?.name ?? ""],
  ].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Quote request: ${service} (${name})`,
      text: `${details.join("\n")}\n\n${message}`,
      ...(email ? { reply_to: email } : {}),
      ...(file ? { attachments: [{ filename: file.name.slice(0, 120), content: Buffer.from(await file.arrayBuffer()).toString("base64") }] } : {}),
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "We could not send your request. Please call or WhatsApp us." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
