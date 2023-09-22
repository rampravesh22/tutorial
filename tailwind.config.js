/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{jsx,js}"],
	theme: {
		extend: {
			animation: {
				"move-left-to-right":
					"move-right infinite alternate ease-in-out 5s both",
			},
			keyframes: {
				"move-right": {
					"0%": {
						transform: "translate(400px)",
						backgroundColor: "red",
					},
					"100%": {
						transform: "translate(-200px)",
						borderRadius: "50%",
					},
				},
			},
		},
	},
	plugins: [],
};
