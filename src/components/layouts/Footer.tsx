import { cn } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'

interface FooterProps {
    className?: string
}

export default function Footer(props: FooterProps) {
    return (
        <div className={cn('fixed bottom-0 w-full flex justify-between text-xs z-0 backdrop-blur-sm px-2 py-1.5', props.className)}>
            <div className="flex items-center gap-4">
                <div className="flex flex-col sm:flex-row sm:gap-1">
                    <p className="text-discreet">UI</p>
                    <p className="text-inactive">{process.env.NEXT_PUBLIC_APP_VERSION}</p>
                </div>
                <p className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-discreet">Environment</span>
                    <span className="text-inactive">{process.env.NODE_ENV}</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="text-discreet">Screen</span>
                    <span className="block text-inactive sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">xs</span>
                    <span className="hidden text-inactive sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</span>
                    <span className="hidden text-inactive sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">md</span>
                    <span className="hidden text-inactive sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</span>
                    <span className="hidden text-inactive sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</span>
                    <span className="hidden text-inactive sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</span>
                </p>
            </div>
            <div className="flex flex-col items-end sm:flex-row sm:gap-1">
                <p className="text-discreet">Copyright © 2024</p>
                <LinkWrapper href="https://x.com/fran6brg" className="">
                    <p className="text-inactive">{APP_METADATA.ENS}</p>
                </LinkWrapper>
            </div>
        </div>
    )
}
