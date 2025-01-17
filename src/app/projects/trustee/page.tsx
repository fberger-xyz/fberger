import IconWrapper from '@/components/common/IconWrapper'
import IframeWrapper from '@/components/common/IframeWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { AppPagePaths, IconIds } from '@/enums'

export default function Page() {
    const projectName = 'trustee.fund'
    return (
        <PageWrapper>
            <div className="flex w-full flex-col">
                <LinkWrapper
                    href={`https://trustee.fund`}
                    target="_blank"
                    className="flex w-full flex-wrap items-center gap-2 decoration-primary underline-offset-4 hover:underline"
                >
                    <p className="text-3xl text-secondary">{projectName}</p>
                    <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="size-7 text-primary" />
                </LinkWrapper>
            </div>
            <IframeWrapper src={`https://trustee.fund`} width="w-full" height="h-[400px]" />
            <PreviousOrNextPages previous={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
