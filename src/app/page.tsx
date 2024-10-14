'use client'

import PageWrapper from '@/components/common/PageWrapper'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Page() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    return (
        <PageWrapper>
            {Array(1)
                .fill(0)
                .map((_, index) => index)
                .map((index) => (
                    <div key={index} className="w-full">
                        <p className="text-primary">primary</p>
                        <p className="text-secondary">secondary</p>
                        <p className="text-discreet">discreet</p>
                        <p className="text-inactive">off</p>
                        <p className="bg-light-hover">hover</p>
                    </div>
                ))}
            <p>Theme: {String(resolvedTheme)}</p>
        </PageWrapper>
    )
}
