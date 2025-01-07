import { cn } from '@/utils'
import { ReactNode } from 'react'

export const BulletPoint = () => <span className="w-min pr-2 text-inactive">&#x2022;</span>
export const TextWithBulletPoint = (props: { children?: ReactNode }) => {
    return (
        <div className="flex items-baseline gap-0.5">
            <BulletPoint />
            <p className="flex flex-wrap items-baseline gap-1.5">{props.children}</p>
        </div>
    )
}
export function SectionWrapper(props: { title: string; children: ReactNode; ulClassname?: string }) {
    return (
        <div className="flex w-full flex-col gap-1">
            <p className="mb-1 text-xl font-bold text-primary">{props.title}</p>
            <ul className={cn('flex flex-col gap-1 lg:gap-2 text-base', props.ulClassname)}>{props.children}</ul>
        </div>
    )
}
