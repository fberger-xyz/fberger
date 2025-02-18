import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'
import dayjs from 'dayjs'
import Image from 'next/image'

export const metadata = generatePageMetadata(AppPagePaths.PROJECTS)

export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="Articles" ulClassname="gap-3">
                {Array(4)
                    .fill(0)
                    .map((entry, entryIndex) => (
                        <div
                            key={`${entry}-${entryIndex}`}
                            className="flex items-center gap-4 rounded-3xl border-2 border-very-light-hover bg-background/50 p-5 hover:border-primary"
                        >
                            {/* left  */}
                            <div className="relative flex h-32 w-48 overflow-hidden md:h-40">
                                <Image
                                    src={APP_METADATA.PROFILE_PICTURE}
                                    placeholder="blur"
                                    layout="fill"
                                    objectFit="cover"
                                    blurDataURL={APP_METADATA.PROFILE_PICTURE}
                                    alt="article"
                                    className="min-w-48 rounded-xl grayscale"
                                />
                            </div>

                            {/* right */}
                            <div className="flex w-min grow flex-col gap-1">
                                <p className="text-xl font-bold">Some title</p>
                                <div className="flex max-h-20 w-full overflow-hidden">
                                    <p className="text-justify text-sm leading-4 text-inactive">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                        PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 font-bold">
                                        <p>{dayjs().format('ddd. DD MMM. YYYY')} ; 11 min read</p>
                                    </div>
                                    <p>#philosophy</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.HOME} next={AppPagePaths.XP} />
        </PageWrapper>
    )
}
