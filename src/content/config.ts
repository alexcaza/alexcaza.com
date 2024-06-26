import { defineCollection, z } from 'astro:content';

const personal = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		created_date: z.coerce.date(),
	}),
});

export const collections = { personal };
