import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sectionize from 'remark-sectionize';

export default defineConfig({
	markdown: {
		remarkPlugins: [sectionize],
	},
	integrations: [react(), mdx()],
});
