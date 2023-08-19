/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				hover: "inset 200px 0 0 0 white",
			},
		},
	},
	plugins: [],
};
