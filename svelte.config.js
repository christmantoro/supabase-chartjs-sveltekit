import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // Corrected import path

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()], // Wrap vitePreprocess in an array

	kit: {
		adapter: adapter()
	}
};

export default config;
