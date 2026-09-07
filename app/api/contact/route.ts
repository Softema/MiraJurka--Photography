import { NextRequest, NextResponse } from "next/server";
import { contactSchema, serviceLabels } from "@/lib/contactSchema";

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Neplatný formát dat." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neplatná data formuláře." },
      { status: 422 }
    );
  }

  const data = parsed.data;

  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/mirekkjurka@seznam.cz",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://www.mirekjurkafoto.cz/",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "",
          service: serviceLabels[data.service] ?? data.service,
          message: data.message,
          _subject: `Nová poptávka: ${
            serviceLabels[data.service] ?? data.service
          } – ${data.name}`,
          _replyto: data.email,
          _captcha: "false",
          _honey: "",
        }),
      }
    );

    const rawResult = await res.text();

    console.log(
      "[contact] formsubmit status:",
      res.status,
      "body:",
      rawResult
    );

    let result: { success?: boolean | string } = {};

    try {
      result = JSON.parse(rawResult);
    } catch {
      console.warn("[contact] FormSubmit response is not valid JSON.");
    }

    const success =
      res.ok &&
      (result.success === true || result.success === "true");

    if (!success) {
      return NextResponse.json(
        {
          error: "Chyba při odesílání e-mailu. Zkuste to prosím znovu.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] request failed:", error);

    return NextResponse.json(
      {
        error: "Chyba při odesílání e-mailu. Zkuste to prosím znovu.",
      },
      { status: 502 }
    );
  }
}