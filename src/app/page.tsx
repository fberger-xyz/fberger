import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import ProjectCard from '@/components/common/ProjectCard'
import { BulletPoint, bulletPointClassNames, SectionWrapper } from '@/components/common/SectionWrapper'
import SvgMapper from '@/components/common/SvgMapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, IconIds } from '@/enums'
import { generatePageMetadata } from '@/utils'

export const metadata = generatePageMetadata(AppPagePaths.HOME)

export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="About">
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Connecting the Dots
                    <span className="font-bold text-primary">TradFi</span>
                    <SvgMapper icon={IconIds.LOADING_DOTS} className="size-4" />
                    <span className="font-bold text-primary">DeFi</span>
                </p>
                {/* <p className={bulletPointClassNames}>
                    <BulletPoint />
                    XP in DeFi and Risk Management
                </p> */}
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Passionate 10x dev
                </p>
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Skin in the game
                </p>
                {/* <p className={bulletPointClassNames}>
                    <BulletPoint />
                    🇫🇷
                </p> */}
            </SectionWrapper>
            <SectionWrapper title="Currently">
                {/* <p className="text-inactive">Mainly</p> */}
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Freelance go-getter for B2C & B2B
                    {/* <span className="text-inactive">Since Dec 2024</span> */}
                </p>
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Working on
                    <LinkWithIcon href={`https://trustees.fberger.xyz`}>
                        <span className="font-bold">Trustees 💸</span>
                    </LinkWithIcon>
                </p>
            </SectionWrapper>
            <SectionWrapper title="XP">
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    DeFi and Risk Developer @CoinShares
                    {/* <span className="text-inactive">2021 {'>'} 2024</span> */}
                </p>
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Full-Stack Developer @StationF
                    {/* <span className="text-inactive">2021</span> */}
                </p>
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    TAS Analyst @GrantThornton
                    {/* <span className="text-inactive">2017 & 2019</span> */}
                </p>
                <p className={bulletPointClassNames}>
                    <BulletPoint />
                    Student in Finance + Computer Sciences
                    {/* <span className="text-inactive">Msc. Finance + CPA + 42</span> */}
                </p>
            </SectionWrapper>
            <SectionWrapper title="Socials">
                <p className={bulletPointClassNames}>
                    {/* <BulletPoint /> */}
                    {[
                        { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM_LOGO, id: APP_METADATA.SOCIALS.TELEGRAM },
                        { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X, id: APP_METADATA.SOCIALS.X },
                        {
                            href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`,
                            icon: IconIds.LINKEDIN,
                            id: 'Francis Berger',
                        },
                        { href: `https://github.com/${APP_METADATA.SOCIALS.GITHUB}`, icon: IconIds.GITHUB, id: APP_METADATA.SOCIALS.GITHUB },
                    ].map((link) => (
                        <LinkWithIcon key={link.href} href={link.href}>
                            {link.id}
                            <IconWrapper icon={link.icon} className="size-6 pl-1" />
                        </LinkWithIcon>
                    ))}
                    {/* <LinkWithIcon href={`https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`}>
                        @{APP_METADATA.SOCIALS.TELEGRAM} <IconWrapper icon={IconIds.TELEGRAM_LOGO} className="size-5" />
                    </LinkWithIcon>
                    <LinkWithIcon href={`https://t.me/${APP_METADATA.SOCIALS.X}`}>
                        @{APP_METADATA.SOCIALS.X} <IconWrapper icon={IconIds.X} className="size-5" />
                    </LinkWithIcon>
                    <LinkWithIcon href={`https://t.me/${APP_METADATA.SOCIALS.X}`}>
                        @{APP_METADATA.SOCIALS.LINKEDIN} <IconWrapper icon={IconIds.LINKEDIN} className="size-5" />
                    </LinkWithIcon> */}
                </p>
            </SectionWrapper>
            <SectionWrapper title="Side projects">
                <p className="text-inactive">Always TradFi/DeFi related</p>
                <div className="flex w-full flex-col gap-2">
                    <ProjectCard
                        path={AppPagePaths.PROJECTS_TRUSTEES}
                        title="Trustees"
                        date="Dec 2024"
                        ttc="2 weeks"
                        skills={['Telegram', 'OpenAI', 'Safe', 'Debank', 'Arbitrum']}
                    />
                    <ProjectCard
                        path={AppPagePaths.PROJECTS_ETFS}
                        title="ETFs"
                        date="Nov 2024"
                        ttc="4 days"
                        skills={['Next', 'Prisma', 'Inngest', 'Grammy', 'Vercel']}
                    />
                    <LinkWrapper
                        href={AppPagePaths.PROJECTS}
                        className="group flex items-center justify-center gap-1 rounded-2xl p-2 text-primary hover:underline"
                    >
                        <p className="font-bold">See all projects</p>
                        <IconWrapper icon={IconIds.DOUBLE_CHEVRON_RIGHT} className="size-5" />
                    </LinkWrapper>
                </div>
            </SectionWrapper>
            {/* <PreviousOrNextPages next={AppPagePaths.PROJECTS} /> */}
            <br />
            {/* <PreviousOrNextPages next={AppPagePaths.PROJECTS} /> */}
        </PageWrapper>
    )
}
