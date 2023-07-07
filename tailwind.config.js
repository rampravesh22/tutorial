/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		// ... some plugins,
		plugin(function ({ addVariant }) {
			addVariant("active", ["&:active", "&.router-link-active"]);
		}),
	],
};
