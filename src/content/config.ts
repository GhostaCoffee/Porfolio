import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:     z.string(),
    date:      z.date(),
    updatedAt: z.date().optional(),
    excerpt:   z.string().optional(),
    tags:      z.array(z.string()).default([]),
    published: z.boolean().default(false),
  }),
});

export const collections = { blog };
