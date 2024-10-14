import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'

export default function Page() {
    return (
        <PageWrapper>
            <ul className="flex flex-col text-discreet">
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
                    <span className="text-secondary">{APP_METADATA.TELEGRAM}</span>
                </li>
            </ul>
        </PageWrapper>
    )
}
