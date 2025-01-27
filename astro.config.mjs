// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	site: 'https://alumni.cottonwoodhigh.school',
	integrations: [
		starlight({
			title: 'Cottonwood Alumni',
			social: {
				instagram: 'https://www.instagram.com/CWOODCOLTS/',
				linkedin: 'https://www.linkedin.com/groups/13573495/',
				email: 'mailto:admin@cottonwoodhigh.school',
			},
			editLink: {
				baseUrl: 'https://github.com/lukehsiao/cottonwood-alumni/edit/main/',
			},
			favicon: 'favicon.png',
			plugins: [starlightImageZoom()],
			sidebar: [
				{
					label: 'Introduction',
          items: [
              // Each item here is one entry in the navigation menu.
              { label: 'Getting Started', slug: 'guides/getting-started' },
          ],
				},
				{
					label: 'Class Pages',
					autogenerate: { directory: 'classes' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
