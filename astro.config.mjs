// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
			favicon: 'favicon.png',
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
			],
		}),
	],
});
