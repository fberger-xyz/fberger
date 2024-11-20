import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'
import { cn } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'fberger.xyz | Projects',
}

function SkillsLine(props: { skills: string[] }) {
    return (
        <div className="mt-1 flex w-full flex-wrap justify-end gap-1 text-xs">
            {props.skills.map((skill) => (
                <div key={skill} className="flex w-fit items-center border border-very-light-hover px-1 py-0.5 group-hover:border-inactive">
                    <p className="text-nowrap text-inactive group-hover:text-primary">{skill}</p>
                </div>
            ))}
        </div>
    )
}

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
        <div className="group w-full rounded-sm border-b-2 border-dotted border-light-hover p-1 hover:border-solid hover:border-primary hover:bg-very-light-hover">
            <LinkWrapper
                href={props.path}
                target={target}
                disabled={disabled}
                className={cn('flex w-full flex-col rounded-sm pb-1 transition duration-300 hover:border-primary')}
            >
                <div className="flex w-full justify-between">
                    <p className="font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">{title}</p>
                    <p className="text-xs text-default">{date}</p>
                </div>
                <p className="text-xs lg:text-sm">
                    <span className="mr-1 text-inactive">Time to code</span>
                    {ttc}
                </p>
                <SkillsLine skills={skills} />
            </LinkWrapper>
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            <p className="text-sm lg:text-base">Side projects I can publicly speak about</p>
            <div className="flex w-full flex-col gap-3">
                <ProjectCard
                    path={AppPagePaths.PROJECTS_ETFS}
                    title="ETFs"
                    date="Nov 2024"
                    ttc="4 days"
                    skills={['Next.js', 'Prisma', 'Inngest', 'Grammy', 'Vercel']}
                />
                <ProjectCard path={AppPagePaths.PROJECTS_SEEDS} title="Seeds" date="Nov 2024" ttc="< 1 day" skills={['BIP39', 'Rot Cipher']} />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_SAFES}
                    title="Safes"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next.js', 'Gnosis Safe', '1inch', 'Cowswap']}
                />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_CONNECT_RABBYKIT}
                    title="RabbyKit"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next.js', 'RabbyKit', 'Wagmi']}
                />
                <ProjectCard path={AppPagePaths.PROJECTS_ALPHA} title="Alpha" date="Nov 2024" ttc="< 1 day" skills={['Next.js']} />
                {/* <ProjectCard path={AppPagePaths.PROJECTS}>
                        <p className="text-primary">Seed encrypt</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                        <p className="text-xs text-secondary"><span className="text-inactive mr-1">Time to code:</span>2 days</p>
                        <SkillsLine skills={['BIP44', 'Next.js']} />
                    </ProjectCard> */}
                {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Nov 2024</p>
                    <p className="text-base text-secondary">Risk and DeFi Developer @CoinShares</p>
                    <p className="text-xs text-inactive">Nov 2021</p>
                </div> */}
                <ProjectCard
                    path={AppPagePaths.PROJECTS_NFT_STONKS}
                    title="NFT stonks"
                    date="Oct 2021"
                    ttc="3 weeks"
                    skills={['Vue.js', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud']}
                />
                {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Oct 2021</p>
                    <p className="text-base text-secondary">Full Stack Developer @StationF</p>
                    <p className="text-xs text-inactive">Janv 2021</p>
                </div> */}
            </div>
        </PageWrapper>
    )
}
