/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     // rest of the code
//   },
//   plugins: [
//     // rest of the code
//     addVariablesForColors,
//   ],
// };

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    addVariablesForColors,
    aspectRatio
  ],
} satisfies Config;
