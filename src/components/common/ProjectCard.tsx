import LinkWrapper from '@/components/common/LinkWrapper'
import { AppPagePaths, IconIds } from '@/enums'
import { cn } from '@/utils'
import IconWrapper from './IconWrapper'

export default function ProjectCard({
    target = '_self',
    disabled = false,
    title,
    date,
    // ttc,
    skills,
    ...props
}: {
    path: AppPagePaths | string
    target?: '_blank' | '_self' | '_parent' | '_top'
    disabled?: boolean
    title: string
    date: string
    ttc: string
    skills: string[]
}) {
    return (
        <LinkWrapper
            href={props.path}
            target={target}
            disabled={disabled}
            className="group flex flex-col items-start gap-1 rounded-2xl border border-light-hover p-3 hover:border-primary md:px-5"
        >
            <div className="flex w-full flex-col rounded-md pb-1 transition duration-300 hover:border-primary">
                <div className="flex w-full justify-between">
                    <div className="flex items-center justify-center gap-1">
                        <p className="text-xl font-bold text-secondary decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                            {title}
                        </p>
                        {title === 'ETFs' && (
                            <>
                                <IconWrapper icon={IconIds.CRYPTO_BTC} className={cn('size-5', { grayscale: true })} />
                                <IconWrapper icon={IconIds.CRYPTO_ETH} className={cn('size-5', { grayscale: true })} />
                            </>
                        )}
                    </div>
                    <p className="text-xs text-inactive">{date}</p>
                </div>
                {/* <p className="text-xs lg:text-sm">
                    <span className="mr-1 text-inactive">Time to code</span>
                    {ttc}
                </p> */}
                <div className="mt-2 flex w-full flex-wrap justify-end gap-1 text-xs">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex w-fit items-center rounded-lg border border-very-light-hover px-1.5 py-0.5 group-hover:bg-very-light-hover"
                        >
                            <p className="text-nowrap text-inactive group-hover:text-primary">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </LinkWrapper>
    )
}
