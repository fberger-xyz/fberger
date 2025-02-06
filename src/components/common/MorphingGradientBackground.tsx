'use client'
import React from 'react'

export const MorphingGradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative flex min-h-screen w-screen flex-col bg-white dark:bg-black">
            {/* dynamic morphing gradient for light mode */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-95 blur-2xl dark:opacity-0"
                style={{
                    backgroundImage: `
                        radial-gradient(at 20% 30%, rgba(255, 255, 255, 1) 10%, transparent 55%),
                        radial-gradient(at 80% 70%, rgba(230, 250, 250, 0.8) 50%, transparent 85%)
                    `,
                    backgroundSize: '200% 200%',
                }}
            />

            {/* dynamic morphing gradient for dark mode */}
            <div
                className="absolute inset-0 animate-gradient-morph opacity-0 blur-xl dark:opacity-60"
                style={{
                    backgroundImage: `
                        radial-gradient(at 20% 30%, rgba(10, 10, 10, 0.9) 10%, transparent 55%),
                        radial-gradient(at 80% 70%, rgba(30, 30, 30, 0.3) 50%, transparent 85%)
                    `,
                    backgroundSize: '200% 200%',
                }}
            />

            {/* pulsating ambient glow (adjusted for mobile) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse-slow rounded-full bg-white/30 blur-[110px] sm:h-80 sm:w-80 sm:blur-[170px] lg:h-96 lg:w-96 lg:blur-[190px]" />
                <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse-slow rounded-full bg-gray-200/30 blur-[110px] sm:h-80 sm:w-80 sm:blur-[170px] lg:h-96 lg:w-96 lg:blur-[190px]" />
            </div>

            {/* additional floating lights (adjusted for mobile) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/3 top-16 h-24 w-24 animate-float rounded-full bg-white/50 blur-[90px] sm:h-32 sm:w-32 sm:blur-[110px] lg:h-40 lg:w-40 lg:blur-[130px]" />
                <div className="absolute bottom-16 right-1/3 h-24 w-24 animate-float rounded-full bg-gray-100/50 blur-[90px] delay-500 sm:h-32 sm:w-32 sm:blur-[110px] lg:h-40 lg:w-40 lg:blur-[130px]" />
            </div>

            {/* Scrollable Content Wrapper */}
            <div className="z-10 flex h-fit flex-col">{children}</div>
        </main>
    )
}
