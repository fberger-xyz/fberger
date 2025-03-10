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
                'px-2 py-1.5 md:px-2.5 lg:px-3 rounded-2xl border-2 group text-inactive hover:text-default transition-all duration-200 ease-in-out',
                {
                    'bg-very-light-hover border-light-hover': isCurrentPath(),
                    'md:hover:bg-very-light-hover border-transparent': !isCurrentPath(),
                },
            )}
        >
            <div className="flex items-center text-base font-bold md:text-lg">
                <p className={cn({ 'text-primary': isCurrentPath() })}>{link?.name ?? 'Not found'}</p>
            </div>
        </LinkWrapper>
    )
}
