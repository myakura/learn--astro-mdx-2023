import { z, defineCollection } from 'astro:content';

// name: Page 1
// collection: collection2
// date: 2023-03-02
// tags:
//   - foo
//   - bar
// draft: false

const collection2 = defineCollection({
	schema: z.object({
		name: z.string(),
		collection: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
		draft: z.boolean(),
	}),
});

export const collections = {
	collection2: collection2,
};
