import IconWrapper from '@/components/common/IconWrapper'
import IframeWrapper from '@/components/common/IframeWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { AppPagePaths, IconIds } from '@/enums'

export default function Page() {
    return (
        <PageWrapper>
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                    <LinkWrapper
                        href="https://safes.fberger.xyz"
                        target="_blank"
                        className="flex w-full flex-wrap items-baseline gap-1 decoration-primary underline-offset-4 hover:underline"
                    >
                        <p className="truncate text-xl text-secondary md:text-3xl">Safes</p>
                        <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="h-6 w-6 text-primary" />
                    </LinkWrapper>
                    <p className="text-xs">One linktree to manage your safes</p>
                </div>
                <div className="flex flex-col items-end pl-4">
                    <p className="text-secondary">Summary</p>
                    <p className="text-xs">1. Preview</p>
                    <p className="text-xs">2. Why</p>
                    <p className="text-xs">Conclusion</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">1. Preview</p>
                <IframeWrapper src="https://safes.fberger.xyz" width="w-full" height="h-[400px]" />
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-light-hover py-4">
                <p className="text-secondary">2. Why</p>
                <p className="text-sm">- to gain time while managing my multisigs</p>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover pt-4">
                <p className="text-secondary">Conclusion</p>
                <p className="text-sm">Useful to me</p>
            </div>
            <PreviousOrNextPages previous={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
