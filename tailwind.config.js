/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "lime-green":"var(--lime-green)",
      "bright-red":"var(--bright-red)",
      "facebook":"var(--facebook)",
      "twitter":"var(--twitter)",
      "instagram-from":"var(--instagram-from)",
      "instagram-to":"var(--instagram-to)",
      "youtube":"var(--youtube)",
      "toggle-from":"var(--toggle-from)",
      "toggle-to":"var(--toggle-to)",
      "toggle-light":"var(--toggle-light)",
      dark:{
        "main-bg":"var(--very-dark-blue)",
        "top-bg":"var(--very-dark-blue-top)",
        "card-bg":"var(--dark-desaturated-blue)",
        "text-1":"var(--desaturated-blue)",
        "text-2":"var(--white)",
      },
      light:{
        "main-bg":"var(--white)",
        "top-bg":"var(--very-pale-blue)",
        "card-bg":"var(--light-grayish-blue)",
        "text-1":"var(--dark-grayish-blue)",
        "text-2":"var(--very-dark-blue)",
      }
    }
  },
  darkMode: ["class"],
  plugins: [],
};
