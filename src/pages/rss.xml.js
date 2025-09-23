import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
	const posts = await getCollection("posts");
	return rss({
		title: "astroBlog | MaDr",
		description: "A blog template I made for Astro",
		site: "https://madr.blog/",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}