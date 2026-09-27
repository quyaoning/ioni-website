import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const subteams = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/subteams' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      stage: z.string(),
      summary: z.string(),
      order: z.number(),
      status: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = { subteams };
