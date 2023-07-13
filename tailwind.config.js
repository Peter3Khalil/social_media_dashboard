/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: {
      facebook: "var(--facebook)",
      twitter: "var(--twitter)",
      youtube: "var(--youtube)",
      light: {
        "main-bg": "var(--white)",
        "top-bg": "var(--very-pale-blue)",
        "card-bg": "var(--light-grayish-blue)",
      },
      dark: {
        "main-bg": "var(--very-dark-blue)",
        "top-bg": "var(--very-dark-blue-top)",
        "card-bg": "var(--dark-desaturated-blue)",
      },
    },
    textColor: {
      dark: {
        "text-1": "var(--white)",
        "text-2": "var(--desaturated-blue)",
      },
    },
    colors: {
      "instagram-from": "var(--instagram-from)",
      "instagram-to": "var(--instagram-to)",
      "toggle-from": "var(--toggle-from)",
      "toggle-to": "var(--toggle-to)",
    },
  },
  darkMode: ["class"],
  plugins: [],
};
