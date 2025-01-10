import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  projectType: z.string().min(1, "Project type is required"),
  preferredContactMethod: z.string().min(1, "Preferred contact method is required"),
});

export type ContactFormInputs = z.infer<typeof contactSchema>;
