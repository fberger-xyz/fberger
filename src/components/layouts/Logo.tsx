'use client'

import { APP_METADATA } from '@/config/app.config'
import LinkWrapper from '../common/LinkWrapper'
import { AppPagePaths } from '@/enums'
import Image from 'next/image'

export default function Logo() {
    return (
        <LinkWrapper href={AppPagePaths.HOME} className="z-50 flex items-center gap-3">
            <Image
                src={APP_METADATA.PROFILE_PICTURE}
                width={40}
                height={40}
                alt="https://x.com/fberger_xyz/photo"
                className="rounded-2xl md:hidden"
            />
            <Image
                src={APP_METADATA.PROFILE_PICTURE}
                width={44}
                height={44}
                alt="https://x.com/fberger_xyz/photo"
                className="hidden rounded-2xl md:flex"
            />
            <p className="mb-1 flex text-xl text-primary underline decoration-light-hover decoration-4 underline-offset-2 hover:decoration-primary lg:font-bold">
                {APP_METADATA.SITE_NAME}
            </p>
        </LinkWrapper>
    )
}
