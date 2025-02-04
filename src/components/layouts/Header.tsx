import HeaderButton from './HeaderButton'
import { cn } from '@/utils'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/image'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA, APP_PAGES } from '@/config/app.config'

export default function Header(props: { className?: string }) {
    return (
        <div className={cn('fixed top-0 flex justify-center 45-center w-full', props.className)}>
            <div className="relative flex h-[70px] w-full max-w-[800px] items-center justify-between gap-0.5 border-b border-light-hover bg-background pl-3 pr-2 backdrop-blur-md md:mt-2 md:h-fit md:justify-between md:rounded-3xl md:border md:border-very-light-hover md:bg-transparent md:px-3 md:py-2">
                <div className="bg-background/10 absolute inset-0 z-40 rounded-xl" />
                <LinkWrapper href="/" className="z-50 flex items-end gap-2 md:hidden">
                    <Image src={APP_METADATA.PROFILE_PICTURE} width={42} height={42} alt="https://x.com/fberger_xyz/photo" className="rounded-xl" />
                    <p className="mb-1 hidden text-xl font-bold text-primary sm:flex">{APP_METADATA.SITE_AUTHOR}</p>
                </LinkWrapper>
                <LinkWrapper href="/" className="hidden items-center gap-3 md:z-50 md:flex">
                    <Image src={APP_METADATA.PROFILE_PICTURE} width={44} height={44} alt="https://x.com/fberger_xyz/photo" className="rounded-2xl" />
                    <p className="mb-1 hidden text-2xl text-primary underline decoration-light-hover decoration-2 underline-offset-2 hover:decoration-primary md:flex lg:font-bold">
                        {APP_METADATA.SITE_NAME}
                    </p>
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
