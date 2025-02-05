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
                'gradient-morph': 'gradient-morph 12s ease-in-out infinite',
                'pulse-slow': 'pulse-ambient 6s infinite ease-in-out',
                float: 'float 8s infinite ease-in-out',
            },
            keyframes: {
                'gradient-morph': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '100%': { backgroundPosition: '0% 0%' },
                },
                'pulse-ambient': {
                    '0%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.1)' },
                    '100%': { opacity: '0.5', transform: 'scale(1)' },
                },
                float: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
