/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F5385D", // #9c27b0 F5385D
				secondary: "#9c27b0"
			},
		},
	},
	plugins: [],
};
