import IframeWrapper from '@/components/common/IframeWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import ExcalidrawSVG from '@/components/excalidraw/ExcalidrawSVG'

export default function Page() {
    return (
        <PageWrapper className="gap-4">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                    <p className="w-full text-xl text-primary md:text-3xl">Better Farside</p>
                    <LinkWithIcon href="https://better-farside.vercel.app/">
                        <p className="text-nowrap text-sm">Visit</p>
                    </LinkWithIcon>
                </div>
                <div className="flex w-full flex-col items-end pl-4">
                    <p className="text-secondary">Summary</p>
                    <p className="text-xs text-discreet">Why I coded this ?</p>
                    <p className="text-xs text-discreet">Preview</p>
                    <p className="text-xs text-discreet">How it works</p>
                    <p className="text-xs text-discreet">Conclusion</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-light-hover pt-8">
                <p className="text-secondary">Why I coded this ?</p>
                <div className="flex flex-wrap items-baseline gap-2">
                    <p className="text-sm text-discreet">
                        1) bc farside's frontend is <span className="underline">ugly af</span>
                    </p>
                    <LinkWithIcon href="https://stationf.co/">
                        <p className="text-nowrap text-sm">See by yourself</p>
                    </LinkWithIcon>
                </div>
                <p className="text-sm text-discreet">2) to list the right tools to use in 2024</p>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover pt-8">
                <p className="text-secondary">Preview 📷</p>
                <IframeWrapper src="https://better-farside.vercel.app/" width="w-full" height="h-[400px]" />
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover pt-8">
                <p className="text-secondary">How it works</p>
                <div className="flex w-full flex-col items-center">
                    <ExcalidrawSVG src="/better-farside" className="w-full p-2" />
                    <p className="text-xs italic text-inactive">it's not complicated</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover pt-8">
                <p className="text-secondary">Conclusion</p>
                <p className="text-sm text-secondary">
                    This shows how 1 developer using the right tools can achieve what would require a full team of five devs in the corporate world.
                </p>
            </div>
        </PageWrapper>
    )
}
