'use client'

import React, { type ReactNode } from 'react'
import { cn } from '@/utils'

interface MorphingGradientBackgroundProps {
    children: ReactNode
    className?: string
}

const styles = {
    gradientOrb: 'rounded-full will-change-transform animate-pulse-slow blur-[120px] sm:blur-[160px] size-72 sm:size-96',
    floatingOrb: 'rounded-full will-change-transform animate-float blur-[60px] sm:blur-[80px] size-32 sm:size-40',
} as const

export const MorphingGradientBackground = ({ children, className }: MorphingGradientBackgroundProps): React.ReactElement => {
    return (
        <main className={cn('relative flex min-h-screen w-screen flex-col bg-white dark:bg-black', className)}>
            <div
                className="absolute inset-0 animate-gradient-morph opacity-50 blur-3xl transition-opacity 
                           duration-500 will-change-[background-position] dark:opacity-60"
                style={{
                    backgroundImage: [
                        'radial-gradient(at 40% 20%, hsla(210, 45%, 65%, 0.18) 0px, transparent 50%)',
                        'radial-gradient(at 80% 0%, hsla(225, 40%, 55%, 0.16) 0px, transparent 50%)',
                        'radial-gradient(at 0% 50%, hsla(220, 50%, 40%, 0.18) 0px, transparent 50%)',
                        'radial-gradient(at 80% 50%, hsla(215, 40%, 30%, 0.16) 0px, transparent 50%)',
                        'radial-gradient(at 0% 100%, hsla(220, 35%, 40%, 0.18) 0px, transparent 50%)',
                        'radial-gradient(at 80% 100%, hsla(215, 40%, 35%, 0.16) 0px, transparent 50%)',
                        'radial-gradient(at 0% 0%, hsla(210, 40%, 45%, 0.18) 0px, transparent 50%)',
                    ].join(','),
                    backgroundSize: '150% 150%',
                }}
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className={cn(styles.gradientOrb, '-left-10 -top-10 bg-blue-200/10 dark:bg-[hsl(215,45%,65%)]/15')} />
                <div className={cn(styles.gradientOrb, '-bottom-10 -right-10 bg-blue-300/10 dark:bg-[hsl(225,40%,55%)]/15')} />
                <div className={cn(styles.floatingOrb, 'left-1/4 top-1/4 bg-blue-400/10 dark:bg-[hsl(220,45%,45%)]/15')} />
                <div className={cn(styles.floatingOrb, 'bottom-1/4 right-1/4 bg-blue-500/10 delay-1000 dark:bg-[hsl(215,35%,35%)]/15')} />
            </div>
            <div className="relative z-10 flex h-fit w-full flex-col">{children}</div>
        </main>
    )
}
