/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				scaleInOut: {
					'0%, 100%': { transform: 'scale(1)', opacity: '0' },
					'25%': { transform: 'scale(1.5)', opacity: '1' },
					'50%': { transform: 'scale(1)', opacity: '1' },
					'75%': { transform: 'scale(0.5)', opacity: '1' },
				},
			},
			animation: {
				scaleInOut: "scaleInOut 4s ease-in-out",
			},
		},
	},
	plugins: [],
};
