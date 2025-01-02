// import IconWrapper from '@/components/common/IconWrapper'
// import { IconIds } from '@/enums'
import LinkWrapper from './LinkWrapper'

export default function LinkWithIcon({ children, href }: { href: string; children?: React.ReactNode }) {
    return (
        <LinkWrapper
            href={href}
            className="flex cursor-alias items-center gap-2 rounded-lg bg-very-light-hover px-3 py-1 text-default hover:bg-light-hover"
            target="_blank"
        >
            {children}
            {/* <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="size-6 pl-1 text-inactive group-hover:text-primary" /> */}
        </LinkWrapper>
    )
}
