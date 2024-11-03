import IconWrapper from '@/components/common/IconWrapper'
import IframeWrapper from '@/components/common/IframeWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { IconIds } from '@/enums'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                    <LinkWrapper
                        target="_blank"
                        href="https://www.linkedin.com/posts/francis-berger-a2404094_degen-web3-nft-activity-6879062483768795136-WomP/?utm_source=share&utm_medium=member_desktop"
                        className="flex w-fit items-baseline gap-1 underline-offset-4 hover:underline"
                    >
                        <p className="w-full text-xl text-secondary md:text-3xl">NFT Stonks</p>
                        <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="h-6 w-6 text-primary" />
                    </LinkWrapper>
                    <p className="text-xs text-default">List all OpenSea trades for any address/ENS and compute profit per NFT</p>
                </div>
                <div className="flex w-full flex-col items-end pl-4">
                    <p className="text-secondary">Summary</p>
                    <p className="text-xs text-default">1. Preview</p>
                    <p className="text-xs text-default">2. Why did I code this?</p>
                    <p className="text-xs text-default">Conclusion</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">1. Preview</p>
                <IframeWrapper src="https://nft-stonks.netlify.app/" width="w-full" height="h-[400px]" />
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-light-hover py-4">
                <p className="text-secondary">2. Why did I code this?</p>
                <div className="flex flex-wrap items-baseline gap-2">
                    <p className="text-sm text-default">- for CT</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">Conclusion</p>
                <p className="text-sm text-default">Got some traction.</p>
            </div>
        </PageWrapper>
    )
}
