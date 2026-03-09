import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"posts">;

const sortByPublishDateDesc = (a: BlogPost, b: BlogPost) =>
	b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
export const normalizeTag = (tag: string): string => tag.trim().toLowerCase();

export const getAllPosts = async (): Promise<BlogPost[]> => {
	const posts = await getCollection("posts");
	return [...posts].sort(sortByPublishDateDesc);
};

export const getSortedTags = (posts: BlogPost[]): string[] =>
	[
		...new Set(
			posts.flatMap((post) => post.data.tags.map((tag) => normalizeTag(tag)))
		),
	].sort((a, b) => a.localeCompare(b));

export const getPostsForTag = (posts: BlogPost[], tag: string): BlogPost[] =>
	posts.filter((post) =>
		post.data.tags.some((postTag) => normalizeTag(postTag) === normalizeTag(tag))
	);

export const getPostUrl = (post: BlogPost): string => `/posts/${post.slug}/`;
