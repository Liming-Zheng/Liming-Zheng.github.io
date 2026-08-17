import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    order: z.number().default(99),
    venue: z.string(),
    status: z.string().optional(),
    homeSummary: z.string().optional(),
    researchQuestion: z.string(),
    approach: z.string(),
    evidence: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    video: z.string().optional(),
    videoPoster: z.string().optional(),
    videoCaption: z.string().optional(),
    role: z.string().optional(),
    contributions: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string()
        })
      )
      .default([]),
    media: z
      .array(
        z.object({
          title: z.string(),
          src: z.string(),
          poster: z.string().optional(),
          description: z.string().optional()
        })
      )
      .default([]),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
