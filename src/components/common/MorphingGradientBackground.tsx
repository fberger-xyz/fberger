'use client'
import React from 'react'

export const MorphingGradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full overflow-auto bg-white dark:bg-black">
            {/* Primary light mode morphing layer - stronger */}
            <div
                className="fixed inset-0 animate-gradient-fast opacity-100 transition-opacity duration-1000 ease-in-out dark:opacity-0"
                style={{
                    background: `
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 10%, transparent 70%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.95) 5%, transparent 60%),
                        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.9) 5%, transparent 65%),
                        radial-gradient(circle at 65% 65%, rgba(255, 255, 255, 0.85) 10%, transparent 70%)
                    `,
                    backgroundSize: '250% 250%',
                }}
            />

            {/* Secondary light morphing layer with highlights */}
            <div
                className="fixed inset-0 animate-gradient-deviate opacity-90 transition-opacity duration-1000 ease-in-out dark:opacity-0"
                style={{
                    background: `
                        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1) 10%, transparent 60%),
                        radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.95) 8%, transparent 65%),
                        radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.9) 5%, transparent 70%),
                        radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.8) 10%, transparent 75%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* Extra subtle glow for enhanced brightness */}
            <div
                className="fixed inset-0 animate-gradient-slow opacity-80 transition-opacity duration-1000 ease-in-out dark:opacity-0"
                style={{
                    background: `
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7) 0%, transparent 75%),
                        radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.6) 0%, transparent 70%),
                        radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.5) 0%, transparent 65%)
                    `,
                    backgroundSize: '350% 350%',
                }}
            />

            {/* Dark mode morphing layer (darker, more depth) */}
            <div
                className="fixed inset-0 animate-gradient-fast opacity-0 transition-opacity duration-1000 ease-in-out dark:opacity-90"
                style={{
                    background: `
                        radial-gradient(circle at 30% 30%, rgba(10, 15, 30, 0.98) 15%, transparent 60%),
                        radial-gradient(circle at 70% 70%, rgba(5, 10, 25, 0.95) 15%, transparent 65%),
                        radial-gradient(circle at 40% 60%, rgba(15, 23, 42, 0.95) 15%, transparent 70%),
                        radial-gradient(circle at 50% 50%, rgba(20, 28, 50, 0.9) 10%, transparent 75%)
                    `,
                    backgroundSize: '250% 250%',
                }}
            />

            {/* Content container */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
