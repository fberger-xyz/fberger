import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import ProjectCard from '@/components/common/ProjectCard'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'

export const metadata = generatePageMetadata(AppPagePaths.PROJECTS)

export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="Side projects" ulClassname="gap-3">
                <p className="text-inactive">Some projects I can publicly speak about</p>
                <ProjectCard
                    target="_blank"
                    path="https://www.trustee.fund/rates"
                    title="Lend"
                    description="Live APYs for $, €, ETH and BTC"
                    date="Jan 2025"
                    ttc="WIP 🚧"
                    skills={['Aave', 'Morpho', 'Fluid', 'Liquity']}
                />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_TRUSTEE}
                    title="Trustee"
                    description="Dynamic management for busy holders"
                    date="Dec 2024"
                    ttc="+3 weeks"
                    skills={['Telegram', 'OpenAI', 'Safe', 'Debank', 'Arbitrum']}
                />
                <ProjectCard
                    path={AppPagePaths.PROJECTS_ETFS}
                    title="ETFs"
                    description="Better farside"
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
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.HOME} next={AppPagePaths.XP} />
        </PageWrapper>
    )
}
