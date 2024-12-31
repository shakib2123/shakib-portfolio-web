import { z } from "zod";

const contactValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  phone: z
    .string()
    .min(1, "Please provide a phone number!")
    .max(14, "Provide valid phone number!"),
  email: z.string().email("Please enter a valid email address!"),
  subject: z
    .string()
    .min(1, "Provide a subject!")
    .max(150, "Subject is too long!"),
  message: z
    .string()
    .min(1, "Provide a message!")
    .max(500, "Message is too long!"),
});

export default contactValidationSchema;
