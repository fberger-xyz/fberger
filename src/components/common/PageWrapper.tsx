'use client'

// import { usePathname } from 'next/navigation'
// import { Suspense } from 'react'
// import GoBack from './GoBack'
// import { cn } from '@/utils'

// export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
//     const pathname = usePathname()
//     return (
//         <Suspense
//             fallback={
//                 <div className="flex h-full w-full items-center justify-center">
//                     <p className="text-orange-400">Page loading...</p>
//                 </div>
//             }
//         >
//             <div
//                 {...props}
//                 className={cn(
//                     'mx-auto mb-10 pb-28 mt-24 flex max-w-[600px] flex-col items-start overflow-auto px-6 sm:max-w-[800px] sm:px-16 md:mt-28',
//                     className,
//                 )}
//             >
//                 {pathname !== '/' && <GoBack />}
//                 {children}
//             </div>
//         </Suspense>
//     )
// }

import { Suspense } from 'react'
import { cn } from '@/utils'

export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
    const commonClassName = 'mx-auto flex max-w-[600px] flex-col items-start overflow-auto px-2 sm:max-w-[700px] mt-24 sm:mt-32 px-6 pb-28 mb-10'
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
