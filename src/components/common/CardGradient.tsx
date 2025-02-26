import { cn } from '@/utils'

export const cardGradientClasses = cn(
    // base card styles
    'group relative flex flex-col rounded-3xl border-2 border-very-light-hover transition duration-100 ease-in-out hover:border-primary overflow-hidden',
    // simplified gradient background for better performance
    'before:absolute before:inset-0 before:opacity-[0.15] before:transition-opacity before:duration-100 dark:before:opacity-[0.15]',
    'before:bg-[linear-gradient(120deg,hsl(var(--color-primary)/0.4)_0%,transparent_40%,transparent_60%,hsl(var(--color-secondary)/0.3)_100%)]',
    'hover:before:opacity-[0.2] dark:hover:before:opacity-[0.25]',
    // optimized background with reduced transparency calculations
    'bg-background/95',
    // simplified hover effect
    'hover:shadow-sm',
)
