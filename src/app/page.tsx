import { Metadata } from 'next'

import { APP_METADATA, sideProjectList } from '@/config/app.config'
import { AppPagePaths, IconIds } from '@/enums'

import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import SideProjectCard from '@/components/common/SideProjectCard'
import { SectionWrapper, TextWithBulletPoint } from '@/components/common/SectionWrapper'
import SvgMapper from '@/components/common/SvgMapper'

export const metadata: Metadata = {
    title: APP_METADATA.SITE_NAME,
    description: APP_METADATA.SITE_DESCRIPTION,
}

const AboutSection = () => (
    <SectionWrapper title="About">
        <TextWithBulletPoint className="font-bold">Freelance — 10x senior fullstack dev</TextWithBulletPoint>
        <TextWithBulletPoint>
            Connecting the dots
            <span className="font-bold text-primary">TradFi</span>
            <SvgMapper icon={IconIds.LOADING_DOTS} className="size-3 text-primary" />
            <span className="font-bold text-primary">DeFi</span>
        </TextWithBulletPoint>
        <TextWithBulletPoint>Skin in the game</TextWithBulletPoint>
    </SectionWrapper>
)

const PreviousSection = () => (
    <SectionWrapper title="Previously">
        <TextWithBulletPoint className="font-bold">Risk / DeFi — senior fullstack dev @CoinShares</TextWithBulletPoint>
        <TextWithBulletPoint>Fullstack dev @StationF</TextWithBulletPoint>
        <TextWithBulletPoint>Transaction Services analyst @GrantThornton</TextWithBulletPoint>
        <TextWithBulletPoint>42 / msc. finance / french CPA</TextWithBulletPoint>
    </SectionWrapper>
)

const ProjectsSection = () => (
    <SectionWrapper title="Side projects">
        <div className="flex w-full flex-col gap-2">
            {sideProjectList.slice(0, 3).map((project) => (
                <SideProjectCard key={project.path} {...project} />
            ))}
        </div>
    </SectionWrapper>
)

export default function Page() {
    return (
        <PageWrapper>
            <AboutSection />
            <PreviousSection />
            <ProjectsSection />
            <PreviousOrNextPages next={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
