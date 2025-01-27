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
			logo: {
				src: './src/assets/colt.png',
			},
			favicon: 'favicon.png',
			plugins: [starlightImageZoom()],
			sidebar: [
				{
					label: 'Start Here',
          items: [
              // Each item here is one entry in the navigation menu.
              { label: 'Introduction', slug: 'introduction' },
          ],
				},
				{
					label: 'Class Pages',
					autogenerate: { directory: 'classes' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			credits: true,
		}),
	],
});
