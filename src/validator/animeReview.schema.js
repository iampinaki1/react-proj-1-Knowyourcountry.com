import { z } from "zod";

export const animeReviewSchema = z.object({
  animename: z
    .string()
    .trim()
    .min(1, "Anime name is required"),

  email: z
    .string()
    .email("Invalid email address"),

  rating: z
    .coerce.number()
    .min(1, "Min rating is 1")
    .max(5, "Max rating is 5"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required"),
});
