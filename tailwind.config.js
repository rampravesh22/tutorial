/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			padding: {
				btn: "2rem",
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					"--rounded-box": "0.2rem", // Customize border radius for large boxes
					"--rounded-btn": "0.2rem", // Customize border radius for buttons
					"--rounded-badge": "0.2rem", // Customize border radius for badges
					// Add other customizations here if needed

					// eslint-disable-next-line no-undef
					...require("daisyui/src/theming/themes")["light"], // Include base light theme
				},
			},
		],
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};
