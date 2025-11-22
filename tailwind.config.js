/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      // Min-width (default)
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

      // Max-width
      "max-sm": { max: "640px" },
      "max-md": { max: "767px" },
      "max-lg": { max: "1023px" },
      "max-xl": { max: "1279px" },
      "max-2xl": { max: "1535px" },

      // Range (min + max)
      "xs-only": { min: "0px", max: "639px" },
      "sm-only": { min: "640px", max: "767px" },
      "md-only": { min: "768px", max: "1023px" },
      "lg-only": { min: "1024px", max: "1279px" },
      "xl-only": { min: "1280px", max: "1535px" },
    },
  },
};
