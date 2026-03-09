import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string().min(1),
		pubDate: z.date(),
		link: z.string().optional(),
		description: z.string().min(1),
		author: z.string().min(1),
		image: z.object({
			url: z.string().min(1),
			alt: z.string().min(1),
		}),
		tags: z.array(z.string().min(1)).default([]),
	}),
});

export const collections = {
	posts: postsCollection,
};
