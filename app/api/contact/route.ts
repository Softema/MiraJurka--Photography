import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, serviceLabels } from "@/lib/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting (IP → timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hodina
const RATE_LIMIT_MAX = 5; // max 5 odeslaných za hodinu z jedné IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= RATE_LIMIT_MAX) return false;

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

export async function POST(request: NextRequest) {
  // Získat IP adresu
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  // Rate limiting
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Příliš mnoho požadavků. Zkuste to prosím za hodinu." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  // Validace
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Neplatná data formuláře.", issues: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message, website } = result.data;

  // Honeypot check
  if (website && website.length > 0) {
    // Tichá 200 odpověď pro spam boty
    return NextResponse.json({ success: true });
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? "info@miroslav-jurka.cz";
  const serviceLabel = serviceLabels[service] ?? service;

  try {
    // Email fotografovi
    await resend.emails.send({
      from: "Web Miroslav Jurka <noreply@miroslav-jurka.cz>",
      to: contactEmail,
      replyTo: email,
      subject: `Nová poptávka: ${serviceLabel} – ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F2; color: #1A1A1A;">
          <h1 style="font-size: 24px; font-weight: 300; margin-bottom: 4px; color: #1A1A1A;">
            Nová poptávka
          </h1>
          <p style="color: #B8956A; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 32px;">
            ${serviceLabel}
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; opacity: 0.5; font-size: 13px; width: 120px;">Jméno</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; opacity: 0.5; font-size: 13px;">E-mail</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; font-size: 15px;">${email}</td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; opacity: 0.5; font-size: 13px;">Telefon</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; font-size: 15px;">${phone}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; opacity: 0.5; font-size: 13px;">Služba</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E2D9; color: #1A1A1A; font-size: 15px;">${serviceLabel}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #F0EBE3; border-left: 2px solid #B8956A;">
            <p style="font-size: 13px; color: #1A1A1A; opacity: 0.5; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">Zpráva</p>
            <p style="font-size: 15px; color: #1A1A1A; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 32px; font-size: 12px; color: #1A1A1A; opacity: 0.3;">
            Odesláno z webu miroslav-jurka.cz
          </p>
        </div>
      `,
    });

    // Potvrzovací email klientovi
    await resend.emails.send({
      from: "Miroslav Jurka <noreply@miroslav-jurka.cz>",
      to: email,
      subject: "Potvrzení poptávky – Miroslav Jurka Fotografie",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0A0A0A; color: #F5F0E8;">
          <h1 style="font-size: 28px; font-weight: 300; font-style: italic; color: #C9A961; margin-bottom: 4px;">
            Děkuji za zájem
          </h1>
          <p style="color: #F5F0E8; font-size: 16px; opacity: 0.7; margin-bottom: 32px;">
            Miroslav Jurka Fotografie
          </p>

          <p style="font-size: 16px; color: #F5F0E8; line-height: 1.8; margin-bottom: 16px;">
            Ahoj ${name},
          </p>
          <p style="font-size: 16px; color: #F5F0E8; opacity: 0.8; line-height: 1.8; margin-bottom: 16px;">
            Vaši poptávku na <strong style="color: #C9A961;">${serviceLabel}</strong> jsem přijal.
            Ozvím se vám nejpozději do 48 hodin s dostupnými termíny a případnými dotazy.
          </p>
          <p style="font-size: 16px; color: #F5F0E8; opacity: 0.8; line-height: 1.8; margin-bottom: 32px;">
            Těším se na naše společné focení.
          </p>

          <p style="font-size: 15px; color: #F5F0E8; margin-bottom: 4px;">
            S pozdravem,
          </p>
          <p style="font-size: 18px; color: #C9A961; font-style: italic;">
            Miroslav Jurka
          </p>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(245,240,232,0.1);">
            <p style="font-size: 12px; color: #F5F0E8; opacity: 0.3; line-height: 1.6;">
              Tento e-mail byl automaticky odeslán ze systému miroslav-jurka.cz.<br/>
              Neodpovídejte na tuto adresu – použijte přímý kontakt na fotografa.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Chyba při odesílání. Zkuste to prosím znovu." },
      { status: 500 }
    );
  }
}
