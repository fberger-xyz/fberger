'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { cn, getPageConfig } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { AppPagePaths } from '@/enums'

export default function HeaderButton(props: { pagePath: AppPagePaths; disabled?: boolean }) {
    const pathname = usePathname()
    const isCurrentPath = () => {
        if (props.pagePath === '/') return pathname === props.pagePath
        else return pathname.startsWith(props.pagePath)
    }
    const link = getPageConfig(props.pagePath)
    return (
        <LinkWrapper
            href={props.disabled ? pathname : props.pagePath}
            className={cn(
                'px-2 py-1.5 md:px-2.5 lg:px-3 rounded-2xl border border-transparent bg-opacity-50 group text-inactive hover:text-default',
                {
                    'bg-very-light-hover border-light-hover': isCurrentPath(),
                    'md:hover:bg-very-light-hover': !isCurrentPath(),
                },
            )}
        >
            <div className="flex items-center text-lg font-bold md:text-xl">
                <p className={cn({ 'text-primary': isCurrentPath() })}>{link?.name ?? 'Not found'}</p>
            </div>
        </LinkWrapper>
    )
}
