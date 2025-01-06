import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import SvgMapper from '@/components/common/SvgMapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, IconIds } from '@/enums'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'fberger.xyz | Home',
}

const BulletPoint = () => <span className="pr-2 text-inactive">&#x2022;</span>
const bulletPointWrapperClassNames = 'flex gap-1 items-center flex-wrap'
const SectionWrapper = (props: { title: string; children: ReactNode }) => (
    <div className="flex flex-col">
        <p className="font-bold text-primary">{props.title}</p>
        <ul className="flex flex-col gap-1 text-lg">{props.children}</ul>
    </div>
)

export default function Page() {
    return (
        <PageWrapper className="gap-6">
            <SectionWrapper title="About">
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Connecting the Dots
                    <span className="font-bold text-primary">TradFi</span>
                    <SvgMapper icon={IconIds.LOADING_DOTS} className="size-4" />
                    <span className="font-bold text-primary">DeFi</span>
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    XP in DeFi and Risk Management
                </p>
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
            <SectionWrapper title="Contact">
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Telegram
                    <LinkWithIcon href={`https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`}>
                        @{APP_METADATA.SOCIALS.TELEGRAM} <IconWrapper icon={IconIds.TELEGRAM_LOGO} className="size-5" />
                    </LinkWithIcon>
                </p>
            </SectionWrapper>
            <SectionWrapper title="Currently">
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Working on
                    <LinkWithIcon href={`https://trustees.fberger.xyz`}>
                        <span className="font-bold">Trustees</span>
                    </LinkWithIcon>
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Freelance go-getter for B2C & B2B clients
                    <span className="text-inactive">Since Dec 2024</span>
                </p>
            </SectionWrapper>
            <SectionWrapper title="Experiences">
                <p className="text-inactive">Non exhaustive</p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    DeFi and Risk Developer @CoinShares
                    <span className="text-inactive">2021 {'>'} 2024</span>
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Full-Stack Developer @StationF
                    <span className="text-inactive">2021</span>
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    TAS Analyst @GrantThornton
                    <span className="text-inactive">2017 & 2019</span>
                </p>
                <p className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Studies
                    <span className="text-inactive">Msc. Finance + CPA + 42</span>
                </p>
            </SectionWrapper>
            <PreviousOrNextPages next={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
