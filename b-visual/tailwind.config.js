import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                text: "#FFFFFF",
                accent: "#c59c6c"
            },
            fontFamily: {
                sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
                display: ["Anton", "Impact", "sans-serif"],
            },
            fontSize: {
                'menu': '2rem'
            }
        },
    },
    plugins: [
        tailwind-scrollbar,
        tailwind-scrollbar-hide,
        tailwindcss-animate,
    ],
}