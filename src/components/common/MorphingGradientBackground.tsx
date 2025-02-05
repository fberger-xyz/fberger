'use client'
import React from 'react'

export const MorphingGradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full overflow-auto bg-white dark:bg-black">
            {/* Light mode morphing effect (white shadows) */}
            <div
                className="fixed inset-0 animate-gradient-fast transition-opacity duration-1000 ease-in-out dark:opacity-0"
                style={{
                    background: `
                        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 1) 10%, transparent 60%),
                        radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.9) 10%, transparent 65%),
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 15%, transparent 70%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* Dark mode morphing effect (black shadows) */}
            <div
                className="fixed inset-0 animate-gradient-deviate opacity-0 transition-opacity duration-1000 ease-in-out dark:opacity-100"
                style={{
                    background: `
                        radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 1) 15%, transparent 65%),
                        radial-gradient(circle at 60% 60%, rgba(0, 0, 0, 0.9) 15%, transparent 70%),
                        radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.8) 10%, transparent 75%)
                    `,
                    backgroundSize: '300% 300%',
                }}
            />

            {/* Content container */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
