import { cn } from '@/utils'

export const cardGradientClasses = cn(
    // Base card styles
    'group relative flex flex-col rounded-3xl border-2 border-very-light-hover transition duration-300 ease-in-out hover:border-primary',
    // Enhanced gradient background - increased light mode opacity
    'before:absolute before:inset-0 before:rounded-3xl before:opacity-[0.15] before:transition-opacity before:duration-300 dark:before:opacity-[0.15]',
    'before:bg-[radial-gradient(circle_at_0%_0%,hsl(var(--color-primary)/0.6),transparent_70%),radial-gradient(circle_at_100%_100%,hsl(var(--color-secondary)/0.4),transparent_70%)]',
    'hover:before:opacity-[0.2] dark:hover:before:opacity-[0.25]',
    // Glassy background effect
    'bg-background/90 backdrop-blur-[2px]',
    // Subtle shadow on hover
    'hover:shadow-[0_0_30px_-20px_hsl(var(--color-primary))]',
)
