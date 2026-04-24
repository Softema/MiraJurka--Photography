import { NextRequest, NextResponse } from "next/server";
import { contactSchema, serviceLabels } from "@/lib/contactSchema";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný formát dat." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 422 });
  }

  const data = parsed.data;

  const res = await fetch("https://formsubmit.co/ajax/mirekkjurka@seznam.cz", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      service: serviceLabels[data.service] ?? data.service,
      message: data.message,
      _subject: `Nová poptávka: ${serviceLabels[data.service]} – ${data.name}`,
      _replyto: data.email,
      _captcha: "false",
      _honey: "",
    }),
  });

  const result = await res.json().catch(() => ({}));

  if (!res.ok || result.success !== "true") {
    return NextResponse.json(
      { error: "Chyba při odesílání e-mailu. Zkuste to prosím znovu." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
