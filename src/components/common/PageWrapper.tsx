'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import GoBack from './GoBack'
import { cn } from '@/utils'

export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
    const pathname = usePathname()
    return (
        <Suspense
            fallback={
                <div className="flex h-full w-full items-center justify-center">
                    <p className="text-orange-400">Page loading...</p>
                </div>
            }
        >
            <div
                {...props}
                className={cn(
                    'mx-auto mb-40 mt-20 flex max-w-[600px] flex-col items-start gap-2 overflow-auto px-3 sm:max-w-[800px] sm:px-16 md:mt-24 md:max-w-[900px] md:gap-6',
                    className,
                )}
            >
                {pathname !== '/' && <GoBack />}
                {children}
            </div>
        </Suspense>
    )
}
