import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://alexcaza.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'catppuccin-macchiato',
				dark: 'catppuccin-latte'
			}
		}
	}
});
