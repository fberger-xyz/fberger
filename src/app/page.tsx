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

const BulletPoint = () => <span className="pr-1 text-inactive">&#x2022;</span>
const bulletPointWrapperClassNames = 'flex gap-2 items-center flex-wrap'
const SectionWrapper = (props: { title: string; children: ReactNode }) => (
    <div className="flex flex-col gap-2">
        <p className="font-bold text-primary">{props.title}</p>
        <ul className="flex flex-col gap-1 text-lg">{props.children}</ul>
    </div>
)

export default function Page() {
    return (
        <PageWrapper className="gap-8">
            <SectionWrapper title="About">
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <div className="flex items-center gap-1">
                        <p>Connecting the Dots</p>
                        <p className="font-bold text-primary">TradFi</p>
                        <SvgMapper icon={IconIds.LOADING_DOTS} className="size-4" />
                        <p className="font-bold text-primary">DeFi</p>
                    </div>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>XP in DeFi and Risk Management</p>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Passionate 10x dev</p>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Skin in the game</p>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>🇫🇷</p>
                </li>
            </SectionWrapper>
            <SectionWrapper title="Contact">
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    Telegram
                    <LinkWithIcon href={`https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`}>
                        @{APP_METADATA.SOCIALS.TELEGRAM} <IconWrapper icon={IconIds.TELEGRAM_LOGO} className="size-5" />
                    </LinkWithIcon>
                </li>
            </SectionWrapper>
            <SectionWrapper title="Currently">
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Working on dynamic asset management with</p>
                    <LinkWithIcon href={`https://trustees.fberger.xyz`}>
                        <p className="font-bold">Trustees</p>
                    </LinkWithIcon>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Freelance go-getter for B2C & B2B clients</p>
                    <p className="text-inactive">Since Dec 2024</p>
                </li>
            </SectionWrapper>
            <SectionWrapper title="Experiences">
                <p className="text-inactive">Non exhaustive</p>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>DeFi then Risk Developer @CoinShares</p>
                    <p className="text-inactive">Nov 2021 {'>'} Nov 2024</p>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Full-Stack Developer @StationF</p>
                    <p className="text-inactive">Jan 2021 {'>'} Oct 2021</p>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Transaction Advisory Services Analyst (TAS)</p>
                    <p className="text-inactive">2017 & 2019</p>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Studies</p>
                    <p className="text-inactive">Msc. finance + chartered accountant + 42 in Paris</p>
                </li>
            </SectionWrapper>
            <PreviousOrNextPages next={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
