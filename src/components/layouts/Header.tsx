import HeaderButton from './HeaderButton'
import { AppPagePaths } from '@/enums'
import { cn } from '@/utils'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/image'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'

export default function Header(props: { className?: string }) {
    return (
        <div className={cn('top-0 flex w-full items-center justify-between gap-1 sm:gap-3 bg-transparent fixed backdrop-blur-sm', props.className)}>
            <LinkWrapper href="/" className="flex items-end gap-2">
                <Image
                    src="https://pbs.twimg.com/profile_images/1824850421078220800/jWMhjkyv_400x400.jpg"
                    width={36}
                    height={36}
                    alt="https://x.com/fran6brg/photo"
                    className="rounded-lg"
                />
                <p className="hidden text-2xl text-inactive sm:block">{APP_METADATA.ENS}</p>
            </LinkWrapper>
            <div className="flex sm:gap-1">
                <HeaderButton pagePath={AppPagePaths.HOME} />
                <HeaderButton pagePath={AppPagePaths.PROJECTS} />
                <HeaderButton pagePath={AppPagePaths.ABOUT} />
            </div>
            <ThemeSwitcher />
        </div>
    )
}
