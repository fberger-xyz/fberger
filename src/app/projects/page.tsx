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
                    path="https://apy.fberger.xyz"
                    title="APY"
                    description="Live money markets metrics"
                    date="Jan 2025"
                    ttc="WIP 🚧"
                    skills={['Aave', 'Morpho', 'Fluid', 'Liquity']}
                />
                <ProjectCard
                    target="_blank"
                    path="https://trustee.fund"
                    title="Trustee"
                    description="Dynamic management for busy holders"
                    date="Dec 2024"
                    ttc="+3 weeks"
                    skills={['Telegram', 'OpenAI', 'Safe', 'Debank', 'Arbitrum']}
                />
                <ProjectCard
                    target="_blank"
                    path="https://etfs.fberger.xyz"
                    title="ETFs"
                    description="Better farside"
                    date="Nov 2024"
                    ttc="4 days"
                    skills={['Next', 'Prisma', 'Inngest', 'Grammy', 'Vercel']}
                />
                <ProjectCard
                    target="_blank"
                    path="https://seeds.fberger.xyz"
                    title="Seeds"
                    date="Nov 2024"
                    description="Simple cipher to store your seed phrase"
                    ttc="< 1 day"
                    skills={['BIP39', 'Rot Cipher']}
                />
                <ProjectCard
                    target="_blank"
                    path="https://safes.fberger.xyz"
                    description="[WIP] entrypoint to manage several safes"
                    title="Safes"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next', 'Gnosis Safe', '1inch', 'Cowswap']}
                />
                <ProjectCard
                    title="Auth"
                    target="_blank"
                    path="https://connect.fberger.xyz"
                    description="RabbyKit + Next Auth via SIWE (template)"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next', 'RabbyKit', 'Wagmi']}
                />
                <ProjectCard
                    target="_blank"
                    path="https://alpha.fberger.xyz"
                    description="[WIP] Alpha sources, without noise"
                    title="Alpha"
                    date="Nov 2024"
                    ttc="< 1 day"
                    skills={['Next']}
                />
                <ProjectCard
                    target="_blank"
                    path="https://www.linkedin.com/posts/francis-berger-a2404094_degen-web3-nft-activity-6879062483768795136-WomP/?utm_source=share&utm_medium=member_desktop"
                    title="NFT stonks"
                    description="OpenSea trades recap w/ P&L"
                    date="Oct 2021"
                    ttc="3 weeks"
                    skills={['Vue.js', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud']}
                />
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.HOME} next={AppPagePaths.XP} />
        </PageWrapper>
    )
}
