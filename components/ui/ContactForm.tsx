"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";

const serviceOptions = [
  { value: "iris", label: "IRIS Fotografie duhovky" },
  { value: "portret", label: "Portréty / Rodinné focení" },
  { value: "svatba-pul", label: "Svatba – Půlden (6 hod.)" },
  { value: "svatba-cel", label: "Svatba – Celý den (12 hod.)" },
  { value: "jine", label: "Jiná poptávka" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error ?? "Chyba při odesílání.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Neočekávaná chyba.");
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 text-[#F5F0E8] font-body text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#C9A961] transition-colors duration-300";
  const labelBase =
    "block text-xs tracking-[0.15em] uppercase text-[#F5F0E8]/40 font-body mb-2";
  const errorBase = "mt-1.5 text-xs text-red-400 font-body";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full border border-[#C9A961]/50 flex items-center justify-center mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#C9A961]"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-3xl font-light italic text-[#C9A961] mb-3">
          Odesláno
        </h3>
        <p className="text-[#F5F0E8]/60 font-body text-sm leading-relaxed max-w-sm">
          Děkuji za vaši poptávku. Ozvím se vám nejpozději do 48 hodin.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs tracking-[0.15em] uppercase text-[#C9A961]/60 font-body hover:text-[#C9A961] transition-colors"
        >
          Odeslat další poptávku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {/* Honeypot — skryté pole pro spam boty */}
      <input
        type="text"
        {...register("website")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Jméno */}
      <div>
        <label htmlFor="name" className={labelBase}>
          Jméno a příjmení *
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Jan Novák"
          {...register("name")}
          className={inputBase}
        />
        {errors.name && (
          <p className={errorBase}>{errors.name.message}</p>
        )}
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="email" className={labelBase}>
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="vas@email.cz"
          {...register("email")}
          className={inputBase}
        />
        {errors.email && (
          <p className={errorBase}>{errors.email.message}</p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className={labelBase}>
          Telefon (volitelné)
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+420 xxx xxx xxx"
          {...register("phone")}
          className={inputBase}
        />
        {errors.phone && (
          <p className={errorBase}>{errors.phone.message}</p>
        )}
      </div>

      {/* Typ služby */}
      <div>
        <label htmlFor="service" className={labelBase}>
          Typ služby *
        </label>
        <select
          id="service"
          {...register("service")}
          className={`${inputBase} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#1A1A1A]">
            Vyberte...
          </option>
          {serviceOptions.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-[#1A1A1A]"
            >
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className={errorBase}>{errors.service.message}</p>
        )}
      </div>

      {/* Zpráva */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Vaše zpráva *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Řekněte mi o sobě a vašich představách..."
          {...register("message")}
          className={`${inputBase} resize-none`}
        />
        {errors.message && (
          <p className={errorBase}>{errors.message.message}</p>
        )}
      </div>

      {/* GDPR souhlas */}
      <div className="flex items-start gap-3">
        <input
          id="gdprConsent"
          type="checkbox"
          {...register("gdprConsent")}
          className="mt-1 w-4 h-4 accent-[#C9A961] cursor-pointer flex-shrink-0"
        />
        <label
          htmlFor="gdprConsent"
          className="text-[#F5F0E8]/50 font-body text-xs leading-relaxed cursor-pointer"
        >
          Souhlasím se{" "}
          <a
            href="/gdpr"
            target="_blank"
            className="text-[#C9A961] underline hover:no-underline"
          >
            zpracováním osobních údajů
          </a>{" "}
          za účelem vyřízení mé poptávky. *
        </label>
      </div>
      {errors.gdprConsent && (
        <p className={`${errorBase} -mt-5`}>{errors.gdprConsent.message}</p>
      )}

      {/* Chybová hláška */}
      {status === "error" && (
        <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-400 font-body text-sm">
          {errorMsg || "Nastala chyba. Zkuste to prosím znovu nebo mě kontaktujte přímo."}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-[#C9A961] text-[#0A0A0A] font-body text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#D4AF85] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Odesílám..." : "Odeslat poptávku"}
      </button>
    </form>
  );
}
