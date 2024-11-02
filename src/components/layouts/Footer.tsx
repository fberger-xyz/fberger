import { cn } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'
import packageJson from '../../../package.json'
import IconWrapper from '../common/IconWrapper'
import { IconIds } from '@/enums'

interface FooterProps {
    className?: string
}

export default function Footer(props: FooterProps) {
    return (
        <div className={cn('fixed bottom-0 w-full flex justify-between items-baseline text-sm z-0 px-3 pb-1.5 opacity-50', props.className)}>
            <div className="flex items-start gap-1 text-inactive">
                <p>UI v{packageJson?.version ?? 'n/a'}</p>
            </div>
            <div className="flex items-end gap-3.5 text-default">
                <LinkWrapper target="_blank" href={`https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`}>
                    <IconWrapper icon={IconIds.TELEGRAM} className="h-5 w-5" />
                </LinkWrapper>
                <LinkWrapper target="_blank" href={`https://x.com/${APP_METADATA.SOCIALS.TWITTER}`}>
                    <IconWrapper icon={IconIds.X} className="h-5 w-5" />
                </LinkWrapper>
                <LinkWrapper target="_blank" href={`https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`}>
                    <IconWrapper icon={IconIds.LINKEDIN} className="h-5 w-5" />
                </LinkWrapper>
            </div>
        </div>
    )
}
