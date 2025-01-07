'use client'

import { Suspense } from 'react'
import { cn } from '@/utils'

export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
    const commonClassName = 'mx-auto flex max-w-[600px] flex-col items-start overflow-auto px-2 sm:max-w-[750px] mt-24 sm:mt-28 px-6 mb-10 gap-6'
    return (
        <Suspense
            fallback={
                <div className={commonClassName}>
                    <div className="h-96 w-full animate-pulse rounded-lg bg-very-light-hover" />
                </div>
            }
        >
            <div {...props} className={cn(commonClassName, className)}>
                {children}
            </div>
        </Suspense>
    )
}
