import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'

export default function Page() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-2">
                <p>Contacts</p>
                <ul className="flex flex-col gap-0 text-discreet">
                    <li className="flex gap-1">
                        &#x2022; Twitter
                        <span className="text-secondary">@{APP_METADATA.SOCIAL_TWITTER}</span>
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
                        <span className="text-secondary">{APP_METADATA.LINKEDIN}</span>
                    </li>
                </ul>
            </div>

            {/* <p>todo mention side work</p> */}
            <div className="flex flex-col gap-2">
                <p>Experience</p>
                <ul className="flex flex-col gap-0.5 text-discreet">
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Self</p>
                            <p className="text-sm">Dec 2024 - now</p>
                            <LinkWithIcon href="https://coinshares.com/">
                                <p>CoinShares</p>
                            </LinkWithIcon>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Risk and DeFi Developer</p>
                            <p className="text-sm">Nov 2021 - Dec 2024</p>
                            <LinkWithIcon href="https://coinshares.com/">
                                <p>CoinShares</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">
                            &#x2022; Risk - coded apps used daily to monitor risk exposure (hedge funds, lending, staking) with max granularity
                        </p>
                        <p className="text-sm">&#x2022; Risk - coded UIs to monitor quantitative trading strategies</p>
                        <p className="text-sm">
                            &#x2022; DeFi - run ethereum nodes (with secure access) ; adhoch Ethereum research for top management
                        </p>
                        <p className="text-sm">&#x2022; DeFi - shipped a DeFi dApp from scratch (hardhat, ethers, the Graph)</p>
                        <p className="text-sm">&#x2022; Misc - worked hard to improve the stack (vite, zustand, tailwind, eslint, CI/CD)</p>
                        <p className="text-sm italic">Left to focus on DeFi</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Full-Stack Developer</p>
                            <p className="text-sm">Jan 2021 - Sept 2021</p>
                            <LinkWithIcon href="https://stationf.co/">
                                <p>Station F</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; Best practices to engineer + commit a clean code (unit, integration, e2e tests)</p>
                        <p className="text-sm italic">Left to work in crypto</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Transaction Services Intern</p>
                            <p className="text-sm">2017 ; 2019</p>
                            <LinkWithIcon href="https://www.grantthornton.fr/fr/">
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
                <ul className="flex flex-col gap-0.5 text-discreet">
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">42</p>
                            <p className="text-sm">Jan 2021</p>
                            <LinkWithIcon href="https://42.fr/en/42-in-paris/facilities/">
                                <p>42</p>
                            </LinkWithIcon>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Msc. Corporate Finance</p>
                            <p className="text-sm">Jul 2019</p>
                            <LinkWithIcon href="https://u-paris.fr/en/">
                                <p>Paris Universités</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; French CFA (DSCG) as external candidate (Oct 2019)</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <p className="text-secondary">Le Wagon</p>
                            <p className="text-sm">Dec 2017</p>
                            <LinkWithIcon href="https://www.lewagon.com/fr">
                                <p>Le Wagon</p>
                            </LinkWithIcon>
                        </div>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
