import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    company: z.string(),
    options: z.enum([
      "Solar Decommission",
      "Recycling Services",
      "OEM Replacements",
    ]),
    emailAddress: z.string().email("Invalid email address"),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });