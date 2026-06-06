import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string().optional(),
    thumbnail: z.string().optional(),
    live: z.string().url().optional().nullable(),
    github: z.string().url().optional().nullable(),
    tech: z.array(z.string()).optional(),
    status: z.string().optional(),
    position: z.number().optional(),
    period: z.string().optional(),
    role: z.string().optional(),
    highlights: z.array(z.string()).optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    scope: z.array(z.string()).optional(),
  }),
});

const experiencesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    from: z.string(),
    to: z.string(),
    skills: z.string().optional(),
    link: z.string().optional().nullable(),
    timeline: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experiences: experiencesCollection,
  blog: blogCollection,
};
