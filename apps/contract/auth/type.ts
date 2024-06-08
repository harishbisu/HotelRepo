import { z } from "zod";
export const RegisterDto = z.object({
  name: z.string(),
  email: z
    .string()
    .email()
    .transform((email) => email.toLowerCase().trim()),
  phone: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});

export const LoginDto = z.object({
  email: z.string(),
  password: z.string(),
});
