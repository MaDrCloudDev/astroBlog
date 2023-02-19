import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		image({
			cacheDir: "./.cache/image",
		}),
	],
	markdown: {
		remarkPlugins: [rehypeAccessibleEmojis],
	},
});
