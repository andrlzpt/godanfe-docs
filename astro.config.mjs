// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, {
  openAPISidebarGroups,
} from 'starlight-openapi';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	site: 'https://andrlzpt.github.io',
  	base: '/danfe-docs',
	integrations: [
		starlight({
			title: 'godanfe',
			plugins: [
				starlightOpenAPI([
				{
					base: 'api',
					schema: './schemas/openapi.yaml',
				},
				]),
				starlightThemeRapide()
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/andrlzpt/godanfe-docs' }],
			sidebar: [
				{
					label: 'Introduction',
					link: '/',
				},
				...openAPISidebarGroups,
			],
		}),
	],
});
