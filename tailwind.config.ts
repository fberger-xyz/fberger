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
                'gradient-fast': 'gradient-move 12s linear infinite',
                'gradient-deviate': 'gradient-move-alt 15s linear infinite',
            },
            keyframes: {
                'gradient-move': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '100%': { backgroundPosition: '0% 0%' },
                },
                'gradient-move-alt': {
                    '0%': { backgroundPosition: '100% 100%' },
                    '50%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 100%' },
                },
            },
        },
    },
    plugins: [],
}

export default config
