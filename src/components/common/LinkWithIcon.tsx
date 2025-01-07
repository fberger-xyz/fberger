// import IconWrapper from '@/components/common/IconWrapper'
// import { IconIds } from '@/enums'
import LinkWrapper from './LinkWrapper'

export default function LinkWithIcon({ children, href }: { href: string; children?: React.ReactNode }) {
    return (
        <LinkWrapper
            href={href}
            className="flex w-fit cursor-alias items-center gap-2 rounded-xl border border-light-hover px-3 py-1 text-default underline-offset-2 hover:bg-very-light-hover hover:underline"
            target="_blank"
        >
            {children}
            {/* <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="size-6 pl-1 text-inactive group-hover:text-primary" /> */}
        </LinkWrapper>
    )
}
