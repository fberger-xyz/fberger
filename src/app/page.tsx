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
            <SectionWrapper title="About">
                <TextWithBulletPoint>Passionate 10x developer</TextWithBulletPoint>
                <TextWithBulletPoint>
                    Connecting the dots
                    <span className="font-bold text-primary">TradFi</span>
                    <SvgMapper icon={IconIds.LOADING_DOTS} className="size-3" />
                    <span className="font-bold text-primary">DeFi</span>
                </TextWithBulletPoint>
                <TextWithBulletPoint>Skin in the game</TextWithBulletPoint>
            </SectionWrapper>
            <SectionWrapper title="Currently">
                <TextWithBulletPoint>Freelance fullstack dev</TextWithBulletPoint>
                <TextWithBulletPoint>
                    Working on{' '}
                    <LinkWithIcon href={`https://trustee.fund`}>
                        <span className="font-bold">Trustee fund 💸</span>
                    </LinkWithIcon>{' '}
                </TextWithBulletPoint>
            </SectionWrapper>
            <SectionWrapper title="XP">
                <TextWithBulletPoint className="font-bold">DeFi and Risk Developer @CoinShares</TextWithBulletPoint>
                <TextWithBulletPoint>Full-Stack Developer @StationF</TextWithBulletPoint>
                <TextWithBulletPoint>TAS Analyst @GrantThornton</TextWithBulletPoint>
                <TextWithBulletPoint>Msc finance + CPA + CS @42</TextWithBulletPoint>
            </SectionWrapper>
            <SectionWrapper title="Contact me">
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
                            className={link.icon === IconIds.TELEGRAM_LOGO ? 'border-2 border-telegram bg-telegram/10 text-telegram' : 'h-9'}
                        >
                            {link.id && <span className="pr-1">{link.id}</span>}
                            <IconWrapper icon={link.icon} className="size-5" />
                        </LinkWithIcon>
                    ))}
                </p>
            </SectionWrapper>
            <SectionWrapper title="Some side projects">
                <div className="flex w-full flex-col gap-2">
                    <ProjectCard
                        target="_blank"
                        path="https://www.trustee.fund/rates"
                        title="APYs"
                        description="Live metrics on lending markets"
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
                        ttc="2 weeks"
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
                    <PreviousOrNextPages next={AppPagePaths.PROJECTS} />
                </div>
            </SectionWrapper>
            {/* <div className="flex w-full justify-center border-t-4 border-double border-very-light-hover pt-10 text-base text-inactive">
                <p className="text-center italic">
                    « If I have seen further, it is by standing on the shoulders of giants »<span className="mx-1">-</span>
                    <span className="font-bold not-italic">Isaac Newton</span>
                </p>
            </div> */}
            {/* <br /> */}
        </PageWrapper>
    )
}
