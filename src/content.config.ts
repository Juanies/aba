import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),
        }),
});

const newspaperPosts = defineCollection({
    loader: glob({ base: "./src/content/newspapers", pattern: "**/*.md" }),
    schema: z.object({
        newspaperId: z.string(),
        category: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        author: z.string(),
        date: z.coerce.date(),
        cover: z.string(),
        contentPath: z.string(),
    }),
});

export const collections = { blog, newspaperPosts };
