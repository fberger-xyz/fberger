import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { AppPagePaths } from '@/enums'
import { cn, generatePageMetadata } from '@/utils'

export const metadata = generatePageMetadata(AppPagePaths.PROJECTS)

function ProjectCard({
    target = '_self',
    disabled = false,
    title,
    date,
    ttc,
    skills,
    ...props
}: {
    path: AppPagePaths | string
    target?: '_blank' | '_self' | '_parent' | '_top'
    disabled?: boolean
    title: string
    date: string
    ttc: string
    skills: string[]
}) {
    return (
        <div className="group flex flex-col items-start gap-1 rounded-2xl border border-light-hover p-3 hover:border-primary md:px-5">
            <LinkWrapper
                href={props.path}
                target={target}
                disabled={disabled}
                className={cn('flex w-full flex-col rounded-md pb-1 transition duration-300 hover:border-primary')}
            >
                <div className="flex w-full justify-between">
                    <p className="font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">{title}</p>
                    <p className="text-xs text-inactive">{date}</p>
                </div>
                <p className="text-xs lg:text-sm">
                    <span className="mr-1 text-inactive">Time to code</span>
                    {ttc}
                </p>
                <div className="mt-2 flex w-full flex-wrap justify-end gap-1 text-xs">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex w-fit items-center rounded-lg border border-very-light-hover px-1.5 py-0.5 group-hover:bg-very-light-hover"
                        >
                            <p className="text-nowrap text-inactive group-hover:text-primary">{skill}</p>
                        </div>
                    ))}
                </div>
            </LinkWrapper>
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper>
            <p className="text-inactive">Side projects I can publicly speak about</p>
            <div className="flex w-full flex-col gap-3">
                <ProjectCard
                    path={AppPagePaths.PROJECTS_TRUSTEES}
                    title="Trustees"
                    date="Dec 2024"
                    ttc="2 weeks"
                    skills={['Telegram', 'OpenAI', 'Safe', 'Debank', 'Arbitrum']}
                />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_ETFS}
                    title="ETFs"
                    date="Nov 2024"
                    ttc="4 days"
                    skills={['Next', 'Prisma', 'Inngest', 'Grammy', 'Vercel']}
                />
                <ProjectCard path={AppPagePaths.PROJECTS_SEEDS} title="Seeds" date="Nov 2024" ttc="< 1 day" skills={['BIP39', 'Rot Cipher']} />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_SAFES}
                    title="Safes"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next', 'Gnosis Safe', '1inch', 'Cowswap']}
                />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_CONNECT_RABBYKIT}
                    title="RabbyKit"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next', 'RabbyKit', 'Wagmi']}
                />
                <ProjectCard path={AppPagePaths.PROJECTS_ALPHA} title="Alpha" date="Nov 2024" ttc="< 1 day" skills={['Next']} />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_NFT_STONKS}
                    title="NFT stonks"
                    date="Oct 2021"
                    ttc="3 weeks"
                    skills={['Vue.js', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud']}
                />
            </div>
            <PreviousOrNextPages previous={AppPagePaths.HOME} next={AppPagePaths.XP} />
        </PageWrapper>
    )
}
