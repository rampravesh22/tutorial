import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			"noto-sans": ["Noto Sans", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
			"open-sans": ["Open Sans", "sans-serif"],
			montserrat: ["Montserrat", "sans-serif"],
			"nunito-sans": ["Nunito Sans", "sans-serif"],
			nunito: ["Nunito", "sans-serif"],
			oswald: ["Oswald", "sans-serif"],
			"roboto-mono": ["Roboto Mono", "sans-serif"],
			"roboto-condensed": ["Roboto Condensed", "sans-serif"],
			inter: ["Inter", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			lato: ["Lato", "sans-serif"],
			ubuntu: ["Ubuntu", "sans-serif"],
		},
	},

	darkMode: "class",
	plugins: [nextui()],
};
