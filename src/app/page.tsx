import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import SvgMapper from '@/components/common/SvgMapper'
import { APP_METADATA } from '@/config/app.config'
import { IconIds } from '@/enums'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'fberger.xyz | Home',
}

const BulletPoint = () => <span className="pr-1 text-inactive">&#x2022;</span>
const bulletPointWrapperClassNames = 'flex gap-2 items-center'
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
                    <p>XP in DeFi and Risk Management @CoinShares</p>
                </li>
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
                    <p>10x dev, skin in the game</p>
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
                        @{APP_METADATA.SOCIALS.TELEGRAM} <IconWrapper icon={IconIds.TELEGRAM} className="size-5" />
                    </LinkWithIcon>
                </li>
            </SectionWrapper>
            <SectionWrapper title="Currently">
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Working on</p>
                    <LinkWithIcon href="https://t.me/trustees_fberger_bot">
                        <p>
                            Trustees <span className="pl-1 text-xl">🤖</span>
                        </p>
                    </LinkWithIcon>
                </li>
                <li className={bulletPointWrapperClassNames}>
                    <BulletPoint />
                    <p>Freelance for B2C and B2B clients</p>
                </li>
            </SectionWrapper>
        </PageWrapper>
    )
}
