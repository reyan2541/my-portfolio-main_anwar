import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long." })
    .max(50, { message: "First name cannot exceed 50 characters." }),

  lastname: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long." })
    .max(50, { message: "Last name cannot exceed 50 characters." }),

  email: z.string().email({ message: "Please enter a valid email address." }),

  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters long." })
    .max(50, { message: "Subject cannot exceed 50 characters." }),

  message: z.string().refine(
    (value) => {
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount >= 10 && wordCount <= 100;
    },
    { message: "Message must be between 10 and 100 words." }
  ),
});
