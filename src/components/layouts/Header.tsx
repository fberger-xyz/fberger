import { cn } from '@/utils'
import HeaderDesktopContent from './HeaderDesktopContent'
import HeaderMobileContent from './HeaderMobileContent'

export default function Header(props: { className?: string }) {
    return (
        <div className={cn('fixed top-0 flex justify-center z-50 w-full', props.className)}>
            <HeaderDesktopContent />
            <HeaderMobileContent />
        </div>
    )
}
