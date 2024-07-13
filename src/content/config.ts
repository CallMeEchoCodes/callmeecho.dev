import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updated: z
			.string()
			.optional()
			.or(z.date().optional())
			.transform((val) => (val ? new Date(val) : undefined)),
		tags: z.array(z.string()).optional(),
		hero: image().optional(),
	}),
});

const projects = defineCollection({
	schema: ({ image }) => z.object({
		name: z.string(),
		description: z.string(),
		icon: image().optional(),
		link: z.string().optional(),
		order: z.number(),
		tags: z.array(z.string()).optional(),
	}),
	type: "data",
});

export const collections = { blog, projects };
