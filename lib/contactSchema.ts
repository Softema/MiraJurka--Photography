import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Jméno musí mít alespoň 2 znaky")
    .max(100, "Jméno je příliš dlouhé"),
  email: z
    .string()
    .email("Neplatná e-mailová adresa")
    .max(200, "E-mail je příliš dlouhý"),
  phone: z
    .string()
    .max(20, "Telefon je příliš dlouhý")
    .optional()
    .or(z.literal("")),
  service: z.enum(["iris", "portret", "svatba-pul", "svatba-cel", "jine"], {
    error: "Vyberte prosím typ služby",
  }),
  message: z
    .string()
    .min(10, "Zpráva musí mít alespoň 10 znaků")
    .max(2000, "Zpráva je příliš dlouhá"),
  gdprConsent: z.literal(true, {
    error: "Souhlas se zpracováním osobních údajů je povinný",
  }),
  // honeypot — musí být prázdné
  website: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const serviceLabels: Record<string, string> = {
  iris: "IRIS Fotografie duhovky",
  portret: "Portréty / Rodinné focení",
  "svatba-pul": "Svatba – Půlden (6 hod.)",
  "svatba-cel": "Svatba – Celý den (12 hod.)",
  jine: "Jiná poptávka",
};
