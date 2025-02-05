'use client'
import React from 'react'

export const MorphingGradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full overflow-auto bg-white dark:bg-black">
            {/* Light mode morphing effect (more visible white shadows) */}
            <div
                className="fixed inset-0 animate-gradient-fast opacity-80 transition-opacity duration-1000 ease-in-out dark:opacity-0"
                style={{
                    background: `
                        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 1) 15%, transparent 70%),
                        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.9) 20%, transparent 75%),
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.85) 15%, transparent 80%)
                    `,
                    backgroundSize: '250% 250%',
                }}
            />

            {/* Dark mode morphing effect (more visible deep black shadows) */}
            <div
                className="fixed inset-0 animate-gradient-deviate opacity-0 transition-opacity duration-1000 ease-in-out dark:opacity-100"
                style={{
                    background: `
                        radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 1) 20%, transparent 65%),
                        radial-gradient(circle at 60% 60%, rgba(0, 0, 0, 0.95) 20%, transparent 70%),
                        radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.9) 15%, transparent 75%)
                    `,
                    backgroundSize: '250% 250%',
                }}
            />

            {/* Content container */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
