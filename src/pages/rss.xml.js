import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get(context) {
	return rss({
		title: "MaDr | Blog",
		description: "Personal blog of MaDr",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
	});
}
