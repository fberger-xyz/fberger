import HeaderButton from './HeaderButton'
import { cn } from '@/utils'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/image'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA, APP_PAGES } from '@/config/app.config'

export default function Header(props: { className?: string }) {
    return (
        <div className={cn('fixed top-0 flex justify-center 45-center w-full', props.className)}>
            <div className="relative flex h-[70px] w-full max-w-[700px] items-center justify-between gap-0.5 border-b border-very-light-hover bg-background px-2 backdrop-blur-md sm:mt-2 sm:h-fit sm:justify-between sm:rounded-lg sm:border-transparent sm:bg-transparent sm:px-3 sm:py-2 md:px-4">
                <div className="bg-background/10 absolute inset-0 z-40 rounded-xl" />
                <LinkWrapper href="/" className="z-50 flex items-end gap-2">
                    <Image src={APP_METADATA.PROFILE_PICTURE} width={44} height={44} alt="https://x.com/fberger_xyz/photo" className="rounded-xl" />
                    <p className="mb-1 hidden text-2xl text-primary md:flex">{APP_METADATA.SITE_AUTHOR}</p>
                </LinkWrapper>
                <div className="z-50 flex gap-0.5 sm:gap-1">
                    {APP_PAGES.filter((page) => page.inHeader).map((page) => (
                        <HeaderButton key={page.path} pagePath={page.path} />
                    ))}
                </div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
