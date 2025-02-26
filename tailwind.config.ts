import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary) / <alpha-value>)',
                secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
                default: 'hsl(var(--color-default) / <alpha-value>)',
                inactive: 'hsl(var(--color-inactive) / <alpha-value>)',
                background: 'hsl(var(--color-background) / <alpha-value>)',
                'light-hover': 'hsl(var(--color-light-hover) / <alpha-value>)',
                'very-light-hover': 'hsl(var(--color-very-light-hover) / <alpha-value>)',
                telegram: '#24A1DE',
            },
            animation: {
                'gradient-morph': 'gradient 15s ease infinite',
                'pulse-slow': 'pulse 8s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',

                // testing https://www.youtube.com/watch?v=5yl75eM0Y4A
                'fade-down': 'fade-down 0.8s ease-out',
                'fade-up': 'fade-up 0.8s ease-out',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },

                // testing https://www.youtube.com/watch?v=5yl75eM0Y4A
                'fade-down': {
                    '0%': { opacity: '0', transform: 'translateY(-5px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
