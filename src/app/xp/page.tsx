import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper, TextWithBulletPoint } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'
import { ReactNode } from 'react'

export const metadata = generatePageMetadata(AppPagePaths.XP)

const PositionLayout = (props: { children?: ReactNode }) => {
    return (
        <div className="flex w-full items-center">
            <div className="w-6 border-b-2 border-dotted border-inactive" />
            {props.children}
        </div>
    )
}
const commonClasses =
    'group flex flex-col items-start gap-0.5 rounded-2xl border-2 p-2 border-inactive hover:border-primary border-dotted hover:border-solid md:px-2 hover:bg-background/50 w-full'
const PositionWrapper = (props: { companyName?: string; href?: string; positionName: string; dates: string }) => {
    return (
        <div className="flex w-full flex-col items-baseline gap-1 pl-2 sm:flex-row sm:gap-2 md:p-0">
            {props.companyName && props.href && (
                <LinkWithIcon href={props.href}>
                    <span className="truncate text-base">@{props.companyName}</span>
                </LinkWithIcon>
            )}
            <p className="truncate text-lg font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline md:text-xl">
                {props.positionName}
            </p>
            <p className="mr-2 grow truncate text-right text-xs text-inactive">{props.dates}</p>
        </div>
    )
}
export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="Experiences">
                <p className="pb-2 text-inactive">Only fulltime xps</p>
                <div className="flex w-full flex-col gap-4 border-l-2 border-dotted border-inactive">
                    <PositionLayout>
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
                                Frontend: next, tailwind, zustand (v good for SEO)
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Charts: echarts, highcharts</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Backend: nest, prisma, postgresql</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">DevOps: vercel, docker, AWS</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Auth: next-auth, kinde</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                DeFi: viem, ethers, hardhat, the graph, dune
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Automations: inngest, openai, claude</p>
                        </li>
                    </PositionLayout>
                    <PositionLayout>
                        <li className={commonClasses}>
                            <PositionWrapper
                                companyName="CoinShares"
                                href="https://coinshares.com/"
                                positionName="Risk and DeFi Developer"
                                dates="Nov 2021 > Nov 2024"
                            />
                            <TextWithBulletPoint>Designed, coded and maintained risk applications</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                Used daily by operations, quants, traders and top management to monitor:
                            </p>
                            <p className="pl-10 text-xs text-inactive group-hover:text-default lg:text-sm">
                                1) P&L and risk exposure (hedge funds, lending and staking activities)
                            </p>
                            <p className="pl-10 text-xs text-inactive group-hover:text-default lg:text-sm">
                                2) Trading strategies (positions, volatility surfaces, greeks)
                            </p>
                            <p className="pl-10 text-xs text-inactive group-hover:text-default lg:text-sm">
                                3) Strategies reactions to economic calendar
                            </p>
                            <TextWithBulletPoint>Proactive to improve legacy stack w/ best-in-class typescript dev tools</TextWithBulletPoint>
                            <TextWithBulletPoint>Research for top management</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">- For Staking operations</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">- On DeFi protocols</p>
                            <TextWithBulletPoint>Run ethereum nodes to test Shanghai upgrade (with https access via traefik)</TextWithBulletPoint>
                            <TextWithBulletPoint>
                                Shipped an operational, audited DeFi dApp to tokenize investment fund liabilities
                            </TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">- Fullstack DeFi Developer</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                - AWS devOps to run bots (Nest.js API, AWS lambda/DynamoDB/Cloudwatch etc.)
                            </p>
                            <div className="mt-2 flex flex-col text-sm text-inactive">
                                <p className="">Best xp so far, references on request. Left for DeFi</p>
                            </div>
                        </li>
                    </PositionLayout>
                    <PositionLayout>
                        <li className={commonClasses}>
                            <PositionWrapper
                                companyName="StationF"
                                href="https://stationf.co/"
                                positionName="Fullstack Typescript Developer"
                                dates={`Jan 2021 > Oct 2021`}
                            />
                            <TextWithBulletPoint>Best practices to engineer + commit a clean code (unit, integration, e2e tests)</TextWithBulletPoint>
                            <p className="mt-2 text-sm text-inactive">Left to work in crypto</p>
                        </li>
                    </PositionLayout>
                    <PositionLayout>
                        <li className={commonClasses}>
                            <PositionWrapper
                                companyName="GrantThornton"
                                href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/"
                                positionName="Transaction Services Analyst"
                                dates={`2017 & 2019`}
                            />

                            <TextWithBulletPoint>Small & mid cap valuations in M&A context, waterfalls, statistical modelling</TextWithBulletPoint>
                            <TextWithBulletPoint>Memorandum, due diligences, litigation support</TextWithBulletPoint>
                            <p className="mt-2 text-sm text-inactive">Left to pivot in tech</p>
                        </li>
                    </PositionLayout>
                </div>
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
