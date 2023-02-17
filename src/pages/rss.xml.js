import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
	return rss({
		title: "MaDr | Blog",
		description: "Personal blog of MaDr",
		site: "https://madr.blog/",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`,
	});
}
