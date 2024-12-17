/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				slideInBounceText: {
					'0%': {
						transform: 'translateY(-50%)',
						opacity: '0',
					},
					'50%': {
						transform: 'translateY(10%)',
						opacity: '1',
					},
					'75%': {
						transform: 'translateY(-5%)',
					},
					'90%': {
						transform: 'translateY(1.67%)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
				slideInBounceSvg: {
					'0%': {
						transform: 'translateX(-5%)',
						opacity: '0',
					},
					'50%': {
						transform: 'translateX(1.25%)',
						opacity: '1',
					},
					'75%': {
						transform: 'translateX(-0.625%)',
					},
					'90%': {
						transform: 'translateX(0.3125%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				fadeIn: {
					'0%': { 
						opacity: 0
					},
					'100%': {
						opacity: 1
					}
				},
			},
			animation: {
				'slide-in-bounce-text': 'slideInBounceText 1.2s cubic-bezier(0.25, 1.25, 0.5, 1.5)',
				'slide-in-bounce-svg': 'slideInBounceSvg 1.2s cubic-bezier(0.25, 1.25, 0.5, 1.5)',
				'fadeIn': 'fadeIn 1.2s linear'
			},
			fontFamily: {
				'poppins': ['Poppins'],
			},
			colors: {
				"highlight-1": "var(--highlight-1)",
				"highlight-2": "var(--highlight-2)",
				"highlight-3": "var(--highlight-3)",
				"background-1": "var(--background-1)",
				"background-2": "var(--background-2)",
				"background-3": "var(--background-3)",
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
