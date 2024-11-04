import IconWrapper from '@/components/common/IconWrapper'
import IframeWrapper from '@/components/common/IframeWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { IconIds } from '@/enums'

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                    <LinkWrapper
                        href="https://connect-seven-snowy.vercel.app/"
                        target="_blank"
                        className="flex w-fit items-baseline gap-1 underline-offset-4 hover:underline"
                    >
                        <p className="w-full text-xl text-secondary md:text-3xl">Connect RabbyKit</p>
                        <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="h-6 w-6 text-primary" />
                    </LinkWrapper>
                    <p className="text-xs text-default">WIP 🚧</p>
                </div>
                <div className="flex w-full flex-col items-end pl-4">
                    <p className="text-secondary">Summary</p>
                    <p className="text-xs text-default">1. Preview</p>
                    <p className="text-xs text-default">2. Why</p>
                    <p className="text-xs text-default">Conclusion</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">1. Preview</p>
                <IframeWrapper src="https://connect-seven-snowy.vercel.app/" width="w-full" height="h-[400px]" />
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-light-hover py-4">
                <p className="text-secondary">2. Why</p>
                <p className="text-sm text-default">WIP 🚧</p>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">Conclusion</p>
                <p className="text-sm text-default">WIP 🚧</p>
            </div>
        </PageWrapper>
    )
}
