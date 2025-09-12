import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
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
};

export default config;