/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				zoomin: "zoomin cubic-bezier(0.175, 0.885, 0.885, 0.32, 1.275) forwards 400ms",
			},
			keyframes: {
				zoomin: {
					"0%": {
						tranform: "scale(0)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
