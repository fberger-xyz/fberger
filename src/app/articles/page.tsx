import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'
import dayjs from 'dayjs'
import Image from 'next/image'
import { cardGradientClasses } from '@/components/common/CardGradient'
import { cn } from '@/utils'

export const metadata = generatePageMetadata(AppPagePaths.ARTICLES)

export default function Page() {
    const currentDate = dayjs().format('ddd. DD MMM. YYYY')
    return (
        <PageWrapper>
            <SectionWrapper title="Articles" ulClassname="gap-3">
                <LinkWrapper
                    className={cn(cardGradientClasses, 'items-center gap-4 p-5 md:flex-row')}
                    href="/articles/step-by-step-creation-morpho-vault"
                >
                    <div className="relative flex h-32 w-full overflow-hidden md:h-36 md:w-48">
                        <Image
                            src="https://www.mnhn.fr/system/files/styles/no_crop_very_medium/private/2024-03/morpho-bleu.jpg.webp?itok=oVGEaqOU"
                            placeholder="blur"
                            layout="fill"
                            objectFit="cover"
                            blurDataURL="https://www.mnhn.fr/system/files/styles/no_crop_very_medium/private/2024-03/morpho-bleu.jpg.webp?itok=oVGEaqOU"
                            alt="article"
                            className="min-w-48 rounded-xl grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                    </div>
                    <div className="flex grow flex-col gap-2 md:w-min">
                        <p className="text-xl font-bold text-secondary">🚧</p>
                        <div className="flex max-h-20 w-full flex-col overflow-hidden">
                            <p className="text-justify text-sm leading-4 text-inactive">Step-by-step creation of a Morpho vault</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 font-bold text-default">
                                <p>{currentDate} ; 1 min read</p>
                            </div>
                            <p className="text-inactive">#Morpho vault</p>
                        </div>
                    </div>
                </LinkWrapper>
                <LinkWrapper
                    className={cn(cardGradientClasses, 'items-center gap-4 p-5 md:flex-row')}
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
                            className="min-w-48 rounded-xl grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                    </div>
                    <div className="flex grow flex-col gap-2 md:w-min">
                        <p className="text-xl font-bold text-secondary">Enable cache on zustand store</p>
                        <div className="flex max-h-20 w-full flex-col overflow-hidden">
                            <p className="text-justify text-sm leading-4 text-inactive">Cache your Zustand store</p>
                            <p className="text-justify text-sm leading-4 text-inactive">Faster loads, fewer API calls, persistent state 🔥</p>
                            <p className="text-justify text-sm leading-4 text-inactive">Do not refetch what you already have</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 font-bold text-default">
                                <p>{currentDate} ; 1 min read</p>
                            </div>
                            <p className="text-inactive">#fullstack</p>
                        </div>
                    </div>
                </LinkWrapper>
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.PROJECTS} next={AppPagePaths.XP} />
        </PageWrapper>
    )
}
