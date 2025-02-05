import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                default: 'var(--color-default)',
                inactive: 'var(--color-inactive)',
                background: 'var(--color-background)',
                'light-hover': 'var(--color-light-hover)',
                'very-light-hover': 'var(--color-very-light-hover)',
                'light-border': 'var(--color-light-border)',
                telegram: '#24A1DE',
            },
            animation: {
                'gradient-fast': 'gradient-move 18s ease infinite',
                'gradient-deviate': 'gradient-move-alt 22s ease infinite',
                'gradient-slow': 'gradient-move-slow 35s ease infinite',
            },
            keyframes: {
                'gradient-move': {
                    '0%, 100%': { backgroundPosition: '0% 0%' },
                    '25%': { backgroundPosition: '100% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '75%': { backgroundPosition: '0% 100%' },
                },
                'gradient-move-alt': {
                    '0%, 100%': { backgroundPosition: '100% 100%' },
                    '25%': { backgroundPosition: '0% 100%' },
                    '50%': { backgroundPosition: '0% 0%' },
                    '75%': { backgroundPosition: '100% 0%' },
                },
                'gradient-move-slow': {
                    '0%, 100%': { backgroundPosition: '50% 50%' },
                    '25%': { backgroundPosition: '80% 20%' },
                    '50%': { backgroundPosition: '20% 80%' },
                    '75%': { backgroundPosition: '40% 40%' },
                },
            },
        },
    },
    plugins: [],
}

export default config
