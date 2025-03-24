import type { Config } from "tailwindcss";
import aspectRatio from '@tailwindcss/aspect-ratio'
import { PluginAPI } from "tailwindcss/types/config";
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
function addVariablesForColors({
    addBase,
    theme
}: PluginAPI) {
    const allColors = theme("colors") as Record<string, string | Record<string, string>>;;
    //   const newVars = Object.fromEntries(
    //     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    //   );
    const newVars = Object.entries(allColors).reduce((acc, [key, value]) => {
        if (typeof value === "string") {
            acc[`--${key}`] = value;
        } else if (typeof value === "object" && value !== null) {
            Object.entries(value).forEach(([subKey, subValue]) => {
                acc[`--${key}-${subKey}`] = subValue;
            });
        }
        return acc;
    }, {} as Record<string, string>);

    addBase({
        ":root": newVars,
    });
}

/** @type {import('tailwindcss').Config} */
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
