import type { Config } from "tailwindcss";
import { tailwindConfig } from "@tradetool/design-tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...tailwindConfig,
      // Marketing-specific typography overrides
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontFamily: 'var(--font-family-sans)',
              color: 'var(--color-foreground-secondary)',
              lineHeight: '1.75',
            },
            article: {
              fontFamily: 'var(--font-family-sans)',
            },
            h1: {
              fontFamily: 'var(--font-family-sans)',
              color: 'var(--color-foreground)',
            },
            h2: {
              fontFamily: 'var(--font-family-sans)',
              color: 'var(--color-foreground)',
            },
            h3: {
              fontFamily: 'var(--font-family-sans)',
              color: 'var(--color-foreground)',
            },
            'ul > li': {
              fontFamily: 'var(--font-family-sans)',
            },
            'ol > li': {
              fontFamily: 'var(--font-family-sans)',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    // Keep arbitrary values that might not be detected
    'top-[3rem]',
    'h-[67px]',
    'pt-[8rem]',
    'z-[75]',
    'z-[60]',
    'z-[9999]',
  ],
};

export default config;