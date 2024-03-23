/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("rippleui")],
	rippleui: {
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				prefersColorScheme: true,
				colors: {
					primary: "#235264",
					backgroundPrimary: "#964643",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#573242",
					backgroundPrimary: "#1a1a1a",
				},
			},
		],
	},
};
