import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}).optional(),
	}),
});

export const collections = {
	blog: blog,
};
