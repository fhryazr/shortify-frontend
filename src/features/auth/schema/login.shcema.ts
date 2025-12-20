import z from "zod"

export const loginZodSchema = z.object({
  email: z.email().min(1, "Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})