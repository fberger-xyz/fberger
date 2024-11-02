import LinkWithIcon from '@/components/common/LinkWithIcon'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths } from '@/enums'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            {/* context */}
            <div className="flex flex-col gap-2">
                <p className="font-bold">Contact me!</p>
                <p className="text-sm text-default">For any inquiries regarding [contracting, hiring, investment], reach out on:</p>
                <ul className="flex flex-col gap-1 text-sm text-default">
                    <li className="flex gap-3">
                        &#x2022; Telegram
                        <span className="font-bold text-secondary">@{APP_METADATA.TELEGRAM}</span>
                    </li>
                    <li className="flex gap-3">
                        &#x2022; Twitter
                        <LinkWithIcon href={`https://x.com/${APP_METADATA.SOCIAL_TWITTER}`}>
                            <span>@{APP_METADATA.SOCIAL_TWITTER}</span>
                        </LinkWithIcon>
                    </li>
                    <li className="flex gap-3">
                        &#x2022; Linkedin
                        <LinkWithIcon href={`https://www.linkedin.com/in/${APP_METADATA.LINKEDIN}`}>
                            <span>Francis Berger</span>
                        </LinkWithIcon>
                    </li>
                </ul>
            </div>

            {/* index */}
            <div className="mt-4 flex flex-col gap-2">
                <p className="text-primary">Index</p>
                <ul className="flex flex-col gap-1 text-sm text-default">
                    <li className="flex gap-3">
                        &#x2022;
                        <LinkWrapper href={AppPagePaths.PROJECTS} className="underline-offset-4 hover:underline">
                            <p>
                                /<span className="text-secondary">projects</span>
                            </p>
                        </LinkWrapper>
                        <p>projects I can publicly speak about</p>
                    </li>
                    <li className="flex gap-3">
                        &#x2022;
                        <LinkWrapper href={AppPagePaths.ABOUT} className="underline-offset-4 hover:underline">
                            <p>
                                /<span className="text-secondary">about</span>
                            </p>
                        </LinkWrapper>
                        <p>life and career</p>
                    </li>
                </ul>
            </div>

            {/* tldr */}
            <div className="mt-4 flex flex-col gap-2">
                <p className="text-primary">Tldr</p>
                <ul className="flex flex-col gap-1 text-base text-default">
                    <li className="flex gap-3">
                        &#x2022;
                        <p>redacted</p>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
