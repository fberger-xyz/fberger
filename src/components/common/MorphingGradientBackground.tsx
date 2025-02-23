'use client'

import React, { type ReactNode } from 'react'
import { cn } from '@/utils'

interface MorphingGradientBackgroundProps {
    children: ReactNode
    className?: string
}

export const MorphingGradientBackground = ({ children, className }: MorphingGradientBackgroundProps): React.ReactElement => {
    return (
        <main className={cn('relative flex min-h-screen w-screen flex-col bg-white dark:bg-black', className)}>
            <div
                className="absolute inset-0 animate-gradient-morph opacity-40 blur-3xl transition-opacity duration-500 
                           will-change-[background-position] dark:opacity-55"
                style={{
                    backgroundImage: [
                        'radial-gradient(at 40% 20%, hsla(210, 40%, 70%, 0.15) 0px, transparent 50%)',
                        'radial-gradient(at 80% 0%, hsla(225, 35%, 60%, 0.13) 0px, transparent 50%)',
                        'radial-gradient(at 0% 50%, hsla(220, 45%, 45%, 0.15) 0px, transparent 50%)',
                        'radial-gradient(at 80% 50%, hsla(215, 35%, 35%, 0.13) 0px, transparent 50%)',
                        'radial-gradient(at 0% 100%, hsla(220, 30%, 45%, 0.15) 0px, transparent 50%)',
                        'radial-gradient(at 80% 100%, hsla(215, 35%, 40%, 0.13) 0px, transparent 50%)',
                        'radial-gradient(at 0% 0%, hsla(210, 35%, 50%, 0.15) 0px, transparent 50%)',
                    ].join(','),
                    backgroundSize: '150% 150%',
                }}
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -left-10 -top-10 size-72 animate-pulse-slow rounded-full 
                               bg-blue-200/5 blur-[120px] will-change-transform dark:bg-[hsl(215,40%,70%)]/10
                               sm:size-96 sm:blur-[160px]"
                />
                <div
                    className="absolute -bottom-10 -right-10 size-72 animate-pulse-slow rounded-full 
                               bg-blue-300/5 blur-[120px] will-change-transform dark:bg-[hsl(225,35%,60%)]/10
                               sm:size-96 sm:blur-[160px]"
                />
                <div
                    className="absolute left-1/4 top-1/4 size-32 animate-float rounded-full 
                               bg-blue-400/10 blur-[60px] will-change-transform dark:bg-[hsl(220,45%,45%)]/15
                               sm:size-40 sm:blur-[80px]"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 size-32 animate-float rounded-full 
                               bg-blue-500/10 blur-[60px] delay-1000 will-change-transform dark:bg-[hsl(215,35%,35%)]/15
                               sm:size-40 sm:blur-[80px]"
                />
            </div>
            <div className="relative z-10 flex h-fit w-full flex-col">{children}</div>
        </main>
    )
}
