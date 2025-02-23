import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'
import dayjs from 'dayjs'
import Image from 'next/image'

export const metadata = generatePageMetadata(AppPagePaths.PROJECTS)

export default function Page() {
    const currentDate = dayjs().format('ddd. DD MMM. YYYY')

    return (
        <PageWrapper>
            <SectionWrapper title="Articles" ulClassname="gap-3">
                <LinkWrapper
                    className="group flex flex-col items-center gap-4 rounded-3xl border-2 border-very-light-hover bg-background/50 p-5 transition-all duration-200 ease-in-out hover:border-primary md:flex-row"
                    href="https://github.com/fberger-xyz/next-with-zustand-cache"
                    target="_blank"
                >
                    <div className="relative flex h-32 w-full overflow-hidden md:h-36 md:w-48">
                        <Image
                            src="https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg"
                            placeholder="blur"
                            layout="fill"
                            objectFit="cover"
                            blurDataURL="https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg"
                            alt="article"
                            className="min-w-48 rounded-xl grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="flex grow flex-col gap-2 md:w-min">
                        <p className="text-xl font-bold">Enable cache feature on zustand store</p>
                        <div className="flex max-h-20 w-full flex-col overflow-hidden">
                            <p className="text-justify text-sm leading-4 text-inactive">Cache your Zustand store.</p>
                            <p className="text-justify text-sm leading-4 text-inactive">Faster loads, fewer API calls, persistent state 🔥</p>
                            <p className="text-justify text-sm leading-4 text-inactive">Do not refetch what you already have.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 font-bold">
                                <p>{currentDate} ; 1 min read</p>
                            </div>
                            <p>#fullstack</p>
                        </div>
                    </div>
                </LinkWrapper>
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.PROJECTS} next={AppPagePaths.XP} />
        </PageWrapper>
    )
}
