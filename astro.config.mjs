// @ts-check
import { readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// The sidebar lists every Class page by decade. It reads the classes folder,
// so a new Class page needs no config edit. A file with another name would
// build as a page that the sidebar cannot show. So such a file stops the
// build. The code skips dotfiles, because Astro does not build them.
const classYears = readdirSync(new URL('./src/content/docs/classes/', import.meta.url))
	.filter((file) => !file.startsWith('.'))
	.map((file) => {
		const year = /^(\d{4})\.mdx$/.exec(file)?.[1];
		if (!year) {
			throw new Error(
				`src/content/docs/classes/${file} is not a Class page. Name Class pages YYYY.mdx.`,
			);
		}
		return year;
	})
	.sort();
const classDecades = [...Map.groupBy(classYears, (year) => `${year.slice(0, 3)}0s`)].map(
	([decade, years]) => ({
		label: decade,
		collapsed: true,
		items: years.map((year) => ({ label: year, slug: `classes/${year}` })),
	}),
);

const googleAnalyticsId = 'G-7HX3RTN97F';
// https://astro.build/config
export default defineConfig({
	site: 'https://alumni.cottonwoodhigh.school',
	integrations: [
		starlight({
			title: 'Cottonwood Alumni',
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
				replacesTitle: true,
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());

				  gtag('config', '${googleAnalyticsId}');
					`,
				},
			],
			expressiveCode: {
				themes: ['catppuccin-mocha', 'catppuccin-latte'],
				styleOverrides: { borderRadius: '0.5rem' },
			},
			customCss: ['./src/styles/custom.css', './src/fonts/font-face.css'],
			social: [
				{ icon: 'x.com', label: 'x.com', href: 'https://x.com/cwoodcolts' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/CWOODCOLTS/' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/cwoodcolts' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/groups/13573495/' },
				{ icon: 'email', label: 'Email', href: 'mailto:admin@cottonwoodhigh.school' },
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/CottonwoodHigh/alumni-website',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/CottonwoodHigh/alumni-website/edit/main/',
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
					items: classDecades,
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Authoring Content in Markdown',
							link: 'https://starlight.astro.build/guides/authoring-content/',
							attrs: { class: 'external-link' },
						},
						'guides/booking-cottonwood',
						'guides/create-a-page',
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Resources',
					items: [
						'resources/alumni-connections',
						'resources/sponsor',
						{
							label: 'Student Government Website',
							link: 'https://www.cwoodstampede.com/',
							attrs: { class: 'external-link' },
						},
					],
				},
			],
			lastUpdated: true,
			credits: true,
		}),
	],
});
