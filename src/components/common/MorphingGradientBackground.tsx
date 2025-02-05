'use client'
import React from 'react'

export const MorphingGradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative h-screen w-full bg-background">
            {/* dynamic morphing gradient for light mode */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-40 blur-3xl dark:opacity-0"
                style={{
                    backgroundImage: `
                        radial-gradient(at 25% 35%, var(--color-background) 10%, transparent 75%),
                        radial-gradient(at 80% 60%, var(--color-light-hover) 20%, transparent 80%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* dynamic morphing gradient for dark mode */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-0 blur-3xl dark:opacity-50"
                style={{
                    backgroundImage: `
                        radial-gradient(at 25% 35%, var(--color-background) 10%, transparent 75%),
                        radial-gradient(at 75% 75%, var(--color-light-hover) 15%, transparent 85%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* pulsating ambient glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="bg-primary/20 absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-slow rounded-full blur-[140px]" />
                <div className="bg-background/20 absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse-slow rounded-full blur-[140px]" />
            </div>

            {/* additional floating lights */}
            <div className="pointer-events-none absolute inset-0">
                <div className="bg-primary/30 absolute left-1/3 top-16 h-40 w-40 animate-float rounded-full blur-[100px]" />
                <div className="bg-background/30 absolute bottom-16 right-1/3 h-40 w-40 animate-float rounded-full blur-[100px] delay-500" />
            </div>

            {/* Scrollable Content Wrapper */}
            <div className="relative z-10 h-full w-full overflow-auto">{children}</div>
        </div>
    )
}
