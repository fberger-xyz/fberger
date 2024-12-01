import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'fberger.xyz | Career',
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            <p className="truncate text-sm lg:text-base">Non-exhaustive summary</p>
            {/* xp */}
            <div className="flex flex-col gap-2 pb-1">
                <p className="text-lg font-bold text-primary lg:text-xl">Experiences</p>
                <ul className="flex flex-col gap-2 sm:gap-0">
                    <li className="group flex flex-col rounded-sm p-1 hover:bg-very-light-hover">
                        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="truncate font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                                Freelance
                            </p>
                            <p className="truncate text-sm">Dec 2024 - now</p>
                        </div>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">&#x2022; Go-getter for B2C / B2B clients</p>
                    </li>
                    <li className="group flex flex-col rounded-sm p-1 hover:bg-very-light-hover">
                        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="truncate font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                                Risk and DeFi Developer
                            </p>
                            <p className="truncate text-sm">Nov 2021 {'>'} Nov 2024</p>
                            <LinkWithIcon href="https://coinshares.com/">
                                <p className="truncate text-base">CoinShares</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Coded frontends and backends used daily by ops team + quants + traders + top management
                        </p>
                        <p className="pl-4 text-xs text-inactive group-hover:text-default lg:text-sm">
                            1) to compute P&L and risk exposure (hedge funds, lending and staking activities)
                        </p>
                        <p className="pl-4 text-xs text-inactive group-hover:text-default lg:text-sm">
                            2) to monitor trading strategies (positions, volatility surfaces, greeks)
                        </p>
                        <p className="pl-4 text-xs text-inactive group-hover:text-default lg:text-sm">3) to adapt strategies to economic calendar</p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">&#x2022; Practical research on Staking</p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Shipped an operational, audited DeFi dApp (solidity, hardhat, ethers, the Graph)
                        </p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Run ethereum nodes to test Shanghai upgrade (with https access)
                        </p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">&#x2022; AWS DevOps to run bots (Nestjs APIs)</p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Proactive to improve legacy stack w/ best-in-class dev tools (eg. vite, tailwind, zustand)
                        </p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">{'>'} Left to go all-in DeFi</p>
                    </li>
                    <li className="group flex flex-col rounded-sm p-1 hover:bg-very-light-hover">
                        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="truncate font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                                Full-Stack Developer
                            </p>
                            <p className="truncate text-sm">Jan 2021 {'>'} Oct 2021</p>
                            <LinkWithIcon href="https://stationf.co/">
                                <p className="truncate text-base">Station F</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Best practices to engineer + commit a clean code (unit, integration, e2e tests)
                        </p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">{'>'} Left to work in crypto</p>
                    </li>
                    <li className="group flex flex-col rounded-sm p-1 hover:bg-very-light-hover">
                        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="truncate font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                                Transaction Advisory Services Analyst
                            </p>
                            <p className="truncate text-sm">2017 & 2019</p>
                            <LinkWithIcon href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/">
                                <p className="truncate text-base">Grant Thornton</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Small & mid cap valuations in M&A context, waterfalls, statistical modelling
                        </p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">
                            &#x2022; Memorandum, due diligences, litigation support
                        </p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">{'>'} Left to pivot in tech</p>
                    </li>
                </ul>
            </div>

            {/* studies */}
            <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-primary lg:text-xl">Studies</p>
                <ul>
                    <li className="flex items-baseline gap-2">
                        <p className="font-bold text-secondary">42</p>
                        <p className="truncate text-sm">2020</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="font-bold text-secondary">DSCG</p>
                        <p className="truncate text-sm">2019</p>
                        <p className="text-xs text-inactive group-hover:text-default lg:text-sm">french CPA</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="font-bold text-secondary">MSc Corporate Finance</p>
                        <p className="truncate text-sm">2019</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="font-bold text-secondary">Le Wagon</p>
                        <p className="truncate text-sm">2017</p>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
