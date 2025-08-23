import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const itemCollection = defineCollection({
    loader: file('src/data/items.json'),
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        description: z.string(),
        priority: z.boolean()
    })
});

export const collections = { itemCollection };