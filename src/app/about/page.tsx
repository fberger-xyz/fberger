import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'

export default function Page() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-2">
                <p>Contacts</p>
                <ul className="flex flex-col gap-0 text-base text-discreet">
                    <li className="flex gap-1">
                        &#x2022; Twitter
                        <LinkWithIcon href={`https://x.com/${APP_METADATA.SOCIAL_TWITTER}`}>
                            <span>@{APP_METADATA.SOCIAL_TWITTER}</span>
                        </LinkWithIcon>
                    </li>
                    <li className="flex gap-1 text-discreet">
                        &#x2022; Email
                        <span className="text-secondary">{APP_METADATA.MAIL}</span>
                    </li>
                    <li className="flex gap-1 text-discreet">
                        &#x2022; Telegram
                        <span className="text-secondary">@{APP_METADATA.TELEGRAM}</span>
                    </li>
                    <li className="flex gap-1 text-discreet">
                        &#x2022; Linkedin
                        <LinkWithIcon href={`https://www.linkedin.com/in/${APP_METADATA.LINKEDIN}`}>
                            <span>Profile</span>
                        </LinkWithIcon>
                    </li>
                </ul>
            </div>

            {/* https://dev.to/timreach/how-to-preview-a-nextjs-app-on-a-mobile-device-lf6 */}

            {/* <p>todo mention side work</p> */}
            <div className="flex flex-col gap-2">
                <p>Experience</p>
                <ul className="flex flex-col gap-4 text-discreet sm:gap-1">
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-secondary">Self</p>
                            <p className="text-sm">Dec 2024 - now</p>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-secondary">Risk and DeFi Developer</p>
                            <p className="text-sm underline underline-offset-2">Nov 2021 {'>'} Dec 2024</p>
                            <LinkWithIcon href="https://coinshares.com/">
                                <p>CoinShares</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">
                            &#x2022; Coded apps used daily to monitor risk exposure (hedge funds, lending, staking) with max granularity
                        </p>
                        <p className="text-sm">&#x2022; Coded UIs to monitor quantitative trading strategies</p>
                        <p className="text-sm">&#x2022; Run ethereum nodes (with secure access) + adhoch research</p>
                        <p className="text-sm">&#x2022; Shipped a DeFi dApp from scratch (hardhat, ethers, the Graph)</p>
                        <p className="text-sm">&#x2022; Worked hard to improve the stack (suggested vite, tailwind, zustand, eslint, CI/CD)</p>
                        <p className="text-sm italic">Left to focus on DeFi</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-secondary">Full-Stack Developer</p>
                            <p className="text-sm underline underline-offset-2">Jan 2021 {'>'} Sept 2021</p>
                            <LinkWithIcon href="https://stationf.co/">
                                <p>Station F</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; Best practices to engineer + commit a clean code (unit, integration, e2e tests)</p>
                        <p className="text-sm italic">Left to work in crypto</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-secondary">Transaction Services Intern</p>
                            <p className="text-sm underline underline-offset-2">2017 ; 2019</p>
                            <LinkWithIcon href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/">
                                <p>Grant Thornton</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; Small & mid cap valuations in M&A context, waterfalls, statistical modelling</p>
                        <p className="text-sm">&#x2022; Memorandum, due diligences, litigation support</p>
                        <p className="text-sm italic">Left to pivot in tech</p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <p>Studies</p>
                <ul className="flex flex-col text-discreet">
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">42</p>
                            <p className="text-sm">Jan 2021</p>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">DSCG</p>
                            <p className="text-sm">Oct 2019</p>
                        </div>
                        <p className="text-sm">&#x2022; Equivalent to french CPA</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Msc. Corporate Finance</p>
                            <p className="text-sm">Jul 2019</p>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Le Wagon</p>
                            <p className="text-sm">Dec 2017</p>
                        </div>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
