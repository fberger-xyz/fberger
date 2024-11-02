import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'
import { ReactNode } from 'react'

function SkillsLine(props: { skills: string[] }) {
    return (
        <div className="mt-2 flex w-full justify-end gap-1 text-xs">
            {props.skills.map((skill) => (
                <div className="flex w-fit flex-wrap items-center border border-inactive px-1 py-0.5">
                    <p className="text-nowrap text-secondary">{skill}</p>
                </div>
            ))}
        </div>
    )
}

function ProjectCard(props: { children: ReactNode; path: AppPagePaths }) {
    return (
        <div className="w-full border border-light-hover p-0.5">
            <LinkWrapper
                href={props.path}
                className="flex w-full flex-col gap-1 rounded-sm border border-light-hover px-2 py-1 transition duration-500 hover:border-primary"
            >
                {props.children}
            </LinkWrapper>
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper>
            <ProjectCard path={AppPagePaths.PROJECTS}>
                <p className="text-primary">Aptos Liquidation bot</p>
                <p className="text-sm text-secondary">Time to code: 🚧 - Nov 2024</p>
                <SkillsLine skills={['Self-control', 'Autism', 'Basic mathematics']} />
            </ProjectCard>
            <ProjectCard path={AppPagePaths.PROJECTS_BETTER_FARSIDE}>
                <p className="text-primary">Better Farside</p>
                <p className="text-sm text-secondary">Time to code: 4 days - Nov 2024</p>
                <SkillsLine skills={['Vercel', 'Xata DB', 'Prisma ORM', 'Inngest', 'Grammy', 'Vercel']} />
            </ProjectCard>
            <ProjectCard path={AppPagePaths.PROJECTS}>
                <p className="text-primary">Seed encrypt</p>
                <p className="text-sm text-secondary">Time to code: 2 days - Nov 2024</p>
                <SkillsLine skills={['BIP44', 'Next']} />
            </ProjectCard>
            <ProjectCard path={AppPagePaths.PROJECTS}>
                <p className="text-primary">NFT stonks</p>
                <p className="text-sm text-secondary">Time to code: 3 weeks - Nov 2021</p>
                <SkillsLine skills={['VueJS', 'OpenSea API', 'Etherscan API', 'GCloud']} />
            </ProjectCard>
        </PageWrapper>
    )
}
