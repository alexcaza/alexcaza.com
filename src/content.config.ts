import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const personal = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/personal' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		created_date: z.coerce.date(),
	}),
});

export const collections = { personal };
