import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'
import { ReactNode } from 'react'

function SkillsLine(props: { skills: string[] }) {
    return (
        <div className="mt-2 flex w-full flex-wrap justify-end gap-1 text-xs">
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
    ...props
}: {
    children: ReactNode
    path: AppPagePaths | string
    target?: '_blank' | '_self' | '_parent' | '_top'
}) {
    return (
        <div className="group w-full border-b border-light-hover p-0.5 hover:border-primary">
            <LinkWrapper
                href={props.path}
                target={target}
                className="flex w-full flex-col rounded-sm pb-3 pt-1 transition duration-300 hover:border-primary"
            >
                {props.children}
            </LinkWrapper>
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            <p className="text-sm text-default">Some side projects I can publicly speak about</p>
            {/* <ProjectCard path={AppPagePaths.PROJECTS}>
                        <p className="text-primary">Aptos Liquidation bot</p>
                        <p className="text-sm text-secondary">Nov 2024</p>
                        <p className="text-sm text-secondary">🚧</p>
                        <SkillsLine skills={['Autism']} />
                    </ProjectCard> */}
            <ProjectCard path={AppPagePaths.PROJECTS_SAFES_TRADES}>
                <div className="flex justify-between">
                    <p className="text-secondary">Safes Trades</p>
                    <p className="text-xs text-secondary">Nov 2024</p>
                </div>
                <p className="text-xs text-default">Time to code: 1 afternoon</p>
                <SkillsLine skills={['Next', 'Gnosis Safe', '1inch', 'Cowswap', 'Vercel']} />
            </ProjectCard>
            <ProjectCard path={AppPagePaths.PROJECTS_BETTER_FARSIDE}>
                <div className="flex justify-between">
                    <p className="text-secondary">Better Farside</p>
                    <p className="text-xs text-secondary">Nov 2024</p>
                </div>
                <p className="text-xs text-default">Time to code: 4 days</p>
                <SkillsLine skills={['Next', 'Xata DB', 'Prisma', 'Inngest', 'Grammy', 'Vercel']} />
            </ProjectCard>
            {/* <ProjectCard path={AppPagePaths.PROJECTS}>
                        <p className="text-primary">Seed encrypt</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                        <p className="text-xs text-secondary">Time to code: 2 days</p>
                        <SkillsLine skills={['BIP44', 'Next']} />
                    </ProjectCard> */}
            {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Nov 2024</p>
                    <p className="text-base text-secondary">Risk and DeFi Developer @CoinShares</p>
                    <p className="text-xs text-inactive">Nov 2021</p>
                </div> */}
            <ProjectCard path={AppPagePaths.PROJECTS_NFT_STONKS}>
                <div className="flex justify-between">
                    <p className="text-secondary">NFT stonks</p>
                    <p className="text-xs text-secondary">Oct 2021</p>
                </div>
                <p className="text-xs text-default">Time to code: 3 weeks</p>
                <SkillsLine skills={['VueJS', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud', 'Netlify']} />
            </ProjectCard>
            {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Oct 2021</p>
                    <p className="text-base text-secondary">Full Stack Developer @StationF</p>
                    <p className="text-xs text-inactive">Janv 2021</p>
                </div> */}
        </PageWrapper>
    )
}
