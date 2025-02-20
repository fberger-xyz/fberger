import HeaderButton from './HeaderButton'
import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'
import { APP_PAGES } from '@/config/app.config'

export default function HeaderDesktopContent() {
    return (
        <div className="relative hidden h-[70px] w-full max-w-[800px] items-center justify-between gap-0.5 border-b border-light-hover pl-3 pr-2 backdrop-blur-md md:mt-3 md:flex md:h-fit md:justify-between md:rounded-3xl md:border-2 md:bg-transparent md:px-3 md:py-2.5">
            <div className="absolute inset-0 z-40 rounded-xl bg-background/30 md:rounded-3xl" />
            <Logo />
            <div className="z-50 flex gap-0.5 sm:gap-1">
                {APP_PAGES.filter((page) => page.inHeader).map((page) => (
                    <HeaderButton key={page.path} pagePath={page.path} />
                ))}
            </div>
            <ThemeSwitcher />
        </div>
    )
}
