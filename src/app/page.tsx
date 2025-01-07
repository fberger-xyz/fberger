import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import SvgMapper from '@/components/common/SvgMapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, IconIds } from '@/enums'
import { generatePageMetadata } from '@/utils'
import { ReactNode } from 'react'

export const metadata = generatePageMetadata(AppPagePaths.HOME)

const BulletPoint = () => <span className="pr-2 text-inactive">&#x2022;</span>
const bulletPointWrapperClassNames = 'flex gap-1.5 items-center flex-wrap'
const SectionWrapper = (props: { title: string; children: ReactNode }) => (
    <div className="flex flex-col">
        <p className="mb-1 text-xl font-bold text-primary">{props.title}</p>
        <ul className="flex flex-col gap-1 text-base">{props.children}</ul>
    </div>
)

export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="About">
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Connecting the Dots
                    <span className="font-bold text-primary">TradFi</span>
                    <SvgMapper icon={IconIds.LOADING_DOTS} className="size-4" />
                    <span className="font-bold text-primary">DeFi</span>
                </p>
                {/* <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    XP in DeFi and Risk Management
                </p> */}
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Passionate 10x dev
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Skin in the game
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    🇫🇷
                </p>
            </SectionWrapper>
            <SectionWrapper title="Currently">
                {/* <p className="text-inactive">Mainly</p> */}
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Freelance go-getter for B2C & B2B clients
                    {/* <span className="text-inactive">Since Dec 2024</span> */}
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Working on
                    <LinkWithIcon href={`https://trustees.fberger.xyz`}>
                        <span className="font-bold">Trustees 💸</span>
                    </LinkWithIcon>
                </p>
            </SectionWrapper>
            <SectionWrapper title="Experiences">
                <p className="text-inactive">Non exhaustive</p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    DeFi and Risk Developer @CoinShares
                    {/* <span className="text-inactive">2021 {'>'} 2024</span> */}
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Full-Stack Developer @StationF
                    {/* <span className="text-inactive">2021</span> */}
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    TAS Analyst @GrantThornton
                    {/* <span className="text-inactive">2017 & 2019</span> */}
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Student in Finance + CPA + Comp. Sciences
                    {/* <span className="text-inactive">Msc. Finance + CPA + 42</span> */}
                </p>
            </SectionWrapper>
            <SectionWrapper title="Contact me">
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
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
            <PreviousOrNextPages next={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
