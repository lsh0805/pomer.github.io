import {defineCollection, reference, z} from 'astro:content';
import {glob} from "astro/loaders";

const categories = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

const tags = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: reference('categories').optional(),
    tag: z.array(reference('tags')).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});

export const collections = { posts, categories, tags };