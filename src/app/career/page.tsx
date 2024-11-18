import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Career | fberger',
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            <p className="text-sm lg:text-base">Summary excluding freelance and side projects</p>
            {/* xp */}
            <div className="flex flex-col gap-2 pb-1">
                <div className="flex items-baseline gap-2">
                    <p className="font-bold text-primary">Experiences</p>
                </div>
                <ul className="flex flex-col gap-3 sm:gap-1">
                    <li className="mb-1 flex flex-col">
                        <div className="mb-0.5 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Freelance</p>
                            <p className="text-sm">Dec 2024 - now</p>
                        </div>
                    </li>
                    <li className="mb-1 flex flex-col">
                        <div className="mb-0.5 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Risk and DeFi Developer</p>
                            <p className="text-sm">Nov 2021 {'>'} Nov 2024</p>
                            <LinkWithIcon href="https://coinshares.com/">
                                <p className="text-base">CoinShares</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-xs opacity-80">
                            &#x2022; Coded frontends and backends used daily by ops team + quants + traders + top management
                        </p>
                        <p className="pl-4 text-xs opacity-80">1) to compute P&L and risk exposure (hedge funds, lending and staking activities)</p>
                        <p className="pl-4 text-xs opacity-80">2) to monitor trading strategies (positions, volatility surfaces, greeks)</p>
                        <p className="pl-4 text-xs opacity-80">3) to adapt strategies to economic calendar</p>
                        <p className="text-xs opacity-80">&#x2022; Practical research on Staking</p>
                        <p className="text-xs opacity-80">
                            &#x2022; Shipped an operational, audited DeFi dApp (solidity, hardhat, ethers, the Graph)
                        </p>
                        <p className="text-xs opacity-80">&#x2022; Run ethereum nodes to test Shanghai upgrade (with https access)</p>
                        <p className="text-xs opacity-80">&#x2022; AWS DevOps to run bots (Nestjs APIs)</p>
                        <p className="text-xs opacity-80">
                            &#x2022; Proactive to improve legacy stack w/ best-in-class dev tools (eg. vite, tailwind, zustand)
                        </p>
                        <p className="text-xs opacity-80">{'>'} Left to focus on DeFi</p>
                    </li>
                    <li className="mb-1 flex flex-col">
                        <div className="mb-0.5 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Full-Stack Developer</p>
                            <p className="text-sm">Jan 2021 {'>'} Oct 2021</p>
                            <LinkWithIcon href="https://stationf.co/">
                                <p className="text-base">Station F</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-xs opacity-80">&#x2022; Best practices to engineer + commit a clean code (unit, integration, e2e tests)</p>
                        <p className="text-xs opacity-80">{'>'} Left to work in crypto</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="mb-0.5 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Transaction Services Analyst</p>
                            <p className="text-sm">2017 ; 2019</p>
                            <LinkWithIcon href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/">
                                <p className="text-base">Grant Thornton</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-xs opacity-80">&#x2022; Small & mid cap valuations in M&A context, waterfalls, statistical modelling</p>
                        <p className="text-xs opacity-80">&#x2022; Memorandum, due diligences, litigation support</p>
                        <p className="text-xs opacity-80">{'>'} Left to pivot in tech</p>
                    </li>
                </ul>
            </div>

            {/* studies */}
            <div className="flex flex-col gap-1">
                <p className="font-bold text-primary">Studies</p>
                <ul>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">42</p>
                        <p className="text-sm">2020</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">DSCG</p>
                        <p className="text-sm">2019</p>
                        <p className="text-xs text-inactive opacity-80">french CPA</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">MSc Corporate Finance</p>
                        <p className="text-sm">2019</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">Le Wagon</p>
                        <p className="text-sm">2017</p>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
