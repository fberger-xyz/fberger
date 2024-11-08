import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'
import { cn } from '@/utils'
import { ReactNode } from 'react'

function SkillsLine(props: { skills: string[] }) {
    return (
        <div className="mt-1 flex w-full flex-wrap justify-end gap-1 text-xs">
            {props.skills.map((skill) => (
                <div className="flex w-fit items-center border border-very-light-hover px-1 py-0.5 group-hover:border-inactive">
                    <p className="text-nowrap text-inactive group-hover:text-primary">{skill}</p>
                </div>
            ))}
        </div>
    )
}

function ProjectCard({
    target = '_self',
    disabled = false,
    ...props
}: {
    children: ReactNode
    path: AppPagePaths | string
    target?: '_blank' | '_self' | '_parent' | '_top'
    disabled?: boolean
}) {
    return (
        <div className="group w-full border-b border-light-hover p-0.5 hover:border-primary">
            <LinkWrapper
                href={props.path}
                target={target}
                disabled={disabled}
                className={cn('flex w-full flex-col rounded-sm pb-3 pt-1 transition duration-300 hover:border-primary', {
                    // 'opacity-50 cursor-not-allowed': disabled,
                })}
            >
                {props.children}
            </LinkWrapper>
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            <p className="text-sm">Some side projects I can publicly speak about</p>
            <div className="flex w-full flex-col gap-3">
                {/* <ProjectCard path={AppPagePaths.PROJECTS_APTOS_LIQUIDATION_BOT}>
                    <div className="flex w-full justify-between">
                        <p className="text-secondary group-hover:text-primary">Aptos Liquidation Bot</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                    </div>
                    <p className="text-xs">
                        <span className="mr-1 text-inactive">Time to code:</span>🚧
                    </p>
                    <SkillsLine skills={['?']} />
                </ProjectCard> */}
                <ProjectCard path={AppPagePaths.PROJECTS_FARSIDE}>
                    <div className="flex w-full justify-between">
                        <p className="text-secondary group-hover:text-primary">Farside</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                    </div>
                    <p className="text-xs">
                        <span className="mr-1 text-inactive">Time to code:</span>4 days
                    </p>
                    <SkillsLine skills={['Next', 'Xata DB', 'Prisma', 'Inngest', 'Grammy', 'Vercel']} />
                </ProjectCard>
                <ProjectCard path={AppPagePaths.PROJECTS_SAFES}>
                    <div className="flex w-full justify-between">
                        <p className="text-secondary group-hover:text-primary">Safes</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                    </div>
                    <p className="text-xs">
                        <span className="mr-1 text-inactive">Time to code:</span>
                        {'<'} 1 day
                    </p>
                    <SkillsLine skills={['Next', 'Gnosis Safe', '1inch', 'Cowswap']} />
                </ProjectCard>
                <ProjectCard path={AppPagePaths.PROJECTS_CONNECT_RABBYKIT}>
                    <div className="flex w-full justify-between">
                        <p className="text-secondary group-hover:text-primary">RabbyKit</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                    </div>
                    <p className="text-xs">
                        <span className="mr-1 text-inactive">Time to code:</span>
                        {'<'} 1 day
                    </p>
                    <SkillsLine skills={['Next', 'RabbyKit', 'Wagmi']} />
                </ProjectCard>
                <ProjectCard path={AppPagePaths.PROJECTS_ALPHA}>
                    <div className="flex w-full justify-between">
                        <p className="text-secondary group-hover:text-primary">Alpha</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                    </div>
                    <p className="text-xs">
                        <span className="mr-1 text-inactive">Time to code:</span>
                        {'<'} 1 day
                    </p>
                    <SkillsLine skills={['Next']} />
                </ProjectCard>
                {/* <ProjectCard path={AppPagePaths.PROJECTS}>
                        <p className="text-primary">Seed encrypt</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                        <p className="text-xs text-secondary"><span className="text-inactive mr-1">Time to code:</span>2 days</p>
                        <SkillsLine skills={['BIP44', 'Next']} />
                    </ProjectCard> */}
                {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Nov 2024</p>
                    <p className="text-base text-secondary">Risk and DeFi Developer @CoinShares</p>
                    <p className="text-xs text-inactive">Nov 2021</p>
                </div> */}
                <ProjectCard path={AppPagePaths.PROJECTS_NFT_STONKS}>
                    <div className="flex w-full justify-between">
                        <p className="text-secondary group-hover:text-primary">NFT stonks</p>
                        <p className="text-xs text-secondary">Oct 2021</p>
                    </div>
                    <p className="text-xs">
                        <span className="mr-1 text-inactive">Time to code:</span>3 weeks
                    </p>
                    <SkillsLine skills={['VueJS', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud', 'Netlify']} />
                </ProjectCard>
                {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Oct 2021</p>
                    <p className="text-base text-secondary">Full Stack Developer @StationF</p>
                    <p className="text-xs text-inactive">Janv 2021</p>
                </div> */}
            </div>
        </PageWrapper>
    )
}
