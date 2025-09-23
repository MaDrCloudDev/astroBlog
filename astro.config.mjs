import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://madr.blog',
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss(),],
    },
});