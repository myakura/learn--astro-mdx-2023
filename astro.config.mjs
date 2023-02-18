import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sectionize from 'remark-sectionize';

export default defineConfig({
	integrations: [
		mdx({
			remarkPlugins: [sectionize],
		}),
	],
});
