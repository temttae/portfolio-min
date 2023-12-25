/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6A8EAE'
            },
            fontFamily: {
                // 'ubuntu': ['Ubuntu', 'sans-serif'],
                // 'nunito': ['Nunito', 'sans-serif'],
                'notoSans': ['Noto Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
