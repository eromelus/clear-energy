import { z } from "zod";

export const formSchema = z.object({
  
    name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
    company: z.string().min(1, "Company name is required"),
    options: z.enum([
      "Solar Decommission",
      "Recycling Services",
      "OEM Replacements",
    ], {
      errorMap: () => ({ message: "Please select an option" })
    }),
    emailAddress: z.string().email("Invalid email address").nonempty("Email address is required"),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number").nonempty("Phone number is required"),
    message: z.string().min(10, "Message must be at least 10 characters").nonempty("Message is required"),
  });