import IconWrapper from '@/components/common/IconWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { IconIds } from '@/enums'

export default function Page() {
    const projectName = 'Trustees'
    return (
        <PageWrapper className="gap-5">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                    <LinkWrapper
                        href={`https://${projectName}.fberger.xyz`}
                        target="_blank"
                        className="flex w-full flex-wrap items-baseline gap-1 decoration-primary underline-offset-4 hover:underline"
                    >
                        <p className="text-xl capitalize text-secondary md:text-3xl">{projectName}</p>
                        <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="h-6 w-6 text-primary" />
                    </LinkWrapper>
                    <p className="text-xs">Redacted</p>
                </div>
                <div className="flex w-full flex-col items-end pl-4">
                    <p className="text-secondary">Summary</p>
                    <p className="text-xs">1. Preview</p>
                    <p className="text-xs">2. Why</p>
                    <p className="text-xs">Conclusion</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">1. Preview</p>
                <p className="text-sm">Redacted</p>
                {/* <IframeWrapper src={`https://${projectName}.fberger.xyz`} width="w-full" height="h-[400px]" /> */}
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-light-hover py-4">
                <p className="text-secondary">2. Why</p>
                <p className="text-sm">- WIP</p>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">Conclusion</p>
                <p className="text-sm">Redacted</p>
            </div>
        </PageWrapper>
    )
}
