import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#0066CC',
          dark: '#3B82F6',
          light: '#60A5FA',
        },
        accent: {
          blue: {
            light: '#EFF6FF',
            DEFAULT: '#DBEAFE',
            dark: '#2563EB',
          },
          gray: {
            lightest: '#F8FAFC',
            light: '#F1F5F9',
            DEFAULT: '#E2E8F0',
            dark: '#64748B',
          }
        },
        success: {
          light: '#ECFDF5',
          DEFAULT: '#10B981',
          dark: '#059669',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
