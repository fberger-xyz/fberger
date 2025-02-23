import { AppPagePaths, IconIds } from '@/enums'
import { cn, getPageConfig } from '@/utils'
import IconWrapper from '../common/IconWrapper'
import LinkWrapper from '../common/LinkWrapper'
import { cardGradientClasses } from './CardGradient'

export default function PreviousOrNextPages({
    isIphoneDemo = false,
    ...props
}: {
    previous?: AppPagePaths
    next?: AppPagePaths
    isIphoneDemo?: boolean
}) {
    return (
        <>
            <div
                className={cn('grid w-full gap-3 md:gap-4', {
                    'text-base': isIphoneDemo,
                    'text-xl': !isIphoneDemo,
                    'grid-cols-2': props.previous && props.next,
                    'grid-cols-1': !props.previous || !props.next,
                })}
            >
                {props.previous && (
                    <LinkWrapper href={props.previous} className={cn(cardGradientClasses, 'items-start gap-1 p-3 md:p-5')}>
                        <div className="flex items-center justify-start gap-1 transition-all group-hover:gap-0.5">
                            <IconWrapper icon={IconIds.DOUBLE_CHEVRON_LEFT} className="size-6 text-inactive" />
                            <p className="text-base text-inactive">Previous</p>
                        </div>
                        <p className="pl-1 font-bold text-primary decoration-2 underline-offset-4 group-hover:underline">
                            {getPageConfig(props.previous).name}
                        </p>
                    </LinkWrapper>
                )}
                {props.next && (
                    <LinkWrapper href={props.next} className={cn(cardGradientClasses, 'items-end gap-1 p-3 md:p-5')}>
                        <div className="flex items-center justify-end gap-1 transition-all group-hover:gap-0.5">
                            <p className="text-base text-inactive">Next</p>
                            <IconWrapper icon={IconIds.DOUBLE_CHEVRON_RIGHT} className="size-6 text-inactive" />
                        </div>
                        <p className="pr-1 text-right font-bold text-primary decoration-2 underline-offset-4 group-hover:underline">
                            {getPageConfig(props.next).name}
                        </p>
                    </LinkWrapper>
                )}
            </div>
            <br />
        </>
    )
}
