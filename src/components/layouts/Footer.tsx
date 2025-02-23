'use client'

import { cn } from '@/utils'
import { APP_METADATA } from '@/config/app.config'
import IconWrapper from '../common/IconWrapper'
import { IconIds } from '@/enums'
import Image from 'next/image'
import LinkWithIcon from '../common/LinkWithIcon'

export default function Footer(props: { className?: string }) {
    const socialLinks = [
        { href: `https://${APP_METADATA.SITE_AUTHOR}`, icon: IconIds.WEBSITE },
        { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM_LOGO, id: APP_METADATA.SOCIALS.TELEGRAM },
        { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X },
        { href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`, icon: IconIds.LINKEDIN },
        { href: `https://github.com/${APP_METADATA.SOCIALS.GITHUB}`, icon: IconIds.GITHUB },
    ]

    return (
        <div className={cn('w-full flex justify-center text-sm border-t-2 border-background bg-background/30', props.className)}>
            <div className="mx-auto my-8 flex max-w-[600px] flex-col justify-center gap-4 py-6 sm:max-w-[700px]">
                <div className="flex items-center gap-3">
                    <Image src={APP_METADATA.PROFILE_PICTURE} width={56} height={56} alt="https://x.com/fberger_xyz/photo" className="rounded-2xl" />
                    <div className="flex h-min flex-col justify-center">
                        <p className="text-xs text-inactive">Coded by</p>
                        <p className="flex text-xl font-bold text-primary">{APP_METADATA.SITE_NAME}</p>
                        <p className="text-xs text-inactive">Freelance — 10x senior fullstack dev</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {socialLinks.map((link) => (
                        <LinkWithIcon
                            key={link.href}
                            href={link.href}
                            className={link.icon === IconIds.TELEGRAM_LOGO ? 'border-2 border-telegram bg-telegram/10 text-telegram' : 'h-9 border-2'}
                        >
                            {link.id && <p className="pr-1 text-base font-bold">{link.id}</p>}
                            <IconWrapper icon={link.icon} className="size-5" />
                        </LinkWithIcon>
                    ))}
                </div>
            </div>
        </div>
    )
}
