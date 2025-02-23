'use client'

import { Suspense } from 'react'
import { cn } from '@/utils'

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

const PAGE_WRAPPER_CLASS =
    'mx-auto flex max-w-[600px] flex-col items-start overflow-auto px-2 sm:max-w-[700px] mt-24 sm:mt-28 px-4 mb-10 gap-7 min-h-[calc(100vh-374px)]'

export default function PageWrapper({ children, className, ...props }: PageWrapperProps) {
    return (
        <Suspense
            fallback={
                <div className={PAGE_WRAPPER_CLASS}>
                    <div className="h-96 w-full animate-pulse rounded-lg bg-very-light-hover" />
                </div>
            }
        >
            <div {...props} className={cn(PAGE_WRAPPER_CLASS, className)}>
                {children}
            </div>
        </Suspense>
    )
}
