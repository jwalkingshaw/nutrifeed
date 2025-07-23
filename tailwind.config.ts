import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'geist-sans': ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;