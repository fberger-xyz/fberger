'use client'
import React from 'react'

export const MorphingGradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen w-screen flex-col">
            {/* dynamic morphing gradient for light mode */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-80 blur-xl dark:opacity-0"
                style={{
                    backgroundImage: `
                        radial-gradient(at 25% 35%, white 10%, transparent 75%),
                        radial-gradient(at 75% 75%, var(--color-light-hover) 15%, transparent 85%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* dynamic morphing gradient for dark mode */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-0 blur-xl dark:opacity-50"
                style={{
                    backgroundImage: `
                        radial-gradient(at 25% 35%, var(--color-background) 10%, transparent 55%),
                        radial-gradient(at 75% 75%, var(--color-very-light-hover) 55%, transparent 85%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* pulsating ambient glow (adjusted for mobile) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="bg-primary/20 absolute left-1/4 top-1/4 h-64 w-64 animate-pulse-slow rounded-full blur-[80px] sm:h-80 sm:w-80 sm:blur-[120px] lg:h-96 lg:w-96 lg:blur-[140px]" />
                <div className="bg-background/20 absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse-slow rounded-full blur-[80px] sm:h-80 sm:w-80 sm:blur-[120px] lg:h-96 lg:w-96 lg:blur-[140px]" />
            </div>

            {/* additional floating lights (adjusted for mobile) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="bg-primary/30 absolute left-1/3 top-16 h-24 w-24 animate-float rounded-full blur-[60px] sm:h-32 sm:w-32 sm:blur-[80px] lg:h-40 lg:w-40 lg:blur-[100px]" />
                <div className="bg-background/30 absolute bottom-16 right-1/3 h-24 w-24 animate-float rounded-full blur-[60px] delay-500 sm:h-32 sm:w-32 sm:blur-[80px] lg:h-40 lg:w-40 lg:blur-[100px]" />
            </div>

            {/* Scrollable Content Wrapper */}
            <div className="z-10 flex h-screen flex-col">{children}</div>
        </main>
    )
}
