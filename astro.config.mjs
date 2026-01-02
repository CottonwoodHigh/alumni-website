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
			expressiveCode: {
				themes: ['catppuccin-mocha', 'catppuccin-latte'],
		    styleOverrides: { borderRadius: '0.5rem' },
			},
			components: {
				Header: './src/components/Header.astro',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css',
			],
			social: [
				{ icon: 'x.com', label: 'x.com', href: 'https://x.com/cwoodcolts'},
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/CWOODCOLTS/'},
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/cwoodcolts'},
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/groups/13573495/'},
				{ icon: 'email', label: 'Email', href: 'mailto:admin@cottonwoodhigh.school'},
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CottonwoodHigh/alumni-website'},
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
          items: [
              {
              	label: '1970s',
              	collapsed: true,
								items: [
									{ label: "1971", slug: "classes/1971" },
									{ label: "1972", slug: "classes/1972" },
									{ label: "1973", slug: "classes/1973" },
									{ label: "1974", slug: "classes/1974" },
									{ label: "1975", slug: "classes/1975" },
									{ label: "1976", slug: "classes/1976" },
									{ label: "1977", slug: "classes/1977" },
									{ label: "1978", slug: "classes/1978" },
									{ label: "1979", slug: "classes/1979" },
								]
              },
              {
              	label: '1980s',
              	collapsed: true,
								items: [
									{ label: "1980", slug: "classes/1980" },
									{ label: "1981", slug: "classes/1981" },
									{ label: "1982", slug: "classes/1982" },
									// { label: "1983", slug: "classes/1983" },
									{ label: "1984", slug: "classes/1984" },
									{ label: "1985", slug: "classes/1985" },
									{ label: "1986", slug: "classes/1986" },
									{ label: "1987", slug: "classes/1987" },
									{ label: "1988", slug: "classes/1988" },
									{ label: "1989", slug: "classes/1989" },
								]
              },
              {
              	label: '1990s',
              	collapsed: true,
								items: [
									{ label: "1990", slug: "classes/1990" },
									{ label: "1991", slug: "classes/1991" },
									{ label: "1992", slug: "classes/1992" },
									{ label: "1993", slug: "classes/1993" },
									{ label: "1994", slug: "classes/1994" },
									{ label: "1995", slug: "classes/1995" },
									{ label: "1996", slug: "classes/1996" },
									// { label: "1997", slug: "classes/1997" },
									{ label: "1998", slug: "classes/1998" },
									{ label: "1999", slug: "classes/1999" },
								]
              },
              {
              	label: '2000s',
              	collapsed: true,
								items: [
									{ label: "2000", slug: "classes/2000" },
									{ label: "2001", slug: "classes/2001" },
									{ label: "2002", slug: "classes/2002" },
									{ label: "2003", slug: "classes/2003" },
									{ label: "2004", slug: "classes/2004" },
									{ label: "2005", slug: "classes/2005" },
									{ label: "2006", slug: "classes/2006" },
									{ label: "2007", slug: "classes/2007" },
									{ label: "2008", slug: "classes/2008" },
									{ label: "2009", slug: "classes/2009" },
								]
              },
              {
              	label: '2010s',
              	collapsed: true,
								items: [
									{ label: "2010", slug: "classes/2010" },
									{ label: "2011", slug: "classes/2011" },
									// { label: "2012", slug: "classes/2012" },
									{ label: "2013", slug: "classes/2013" },
									{ label: "2014", slug: "classes/2014" },
									// { label: "2015", slug: "classes/2015" },
									{ label: "2016", slug: "classes/2016" },
									// { label: "2017", slug: "classes/2017" },
									// { label: "2018", slug: "classes/2018" },
									// { label: "2019", slug: "classes/2019" },
								]
              },
              {
              	label: '2020s',
              	collapsed: true,
								items: [
									// { label: "2020", slug: "classes/2020" },
									// { label: "2021", slug: "classes/2021" },
									// { label: "2022", slug: "classes/2022" },
									{ label: "2023", slug: "classes/2023" },
									{ label: "2024", slug: "classes/2024" },
									{ label: "2025", slug: "classes/2025" },
									// { label: "2026", slug: "classes/2026" },
									// { label: "2027", slug: "classes/2027" },
									// { label: "2028", slug: "classes/2028" },
									// { label: "2029", slug: "classes/2029" },
								]
              },
          ],
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
          items: [
              'reference/booking-cottonwood',
              'reference/example-class',
              {
              		label: 'Authoring Content in Markdown ↗',
              		link: 'https://starlight.astro.build/guides/authoring-content/',
            		  attrs: {
            		  		target: '_blank',
            		  		rel: 'noopener noreferrer',
		  		            'aria-label': "Starlight's markdown guide (opens in new tab)",
            		  },
              },
          ],
				},
			],
			lastUpdated: true,
			credits: true,
		}),
	],
});
