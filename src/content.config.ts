import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

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

const skills = defineCollection({
  loader: file("src/content/skills.json"),
  schema: z.object({
    name: z.string(),
    icon: z.string(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/education" }),
  schema: z.object({
    theme: z.string(),
    accent: z.string(),
    wide: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string(),
    meta: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    highlights: z.string(),
    project: z.string().nullable(),
    story: z.string().nullable(),
    order: z.number(),
  }),
});

export const collections = { projects, skills, education };
