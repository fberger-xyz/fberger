import IframeWrapper from '@/components/common/IframeWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import ExcalidrawSVG from '@/components/excalidraw/ExcalidrawSVG'

export default function Page() {
    return (
        <PageWrapper className="gap-4">
            <div className="flex w-full flex-col gap-1">
                <p className="text-primary">Why I coded this</p>
                <div className="flex items-baseline gap-2">
                    <p className="text-sm text-discreet">
                        1) bc farside frontend is <span className="underline">ugly af</span>.
                    </p>
                    <LinkWithIcon href="https://stationf.co/">
                        <p className="text-base">See by yourself</p>
                    </LinkWithIcon>
                </div>
                <p className="text-sm text-discreet">2) to teach boomers the right tools to use in 2024</p>
            </div>
            <div className="flex w-full flex-col gap-1">
                <p className="text-primary">Iframe</p>
                <IframeWrapper src="https://better-farside.vercel.app/" width="w-full" height="h-[400px]" />
            </div>
            <div className="flex w-full flex-col gap-1">
                <p className="text-primary">How it works</p>
                <div className="flex w-full flex-col items-center rounded-md border border-dashed border-inactive">
                    <ExcalidrawSVG src="/better-farside" className="w-full p-2" />
                    <p className="text-xs italic text-inactive">drawn with excalidraw</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1">
                <p className="text-primary">Conclusion</p>
                <p className="text-sm text-secondary">
                    This shows how 1 developer using the right tools can achieve what would otherwise require a full team of five.
                </p>
            </div>
        </PageWrapper>
    )
}
