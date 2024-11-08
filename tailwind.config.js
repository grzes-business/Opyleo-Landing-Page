/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./js/**/*.js",
        "./src/**/*.{html,js}" 
    ],
    theme: {
        extend: {
            colors: {
                "highlight-1": "var(--highlight-1)",
                "highlight-2": "var(--highlight-2)",
                "highlight-3": "var(--highlight-3)",
                "background-1": "var(--background-1)",
                "background-2": "var(--background-2)",
                "text-1": "var(--text-1)",
                "text-2": "var(--text-2)",

            },
        },
    },
    plugins: [],
}