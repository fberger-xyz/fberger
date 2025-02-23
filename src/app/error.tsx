'use client'

import PageWrapper from '@/components/common/PageWrapper'
import { useEffect } from 'react'
import { extractErrorMessage } from '@/utils'
import IconWrapper from '@/components/common/IconWrapper'
import { IconIds } from '@/enums'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => console.error(error), [error])
    return (
        <PageWrapper>
            <div className="my-10 flex w-full flex-col items-center gap-6">
                <p className="font-bold">Something went wrong!</p>
                <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-light-hover p-4">
                    <p className="text-inactive">Error logs</p>
                    <pre className="max-h-96 overflow-y-auto text-wrap rounded-md p-2 text-center text-xs text-orange-500">
                        {JSON.stringify(extractErrorMessage(error), null, 2)}
                    </pre>
                </div>
                <div className="flex w-full flex-col items-center gap-3">
                    <button
                        onClick={() => reset()}
                        className="flex w-full items-center justify-center gap-2.5 rounded-xl border-2 border-primary px-2 py-1.5 font-bold text-primary sm:py-2"
                    >
                        <p className="font-bold">Try a refresh</p>
                        <IconWrapper icon={IconIds.UPDATE_NOW} className="size-6" />
                    </button>
                    <p className="text-inactive">Or send me the logs above</p>
                </div>
            </div>
        </PageWrapper>
    )
}
