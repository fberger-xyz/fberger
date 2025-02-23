'use client'

import { APP_PAGES, APP_THEMES } from '@/config/app.config'
import { IconIds } from '@/enums'
import { useAppStore } from '@/stores/app.store'
import { cn, isCurrentPath } from '@/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { useRef } from 'react'
import IconWrapper from '../common/IconWrapper'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcutArgs'
import Logo from './Logo'

// Extract menu items into a separate component
const NavigationItems = ({ pathname, router, onItemClick }: {
    pathname: string
    router: ReturnType<typeof useRouter>
    onItemClick: () => void
}) => (
    <div className="flex w-full flex-col items-end gap-1">
        {APP_PAGES.map((page) => (
            <button
                key={page.path}
                onClick={async () => {
                    await router.push(page.path)
                    onItemClick()
                }}
                className="ml-auto"
                aria-current={isCurrentPath(pathname, page.path) ? 'page' : undefined}
            >
                <p
                    className={cn('text-right text-2xl px-3 py-1.5 rounded-lg transition-colors', {
                        'font-bold text-primary bg-very-light-hover': isCurrentPath(pathname, page.path),
                        'text-inactive hover:text-primary': !isCurrentPath(pathname, page.path),
                    })}
                >
                    {page.name}
                </p>
            </button>
        ))}
    </div>
)

// Extract theme switcher into a separate component
const ThemeSwitcher = ({ resolvedTheme, setTheme }: {
    resolvedTheme: string | undefined
    setTheme: (theme: string) => void
}) => (
    <div className="mt-6 flex w-full justify-end gap-3">
        {Object.entries(APP_THEMES)
            .sort((curr, next) => curr[1].index - next[1].index)
            .map(([theme, config]) => (
                <button
                    key={theme}
                    onClick={() => setTheme(theme)}
                    className={cn('rounded-2xl p-3 transition-colors', {
                        'bg-background text-primary': resolvedTheme === theme,
                        'text-inactive hover:text-primary': resolvedTheme !== theme,
                    })}
                    aria-label={`Switch to ${theme} theme`}
                    aria-pressed={resolvedTheme === theme}
                >
                    <IconWrapper icon={config.iconId} className="size-9" />
                </button>
            ))}
    </div>
)

export default function HeaderMobileContent() {
    const pathname = usePathname()
    const { resolvedTheme, setTheme } = useTheme()
    const router = useRouter()
    const modalRef = useRef<HTMLDivElement>(null)
    const { showMobileMenu, setShowMobileMenu } = useAppStore()

    useClickOutside(modalRef, () => setShowMobileMenu(false))
    useKeyboardShortcut({ key: 'Escape', onKeyPressed: () => setShowMobileMenu(false) })

    return (
        <div className="w-full md:hidden" ref={modalRef}>
            <header
                className={cn('flex items-center w-full border-b px-4 pt-4 pb-3 transition-colors', {
                    'bg-transparent border-transparent': showMobileMenu,
                    'border-very-light-hover bg-background/20 backdrop-blur-md': !showMobileMenu,
                })}
            >
                <Logo />
                <button 
                    onClick={() => setShowMobileMenu(!showMobileMenu)} 
                    className="z-40 flex w-full grow justify-end"
                    aria-expanded={showMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <IconWrapper 
                        icon={showMobileMenu ? IconIds.CLOSE : IconIds.MENU} 
                        className="size-10 text-primary md:size-12" 
                    />
                </button>
            </header>

            <AnimatePresence>
                {showMobileMenu && (
                    <motion.div
                        className="fixed inset-0 z-30 flex size-full items-center justify-center overflow-y-auto bg-light-hover/20 px-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            // Only close if clicking the backdrop
                            if (e.target === e.currentTarget) {
                                setShowMobileMenu(false)
                            }
                        }}
                    >
                        <nav className="absolute inset-1 z-30 flex h-fit flex-col gap-2 rounded-2xl border-2 border-primary/50 bg-background/80 shadow-md">
                            <div className="flex flex-col gap-1 pb-6 pr-10 pt-20">
                                <NavigationItems 
                                    pathname={pathname} 
                                    router={router} 
                                    onItemClick={() => setShowMobileMenu(false)} 
                                />
                                <ThemeSwitcher 
                                    resolvedTheme={resolvedTheme} 
                                    setTheme={setTheme} 
                                />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
