import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper, TextWithBulletPoint } from '@/components/common/SectionWrapper'
import { AppPagePaths, IconIds } from '@/enums'
import { cn, generatePageMetadata } from '@/utils'
import { ReactNode } from 'react'
import { cardGradientClasses } from '@/components/common/CardGradient'

export const metadata = generatePageMetadata(AppPagePaths.XP)

interface PositionProps {
    companyName?: string
    href?: string
    positionName: string
    dates: string
    children: ReactNode
}

interface PositionWrapperProps {
    companyName?: string
    href?: string
    positionName: string
    dates: string
}

const PositionLayout = (props: { children?: ReactNode }) => {
    return (
        <div className="flex w-full items-center">
            <div className="w-6 border-b-2 border-light-hover" />
            {props.children}
        </div>
    )
}

const commonClasses = cn(cardGradientClasses, 'items-start gap-0.5 p-2 w-full')
const details = 'pl-8 text-xs text-inactive group-hover:text-default lg:text-sm'

const PositionWrapper = (props: PositionWrapperProps) => {
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

const Position = ({ companyName, href, positionName, dates, children }: PositionProps) => (
    <PositionLayout>
        <li className={commonClasses}>
            <PositionWrapper companyName={companyName} href={href} positionName={positionName} dates={dates} />
            {children}
        </li>
    </PositionLayout>
)

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
                    <Position companyName="Freelance" href="https://fberger.xyz/" positionName="Senior Fullstack Developer" dates="Dec 2024 - now">
                        <TextWithBulletPoint>Go-getter for clients like @CoinShares and other Web2 clients</TextWithBulletPoint>
                        <TextWithBulletPoint>5y fullstack + 3y in institutional crypto + tradFi xp</TextWithBulletPoint>
                        <p className={details}>In fulltime positions, freelance, weekends/holidays side projects</p>
                        <TextWithBulletPoint>Typescript stack</TextWithBulletPoint>
                        <p className={details}>Frontend: next (works flawlessly + smash SEO), tailwind, tanstack/query, zustand</p>
                        <p className={details}>Charts: echarts, highcharts</p>
                        <p className={details}>Backend: next and nest APIs, prisma, postgresql</p>
                        <p className={details}>DevOps: github/gitlab pipelines with docker and AWS (or just vercel)</p>
                        <p className={details}>Auth: next-auth JWT, kinde</p>
                        <p className={details}>DeFi: viem, ethers, hardhat, the graph</p>
                        <p className={details}>Automations: telegram, inngest, openai, claude</p>
                    </Position>
                    <Position
                        companyName="CoinShares"
                        href="https://coinshares.com/"
                        positionName="Risk / DeFi — Senior Fullstack Developer"
                        dates="Nov 2021 > Nov 2024"
                    >
                        <TextWithBulletPoint>Designed, coded and maintained real-time risk applications used 24/7</TextWithBulletPoint>
                        <p className={details}>By operations, quants, traders and top management to monitor:</p>
                        <p className="pl-10 text-xs text-inactive group-hover:text-default lg:text-sm">
                            1) P&L and risk exposure (hedge funds, lending and staking activities)
                        </p>
                        <p className="pl-10 text-xs text-inactive group-hover:text-default lg:text-sm">
                            2) Trading strategies (positions, volatility surfaces, greeks - lot of data streamed via Nats.js)
                        </p>
                        <p className="pl-10 text-xs text-inactive group-hover:text-default lg:text-sm">
                            3) Strategies reactions to economic calendar
                        </p>
                        <TextWithBulletPoint>Automated the edit of complex risk reports for top management</TextWithBulletPoint>
                        <TextWithBulletPoint>Improved legacy stack w/ best-in-class typescript dev tools</TextWithBulletPoint>
                        <TextWithBulletPoint>Research analyst for top management</TextWithBulletPoint>
                        <p className={details}>- Eth 2.0 deep dive for staking operations</p>
                        <LinkWrapper
                            className="z-50 pl-12 text-xs text-inactive underline hover:text-primary lg:text-sm"
                            href="https://blog.coinshares.com/unstaking-ethereum-piecing-the-exit-puzzle-7a0537b13349"
                            target="_blank"
                        >
                            <p>for example: "Unstaking Ether: Piecing the Exit Puzzle"</p>
                        </LinkWrapper>
                        <p className={details}>- On DeFi protocols</p>
                        <TextWithBulletPoint>Ran Ethereum nodes in AWS EC2 (eth-docker)</TextWithBulletPoint>
                        <p className={details}>- To test the Shanghai upgrade (AWS EC2 + docker + traefik)</p>
                        <p className={details}>- To explore MEV opportunities</p>
                        <TextWithBulletPoint>CI/CD to run several Typescript bots in AWS</TextWithBulletPoint>
                        <p className={details}>- Several use cases - for instance SEC website scrappers</p>
                        <p className={details}>- stack: Nest.js APIs with CI/CD pipelines for AWS lambda/DynamoDB/Cloudwatch etc.</p>
                        <TextWithBulletPoint>
                            Developed and deployed an audited DeFi dApp for tokenizing on-chain fund liabilities
                        </TextWithBulletPoint>
                        <p className={details}>- Fullstack DeFi Developer (VueJs + Vite + Solidity + Hardhat + The Graph + Synaps KYC)</p>
                        <div className="mt-2 flex flex-col text-sm text-inactive">
                            <p>Best xp so far, references on request.</p>
                            <p>Left to explore EVM use cases (tokenization/lending/stablecoins)</p>
                        </div>
                    </Position>
                    <Position
                        companyName="StationF"
                        href="https://stationf.co/"
                        positionName="Fullstack Typescript Developer"
                        dates="Jan 2021 > Oct 2021"
                    >
                        <TextWithBulletPoint>Shipped multiple new features for the Station F community</TextWithBulletPoint>
                        <TextWithBulletPoint>Adopted best practices to commit a clean code (unit, integration, e2e tests)</TextWithBulletPoint>
                        <TextWithBulletPoint>Maintenance of web services used by thousands of startuppers incubated at StationF</TextWithBulletPoint>
                        <p className="mt-2 text-sm text-inactive">Left to explore Ethereum</p>
                    </Position>
                    <Position
                        companyName="GrantThornton"
                        href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/"
                        positionName="Transaction Services Analyst"
                        dates="2017 & 2019"
                    >
                        <TextWithBulletPoint>Small & mid cap valuations in M&A context, waterfalls, statistical modelling</TextWithBulletPoint>
                        <TextWithBulletPoint>Memorandum, due diligences, litigation support</TextWithBulletPoint>
                        <p className="mt-2 text-sm text-inactive">Left to pivot in tech</p>
                    </Position>
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
