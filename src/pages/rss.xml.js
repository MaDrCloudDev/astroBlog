import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
	return rss({
		title: "MaDr | Blog",
		description: "Personal blog of MaDr",
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
