import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper, TextWithBulletPoint } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'

export const metadata = generatePageMetadata(AppPagePaths.XP)

const commonClasses =
    'group flex flex-col items-start gap-0.5 rounded-2xl border-2 border-transparent p-2 hover:border-light-hover md:px-2 hover:bg-background/50'
const PositionWrapper = (props: { companyName?: string; href?: string; positionName: string; dates: string }) => {
    return (
        <div className="flex w-full flex-col items-baseline gap-1 sm:flex-row sm:gap-2">
            {props.companyName && props.href && (
                <LinkWithIcon href={props.href}>
                    <span className="truncate text-base">@{props.companyName}</span>
                </LinkWithIcon>
            )}
            <p className="truncate text-xl font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                {props.positionName}
            </p>
            <p className="grow truncate text-right text-sm text-inactive">{props.dates}</p>
        </div>
    )
}
export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="Experiences">
                <p className="text-inactive">Non-exhaustive</p>
                <li className={commonClasses}>
                    <PositionWrapper
                        companyName="Freelance"
                        href="https://fberger.xyz/"
                        positionName={'Senior Fullstack Developer'}
                        dates={'Dec 2024 - now'}
                    />
                    <TextWithBulletPoint>Go getter for clients like @CoinShares</TextWithBulletPoint>
                    <TextWithBulletPoint>State-of-the-art Typescript stack</TextWithBulletPoint>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                        Frontend: react with next, tailwind, zustand, vercel (v good for SEO)
                    </p>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Backend: nest, docker, AWS</p>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Database: postgresql, prisma</p>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Auth: next-auth, kinde</p>
                </li>
                <li className={commonClasses}>
                    <PositionWrapper
                        companyName="CoinShares"
                        href="https://coinshares.com/"
                        positionName="Risk and DeFi Developer"
                        dates="Nov 2021 > Nov 2024"
                    />
                    <TextWithBulletPoint>
                        Designed, coded and maintained risk applications used daily by ops team + quants + traders + top management to monitor
                    </TextWithBulletPoint>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                        1) P&L and risk exposure (hedge funds, lending and staking activities)
                    </p>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                        2) Trading strategies (positions, volatility surfaces, greeks)
                    </p>
                    <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">3) Strategies reactions to economic calendar</p>
                    <TextWithBulletPoint>Practical research for Staking operations</TextWithBulletPoint>
                    <TextWithBulletPoint>DeFi research for top management</TextWithBulletPoint>
                    <TextWithBulletPoint>Run ethereum nodes to test Shanghai upgrade (with https access via traefik)</TextWithBulletPoint>
                    <TextWithBulletPoint>AWS devOps to run bots (Nest.js API, AWS lambda/DynamoDB/Cloudwatch etc.)</TextWithBulletPoint>
                    <TextWithBulletPoint>Shipped an operational, audited DeFi dApp (solidity, hardhat, ethers, the Graph)</TextWithBulletPoint>
                    <TextWithBulletPoint>
                        Proactive to improve legacy stack w/ best-in-class typescript dev tools (eg. vite, tailwind, zustand)
                    </TextWithBulletPoint>
                    <TextWithBulletPoint>Best xp so far. References on request</TextWithBulletPoint>
                    <p className="mt-2 text-base text-inactive">Left for DeFi</p>
                </li>
                <li className={commonClasses}>
                    <PositionWrapper
                        companyName="StationF"
                        href="https://stationf.co/"
                        positionName="Fullstack Typescript Developer"
                        dates={`Jan 2021 > Oct 2021`}
                    />
                    <TextWithBulletPoint>Best practices to engineer + commit a clean code (unit, integration, e2e tests)</TextWithBulletPoint>
                    <p className="mt-2 text-base text-inactive">Left to work in crypto</p>
                </li>
                <li className={commonClasses}>
                    <PositionWrapper
                        companyName="GrantThornton"
                        href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/"
                        positionName="Transaction Advisory Services Analyst"
                        dates={`2017 & 2019`}
                    />

                    <TextWithBulletPoint>Small & mid cap valuations in M&A context, waterfalls, statistical modelling</TextWithBulletPoint>
                    <TextWithBulletPoint>Memorandum, due diligences, litigation support</TextWithBulletPoint>
                    <p className="mt-2 text-base text-inactive">Left to pivot in tech</p>
                </li>
            </SectionWrapper>

            {/* studies */}
            <SectionWrapper title="Studies">
                <TextWithBulletPoint>
                    42 <span className="text-inactive">2020</span>
                </TextWithBulletPoint>
                <TextWithBulletPoint>
                    French CPA <span className="text-inactive">2019</span>
                </TextWithBulletPoint>
                <TextWithBulletPoint>
                    MSc Corporate Finance <span className="text-inactive">2019</span>
                </TextWithBulletPoint>
            </SectionWrapper>
            <SectionWrapper title="Hobbies">
                <TextWithBulletPoint>Philosophy</TextWithBulletPoint>
                <TextWithBulletPoint>Boxing</TextWithBulletPoint>
                <TextWithBulletPoint>Countryside to touch grass</TextWithBulletPoint>
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
