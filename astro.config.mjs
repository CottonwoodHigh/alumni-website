// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cottonwood Alumni',
			social: {
				instagram: 'https://www.instagram.com/CWOODCOLTS/',
				linkedin: 'https://www.linkedin.com/groups/13573495/',
				github: 'https://github.com/lukehsiao/cottonwood',
				email: 'mailto:admin@cottonwoodhigh.school',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
