import PageWrapper from '@/components/common/PageWrapper'

export default function Page() {
    return (
        <PageWrapper>
            <ul className="flex flex-col text-discreet">
                <li className="flex gap-1">
                    &#x2022; Twitter
                    <span className="text-secondary">@tba</span>
                </li>
                <li className="flex gap-1 text-discreet">
                    &#x2022; Email
                    <span className="text-secondary">tba@protonmail.com</span>
                </li>
                <li className="flex gap-1 text-discreet">
                    &#x2022; Telegram
                    <span className="text-secondary">@tba</span>
                </li>
            </ul>
        </PageWrapper>
    )
}
