import rss from '@astrojs/rss';
import { getAllPosts, getPostUrl } from '../lib/content';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../lib/site';

export async function GET() {
	const posts = await getAllPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: SITE_URL,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: getPostUrl(post),
		})),
		customData: `<language>en-us</language>`,
	});
}
