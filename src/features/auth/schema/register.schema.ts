import z from "zod";

export const registerZodSchema = z.object({
  fullname: z.string().min(3, "Fullname must be at least 3 characters long"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})