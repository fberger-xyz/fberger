import LinkWrapper from '@/components/common/LinkWrapper'
import { AppPagePaths, IconIds } from '@/enums'
import { cn } from '@/utils'
import IconWrapper from './IconWrapper'
import { ProtocolsConfigForRatesDashboard } from '@/config/app.config'
import Image from 'next/image'
import SvgMapper from './SvgMapper'

export default function ProjectCard({
    disabled = false,
    title,
    date,
    description,
    skills,
    ...props
}: {
    path: AppPagePaths | string
    disabled?: boolean
    title: string
    date: string
    description?: string
    ttc: string
    skills: string[]
}) {
    return (
        <LinkWrapper
            href={props.path}
            target="_blank"
            disabled={disabled}
            className="group flex flex-col items-start gap-1 rounded-3xl border-2 border-light-hover bg-background/50 p-3 hover:border-primary md:px-5"
        >
            <div className="flex w-full flex-col rounded-md transition duration-300 hover:border-primary">
                <div className="flex w-full justify-between">
                    <div className="flex items-center justify-center gap-1 border-b-2 border-transparent group-hover:border-primary">
                        <p className="text-xl font-bold text-secondary">{title}</p>
                        {/* this code is crap but I got 99 projects to code */}
                        {title === 'APYs' && (
                            <>
                                <span className="ml-1" />
                                {Object.values(ProtocolsConfigForRatesDashboard).map((protocol, protocolIndex) =>
                                    protocol.iconId ? (
                                        <SvgMapper
                                            key={`${protocol}-${protocolIndex}`}
                                            icon={protocol.iconId}
                                            className="size-5 rounded-full bg-background grayscale"
                                        />
                                    ) : (
                                        <Image
                                            key={`${protocol}-${protocolIndex}`}
                                            src={String(protocol?.logoUri)}
                                            width={20}
                                            height={20}
                                            alt={`Logo of ${protocol}`}
                                            className="size-5 rounded-full bg-background grayscale"
                                        />
                                    ),
                                )}
                                {/* <span className="mr-2" /> */}
                            </>
                        )}
                        {title === 'ETFs' && (
                            <>
                                <IconWrapper icon={IconIds.CRYPTO_BTC} className={cn('size-5', { grayscale: true })} />
                                <IconWrapper icon={IconIds.CRYPTO_ETH} className={cn('size-5', { grayscale: true })} />
                            </>
                        )}
                        <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="hidden size-5 text-primary group-hover:flex" />
                    </div>
                    <p className="text-xs text-inactive">{date}</p>
                </div>
                {description && <p className="text-sm text-inactive lg:text-base">{description}</p>}
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
