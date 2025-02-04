'use client'

import { cn } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'
import IconWrapper from '../common/IconWrapper'
import { IconIds } from '@/enums'
import Image from 'next/image'

export default function NewFooter(props: { className?: string }) {
    return (
        <div className={cn('w-full flex justify-center text-sm bg-very-light-hover', props.className)}>
            <div className="m-8 flex w-full max-w-[600px] flex-col justify-center gap-5 border-b border-light-hover p-6 sm:max-w-[700px]">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Image
                            src={APP_METADATA.PROFILE_PICTURE}
                            width={32}
                            height={32}
                            alt="https://x.com/fberger_xyz/photo"
                            className="rounded-xl"
                        />
                        <p className="flex text-2xl font-bold text-default">{APP_METADATA.SITE_NAME}</p>
                    </div>
                    <p className="font-semibold text-inactive">{APP_METADATA.SITE_DESCRIPTION}</p>
                </div>
                <div className="flex gap-4">
                    {[
                        { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM_LOGO },
                        { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X },
                        { href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`, icon: IconIds.LINKEDIN },
                        { href: `https://github.com/${APP_METADATA.SOCIALS.GITHUB}`, icon: IconIds.GITHUB },
                    ].map((link) => (
                        <LinkWrapper key={link.href} target="_blank" href={link.href} className="cursor-alias hover:text-primary">
                            <IconWrapper icon={link.icon} className="size-6 text-inactive" />
                        </LinkWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}
