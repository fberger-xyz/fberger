'use client'
import React from 'react'
import { cn } from '@/utils'

export const MorphingGradientBackground = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <main className={cn('relative flex min-h-screen w-screen flex-col bg-white dark:bg-black', className)}>
            {/* Primary gradient layer - Optimized with will-change */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-50 blur-3xl transition-opacity duration-500 will-change-[background-position] dark:opacity-45"
                style={{
                    backgroundImage: `
                        radial-gradient(at 40% 20%, hsla(156, 72%, 67%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 80% 0%, hsla(215, 20%, 62%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 0% 50%, hsla(217, 33%, 17%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 80% 50%, hsla(217, 19%, 27%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, hsla(221, 39%, 11%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 80% 100%, hsla(215, 14%, 34%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 0% 0%, hsla(25, 5%, 45%, 0.15) 0px, transparent 50%)
                    `,
                    backgroundSize: '150% 150%',
                }}
            />

            {/* Ambient effects container - Reduced DOM nesting */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -left-10 -top-10 size-72 animate-pulse-slow rounded-full bg-blue-300/10 
                               blur-[100px] will-change-transform dark:bg-[hsl(215,20%,62%)]/10
                               sm:size-96 sm:blur-[140px]"
                />
                <div
                    className="absolute -bottom-10 -right-10 size-72 animate-pulse-slow rounded-full bg-purple-300/10 
                               blur-[100px] will-change-transform dark:bg-[hsl(156,72%,67%)]/10
                               sm:size-96 sm:blur-[140px]"
                />

                {/* Floating orbs with optimized animations */}
                <div
                    className="absolute left-1/4 top-1/4 size-32 animate-float rounded-full bg-rose-300/15 
                               blur-[50px] will-change-transform dark:bg-[hsl(217,33%,17%)]/15
                               sm:size-40 sm:blur-[60px]"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 size-32 animate-float rounded-full bg-amber-300/15 
                               blur-[50px] delay-1000 will-change-transform dark:bg-[hsl(217,19%,27%)]/15
                               sm:size-40 sm:blur-[60px]"
                />
            </div>

            {/* Content with improved z-index handling */}
            <div className="relative z-10 flex h-fit w-full flex-col">{children}</div>
        </main>
    )
}
