/** @type {import('tailwindcss').Config} */
export default {
    content: [
        ".index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('tailwind-scrollbar-hide'),
        require('tailwindcss-animate'),
    ],
}