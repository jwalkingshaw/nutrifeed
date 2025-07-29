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
        'merriweather': ['var(--font-merriweather)', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'geist-sans': ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
   
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontFamily: 'var(--font-inter), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              color: '#374151',
              lineHeight: '1.75',
            },
            article: {
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            },
            h1: {
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            },
            h2: {
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            },
            h3: {
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            },
            'ul > li': {
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            },
            'ol > li': {
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;