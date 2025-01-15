import {defineCollection, reference, z} from 'astro:content';
import {file} from "astro/loaders";

const categories = defineCollection({
  loader: file("src/content/categories/categories.json"),
  schema: z.object({
    name: z.object({
      ko: z.string(),
      ja: z.string(),
      en: z.string(),
    }),
    description: z.string().optional(),
  }),
});

const tags = defineCollection({
  schema: z.object({
    name: z.object({
      ko: z.string(),
      ja: z.string(),
      en: z.string(),
    }),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: reference('categories').optional(),
    tags: z.array(reference('tags')).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});

export const collections = {posts, categories, tags};