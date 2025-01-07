'use client'

import { cn } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'
import IconWrapper from '../common/IconWrapper'
import { AppPagePaths, IconIds } from '@/enums'
import { usePathname } from 'next/navigation'

export default function Footer(props: { className?: string }) {
    const pathname = usePathname()
    if (pathname === AppPagePaths.HOME) return null
    return (
        <div className={cn('fixed bottom-0 w-full flex justify-end text-sm z-50', props.className)}>
            <div className="flex items-end gap-5 rounded-ss-2xl bg-background px-4 py-3 opacity-80 backdrop-blur-sm">
                {[
                    { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM },
                    { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X },
                    { href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`, icon: IconIds.LINKEDIN },
                    { href: `https://github.com/${APP_METADATA.SOCIALS.GITHUB}`, icon: IconIds.GITHUB },
                ].map((link) => (
                    <LinkWrapper key={link.href} target="_blank" href={link.href} className="cursor-alias hover:text-primary">
                        <IconWrapper icon={link.icon} className="size-6 md:size-7" />
                    </LinkWrapper>
                ))}
            </div>
        </div>
    )
}
