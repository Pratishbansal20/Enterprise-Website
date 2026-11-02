import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    /** ≤ 60 characters */
    seoTitle: z.string().max(60),
    /** ≤ 155 characters */
    description: z.string().max(155),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(), // related category slug
    wa: z.string(),
    order: z.number(),
  }),
});

export const collections = { guides };
