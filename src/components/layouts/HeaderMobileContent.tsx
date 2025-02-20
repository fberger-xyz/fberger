'use client'

import { APP_PAGES, APP_THEMES } from '@/config/app.config'
import { IconIds } from '@/enums'
import { useAppStore } from '@/stores/app.store'
import { cn, isCurrentPath } from '@/utils'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import IconWrapper from '../common/IconWrapper'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcutArgs'
import Logo from './Logo'

export default function HeaderMobileContent() {
    const pathname = usePathname()
    const { resolvedTheme, setTheme } = useTheme()
    const router = useRouter()
    const modalRef = useRef<HTMLDivElement>(null)
    const { showMobileMenu, setShowMobileMenu } = useAppStore()
    useClickOutside(modalRef, async () => setShowMobileMenu(false))
    useKeyboardShortcut({ key: 'Escape', onKeyPressed: async () => setShowMobileMenu(false) })
    return (
        <div className="w-full md:hidden" ref={modalRef}>
            <div
                className={cn('flex items-center w-full border-b px-4 pt-4 pb-2', {
                    'bg-transparent border-transparent': showMobileMenu,
                    'border-very-light-hover bg-background/20 backdrop-blur-md': !showMobileMenu,
                })}
            >
                <Logo />
                <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="z-40 flex w-full grow justify-end">
                    <IconWrapper icon={showMobileMenu ? IconIds.CLOSE : IconIds.MENU} className="size-10 text-primary md:size-12" />
                </button>
                <span />
            </div>
            {showMobileMenu && (
                <motion.div
                    className="fixed inset-0 z-30 flex size-full items-center justify-center overflow-y-auto bg-light-hover/20 px-4 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowMobileMenu(false)}
                >
                    {/* inset-x-1 top-1 */}
                    <div className="absolute inset-1 z-30 flex h-fit flex-col gap-2 rounded-2xl border-2 border-primary/50 bg-background/80 shadow-md">
                        <div className="flex flex-col gap-1 pb-6 pr-10 pt-20">
                            <div className="flex w-full flex-col items-end gap-1">
                                {APP_PAGES.map((page) => (
                                    <button
                                        key={page.path}
                                        onClick={async () => {
                                            await router.push(page.path)
                                            setShowMobileMenu(false)
                                        }}
                                        className="ml-auto"
                                    >
                                        <p
                                            className={cn('text-right text-2xl px-3 py-1.5 rounded-lg', {
                                                'font-bold text-primary bg-very-light-hover': isCurrentPath(pathname, page.path),
                                                'text-inactive': !isCurrentPath(pathname, page.path),
                                            })}
                                        >
                                            {page.name}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* theme */}
                            <div className="mt-6 flex w-full justify-end gap-3">
                                {Object.entries(APP_THEMES)
                                    .sort((curr, next) => curr[1].index - next[1].index)
                                    .map(([theme, config]) => (
                                        <button
                                            onClick={() => setTheme(theme)}
                                            className={cn('rounded-2xl p-3', {
                                                'bg-background text-primary': resolvedTheme === theme,
                                                'text-inactive': resolvedTheme !== theme,
                                            })}
                                        >
                                            <IconWrapper icon={config.iconId} className="size-9" />
                                        </button>
                                    ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
