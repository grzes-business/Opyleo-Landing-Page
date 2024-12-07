/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			   'poppins': ['Poppins'],
		  },
			colors: {
				"highlight-1": "var(--highlight-1)",
				"highlight-2": "var(--highlight-2)",
				"highlight-3": "var(--highlight-3)",
				"background-1": "var(--background-1)",
				"background-2": "var(--background-2)",
				"text-1": "var(--text-1)",
				"text-2": "var(--text-2)",
			},
			boxShadow: {
				'book': '0px 0px 60px -15px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
}
