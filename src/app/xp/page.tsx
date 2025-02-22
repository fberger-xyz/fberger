import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper, TextWithBulletPoint } from '@/components/common/SectionWrapper'
import { AppPagePaths, IconIds } from '@/enums'
import { generatePageMetadata } from '@/utils'
import { ReactNode } from 'react'

export const metadata = generatePageMetadata(AppPagePaths.XP)

const PositionLayout = (props: { children?: ReactNode }) => {
    return (
        <div className="flex w-full items-center">
            <div className="w-6 border-b-2 border-light-hover" />
            {props.children}
        </div>
    )
}
const commonClasses =
    'group flex flex-col items-start gap-0.5 rounded-2xl border-2 p-2 border-light-hover hover:border-primary hover:border-solid md:px-2 bg-background/50 w-full transition duration-200 ease-in-out'
const PositionWrapper = (props: { companyName?: string; href?: string; positionName: string; dates: string }) => {
    return (
        <div className="flex w-full flex-col items-baseline gap-1 pl-2 sm:flex-row sm:gap-2 md:p-0">
            {props.companyName && props.href && (
                <LinkWithIcon href={props.href}>
                    <span className="truncate text-base">@{props.companyName}</span>
                </LinkWithIcon>
            )}
            <p className="truncate text-wrap text-lg font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline md:text-xl">
                {props.positionName}
            </p>
            <p className="mr-2 grow truncate text-right text-xs text-inactive">{props.dates}</p>
        </div>
    )
}
export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="CV">
                <a href="/Senior-Full-Stack-Engineer-FBERGER-CV.pdf" download className="flex items-center gap-1 hover:text-primary hover:underline">
                    <IconWrapper icon={IconIds.DOWNLOAD} />
                    <p>Download one-pager CV in pdf</p>
                </a>
            </SectionWrapper>
            <SectionWrapper title="Experiences">
                <p className="pb-2 text-inactive">Only fulltime xps</p>
                <div className="flex w-full flex-col gap-4 border-l-2 border-light-hover">
                    <PositionLayout>
                        <li className={commonClasses}>
                            <PositionWrapper
                                companyName="Freelance"
                                href="https://fberger.xyz/"
                                positionName="Senior Fullstack Developer"
                                dates={'Dec 2024 - now'}
                            />
                            <TextWithBulletPoint>Go-getter for clients like @CoinShares and other Web2 clients</TextWithBulletPoint>
                            <TextWithBulletPoint>5y full-stack engineer with 3+y in institutional crypto + TradFi xp</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                In fulltime positions, freelance, weekends/holidays side projects
                            </p>
                            <TextWithBulletPoint>Typescript stack</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                Frontend: next (works flawlessly + smash SEO), tailwind, tanstack/query, zustand
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Charts: echarts, highcharts</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                Backend: next and nest APIs, prisma, postgresql
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                DevOps: github/gitlab pipelines with docker and AWS (or just vercel)
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">Auth: next-auth JWT, kinde</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">DeFi: viem, ethers, hardhat, the graph</p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                Automations: telegram, inngest, openai, claude
                            </p>
                        </li>
                    </PositionLayout>
                    <PositionLayout>
                        <li className={commonClasses}>
                            <PositionWrapper
                                companyName="CoinShares"
                                href="https://coinshares.com/"
                                positionName="Risk / DeFi — Senior Fullstack Developer"
                                dates="Nov 2021 > Nov 2024"
                            />
                            <TextWithBulletPoint>Designed, coded and maintained real-time risk applications used 24/7</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                By operations, quants, traders and top management to monitor:
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
                            <TextWithBulletPoint>Proactively improved legacy stack w/ best-in-class typescript dev tools</TextWithBulletPoint>
                            <TextWithBulletPoint>Research analyst for top management</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                - Eth 2.0 deep dive for staking operations
                            </p>
                            <LinkWrapper
                                className="pl-12 text-xs text-inactive underline hover:text-primary lg:text-sm"
                                href="https://blog.coinshares.com/unstaking-ethereum-piecing-the-exit-puzzle-7a0537b13349"
                                target="_blank"
                            >
                                <p>for example: "Unstaking Ether: Piecing the Exit Puzzle"</p>
                            </LinkWrapper>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">- On DeFi protocols, to keep up to date</p>
                            <TextWithBulletPoint>Ran Ethereum nodes in AWS EC2 (eth-docker)</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                - To test the Shanghai upgrade (with https access via traefik)
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">- To explore MEV opportunities</p>
                            <TextWithBulletPoint>CI/CD to run several Typescript bots in AWS</TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                - Several use cases - for instance SEC website scrappers
                            </p>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                - stack: Nest.js APIs with CI/CD pipelines for AWS lambda/DynamoDB/Cloudwatch etc.
                            </p>
                            <TextWithBulletPoint>
                                Developed and deployed an audited DeFi dApp for tokenizing on-chain fund liabilities
                            </TextWithBulletPoint>
                            <p className="pl-8 text-xs text-inactive group-hover:text-default lg:text-sm">
                                - Fullstack DeFi Developer (solidity with hardhat - bit of foundry) + AWS devOps
                            </p>
                            <div className="mt-2 flex flex-col text-sm text-inactive">
                                <p>Best xp so far, references on request. Left to explore DeFi</p>
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
                            <TextWithBulletPoint>Shipped multiple new features for the Station F community</TextWithBulletPoint>
                            <TextWithBulletPoint>Adopted best practices to commit a clean code (unit, integration, e2e tests)</TextWithBulletPoint>
                            <TextWithBulletPoint>
                                Maintenance of web services used by thousands of startuppers incubated at StationF
                            </TextWithBulletPoint>
                            <p className="mt-2 text-sm text-inactive">Left to explore Ethereum</p>
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

            {/* hobbies */}
            <SectionWrapper title="Hobbies">
                <TextWithBulletPoint>Typescript</TextWithBulletPoint>
                <TextWithBulletPoint>Finance as a way of reading human societies</TextWithBulletPoint>
                <TextWithBulletPoint>Philosophy - the why - thx wikipedia, youtube</TextWithBulletPoint>
                <TextWithBulletPoint customBullet={<span className="w-min pr-2 text-inactive">🥊</span>}>English boxing</TextWithBulletPoint>
                <TextWithBulletPoint>Countryside (to touch grass)</TextWithBulletPoint>
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
                    MSc. Accounting and Corporate Finance <span className="text-inactive">2019</span>
                </TextWithBulletPoint>
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.PROJECTS} />
        </PageWrapper>
    )
}
