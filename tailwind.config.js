/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.tsx", "./src/components/*.tsx"

  ],
  theme: {
    extend: {
      fontFamily: {
				body: ['Poppins', "sans-serif"],
				title: ["Poppins", "sans-serif"],
			},
    },
  },
  plugins: [],
}

