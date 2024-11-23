'use client'

import PageWrapper from '@/components/common/PageWrapper'
import { toastStyle } from '@/config/toasts.config'
import { AppPagePaths } from '@/enums'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function NotFound() {
    useEffect(() => {
        toast.error('404 Not Found. Redirected to /projects page', { style: toastStyle })
        redirect(AppPagePaths.PROJECTS)
    })
    return (
        <PageWrapper>
            <div className="my-10 flex w-full flex-col items-center gap-6">
                <p className="text-xl font-bold text-orange-400">Page not found</p>
            </div>
        </PageWrapper>
    )
}
