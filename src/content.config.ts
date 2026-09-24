import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["completed", "in-progress"]),
    duration: z.string().nullable(),
    tags: z.array(z.string()),
    images: z.array(z.string()),
    github: z.string().url().nullable(),
    website: z.string().url().nullable(),
    brief: z.string().nullable(),
    slides: z.string().nullable(),
    size: z.enum(["sm", "lg"]),
    spotlight: z.boolean(),
    order: z.number(),
  }),
});

export const collections = { projects };
