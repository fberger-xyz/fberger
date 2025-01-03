import HeaderButton from './HeaderButton'
import { AppPagePaths } from '@/enums'
import { cn } from '@/utils'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/image'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'

export default function Header(props: { className?: string }) {
    return (
        <div className={cn('fixed top-0 flex justify-center 45-center w-full', props.className)}>
            <div className="relative flex h-[70px] w-full max-w-[600px] items-center justify-between gap-0.5 border-b border-very-light-hover bg-background px-4 backdrop-blur-md sm:mt-2 sm:h-fit sm:justify-between sm:rounded-lg sm:border-transparent sm:bg-transparent sm:px-3 sm:py-2">
                <div className="bg-background/10 absolute inset-0 z-40 rounded-xl" />
                <LinkWrapper href="/" className="z-50 flex items-end gap-2 md:hidden">
                    <Image src={APP_METADATA.PROFILE_PICTURE} width={36} height={36} alt="https://x.com/fberger_xyz/photo" className="rounded-lg" />
                </LinkWrapper>
                <LinkWrapper href="/" className="z-50 hidden items-end gap-2 md:flex">
                    <Image src={APP_METADATA.PROFILE_PICTURE} width={42} height={42} alt="https://x.com/fberger_xyz/photo" className="rounded-lg" />
                    <p className="mb-1 text-2xl text-primary">{APP_METADATA.SITE_AUTHOR}</p>
                </LinkWrapper>
                <div className="z-50 flex gap-0.5 sm:gap-1 lg:gap-2">
                    {(Object.values(AppPagePaths) as AppPagePaths[])
                        .filter((path) => path.split('/').length < 3)
                        .map((path) => (
                            <HeaderButton key={path} pagePath={path} />
                        ))}
                </div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
