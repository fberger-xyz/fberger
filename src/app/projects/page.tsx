import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'

function SkillsLine(props: { skills: string[] }) {
    return (
        <div className="flex w-full justify-end gap-1 text-xs">
            {props.skills.map((skill) => (
                <div className="flex w-fit items-center border border-inactive px-1 py-0.5">
                    <p className="text-secondary">{skill}</p>
                </div>
            ))}
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper>
            <LinkWrapper
                href={AppPagePaths.PROJECTS}
                className="w-full rounded-sm border border-light-hover p-2 transition duration-500 hover:border-primary"
            >
                <p className="text-primary">Aptos Liquidation bot</p>
                <p className="text-secondary">Time to code: 🚧 - Nov 2024</p>
                <SkillsLine skills={['Self-control', 'Autism', 'Basic mathematics']} />
            </LinkWrapper>
            <LinkWrapper
                href={AppPagePaths.PROJECTS_BETTER_FARSIDE}
                className="w-full rounded-sm border border-light-hover p-2 transition duration-500 hover:border-primary"
            >
                <p className="text-primary">Better Farside</p>
                <p className="text-secondary">Time to code: 4 days - Nov 2024</p>
                <SkillsLine skills={['Vercel', 'Xata DB', 'Prisma ORM', 'Inngest', 'Grammy', 'Vercel']} />
            </LinkWrapper>
            <LinkWrapper
                href={AppPagePaths.PROJECTS}
                className="w-full rounded-sm border border-light-hover p-2 transition duration-500 hover:border-primary"
            >
                <p className="text-primary">Seed encrypt</p>
                <p className="text-secondary">Time to code: 2 days - Nov 2024</p>
                <SkillsLine skills={['BIP44', 'Next']} />
            </LinkWrapper>
            <LinkWrapper
                href={AppPagePaths.PROJECTS}
                className="w-full rounded-sm border border-light-hover p-2 transition duration-500 hover:border-primary"
            >
                <p className="text-primary">NFT stonks</p>
                <p className="text-secondary">Time to code: 3 weeks - Nov 2021</p>
                <SkillsLine skills={['Vue JS', 'OpenSea API', 'Etherscan API', 'Google Cloud', 'Netlify']} />
            </LinkWrapper>
        </PageWrapper>
    )
}
