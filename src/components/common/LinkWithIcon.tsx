// import IconWrapper from '@/components/common/IconWrapper'
// import { IconIds } from '@/enums'
import { cn } from '@/utils'
import LinkWrapper from './LinkWrapper'

export default function LinkWithIcon({ children, href, ...props }: { href: string; children?: React.ReactNode; className?: string }) {
    return (
        <LinkWrapper
            href={href}
            className={cn(
                'flex w-fit cursor-alias items-center gap-2 rounded-xl border border-light-hover px-2 py-1 text-default underline-offset-2 underline-light-hover hover:bg-very-light-hover hover:underline',
                props.className,
            )}
            target="_blank"
        >
            {children}
            {/* <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="size-6 pl-1 text-inactive group-hover:text-primary" /> */}
        </LinkWrapper>
    )
}
