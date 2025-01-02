'use client'

import { Suspense } from 'react'
import { cn } from '@/utils'

export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
    const commonClassName = 'mx-auto mt-[20px] flex max-w-[600px] flex-col items-start overflow-auto px-2 sm:mt-20 sm:max-w-[700px] md:mt-32'
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
