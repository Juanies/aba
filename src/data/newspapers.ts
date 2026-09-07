import { getCollection, type CollectionEntry } from "astro:content";
import newspapers from "./newspapers.json";

export type Newspaper = (typeof newspapers)[number];
export type NewspaperPost = CollectionEntry<"newspaperPosts">;

export const categoryLabels: Record<string, string> = {
    noticias: "Noticias",
    reportajes: "Reportajes",
    entrevistas: "Entrevistas",
    deporte: "Deporte",
    internacional: "Internacional",
    unidades: "Unidades",
    cantina: "La cantina",
};

export function getNewspapers(): Newspaper[] {
    return newspapers;
}

export function getNewspaper(slug: string): Newspaper | undefined {
    return newspapers.find((newspaper) => newspaper.slug === slug);
}

export async function getNewspaperPosts(
    newspaperId: string,
): Promise<NewspaperPost[]> {
    const posts = await getCollection("newspaperPosts");

    return posts
        .filter((post) => post.data.newspaperId === newspaperId)
        .sort(
            (first, second) =>
                second.data.date.valueOf() - first.data.date.valueOf(),
        );
}

export async function getNewspaperPost(
    newspaperId: string,
    slug: string,
): Promise<NewspaperPost | undefined> {
    const posts = await getNewspaperPosts(newspaperId);
    return posts.find((post) => post.data.slug === slug);
}

export function getCategoryLabel(category: string): string {
    return categoryLabels[category] ?? category;
}
