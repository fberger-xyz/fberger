import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import ProjectCard from '@/components/common/ProjectCard'
import { SectionWrapper, TextWithBulletPoint } from '@/components/common/SectionWrapper'
import SvgMapper from '@/components/common/SvgMapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, IconIds } from '@/enums'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME}`,
    description: APP_METADATA.SITE_DESCRIPTION,
}

export default function Page() {
    return (
        <PageWrapper>
            {/* <SectionWrapper title="About">
                <TextWithBulletPoint className="font-bold">Passionate 10x developer</TextWithBulletPoint>
                <TextWithBulletPoint>
                    Connecting the dots
                    <span className="font-bold text-primary">TradFi</span>
                    <SvgMapper icon={IconIds.LOADING_DOTS} className="size-3 text-primary" />
                    <span className="font-bold text-primary">DeFi</span>
                </TextWithBulletPoint>
                <TextWithBulletPoint>Skin in the game</TextWithBulletPoint>
            </SectionWrapper> */}
            <SectionWrapper title="About">
                <TextWithBulletPoint className="font-bold">Freelance 10x fullstack developer</TextWithBulletPoint>
                <TextWithBulletPoint>
                    Connecting the dots
                    <span className="font-bold text-primary">TradFi</span>
                    <SvgMapper icon={IconIds.LOADING_DOTS} className="size-3 text-primary" />
                    <span className="font-bold text-primary">DeFi</span>
                </TextWithBulletPoint>
                <TextWithBulletPoint>Skin in the game</TextWithBulletPoint>
                <p className="flex flex-wrap items-center gap-2">
                    {[
                        { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM_LOGO, id: APP_METADATA.SOCIALS.TELEGRAM },
                        { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X, id: '' },
                        {
                            href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`,
                            icon: IconIds.LINKEDIN,
                            id: '',
                        },
                        { href: `https://github.com/${APP_METADATA.SOCIALS.GITHUB}`, icon: IconIds.GITHUB, id: '' },
                    ].map((link) => (
                        <LinkWithIcon
                            key={link.href}
                            href={link.href}
                            className={link.icon === IconIds.TELEGRAM_LOGO ? 'border-2 border-telegram bg-telegram/10 text-telegram' : 'h-9 border-2'}
                        >
                            {link.id && <span className="pr-1">{link.id}</span>}
                            <IconWrapper icon={link.icon} className="size-5" />
                        </LinkWithIcon>
                    ))}
                </p>
            </SectionWrapper>
            <SectionWrapper title="Previously">
                <TextWithBulletPoint className="font-bold">DeFi + Risk developer @CoinShares</TextWithBulletPoint>
                <TextWithBulletPoint>Fullstack developer @StationF</TextWithBulletPoint>
                <TextWithBulletPoint>Transaction Services analyst @GrantThornton</TextWithBulletPoint>
                <TextWithBulletPoint>42 + msc. finance + french CPA</TextWithBulletPoint>
            </SectionWrapper>
            <SectionWrapper title="Some side projects">
                <div className="flex w-full flex-col gap-2">
                    <ProjectCard
                        path="https://apy.fberger.xyz"
                        title="APYs"
                        description="Live metrics on lending markets"
                        date="Jan 2025"
                        ttc="WIP 🚧"
                        skills={['Aave', 'Morpho', 'Fluid', 'Liquity']}
                    />
                    <ProjectCard
                        path="https://trustee.fund"
                        title="Trustee 💸"
                        description="Dynamic management for busy holders"
                        date="Dec 2024"
                        ttc="2 weeks"
                        skills={['Telegram', 'OpenAI', 'Safe', 'Debank', 'Arbitrum']}
                    />
                    <ProjectCard
                        path="https://etfs.fberger.xyz"
                        title="ETFs"
                        description="Better farside"
                        date="Nov 2024"
                        ttc="4 days"
                        skills={['Next', 'Prisma', 'Inngest', 'Grammy', 'Vercel']}
                    />
                    <PreviousOrNextPages next={AppPagePaths.PROJECTS} />
                </div>
            </SectionWrapper>
        </PageWrapper>
    )
}
