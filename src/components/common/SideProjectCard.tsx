import LinkWrapper from '@/components/common/LinkWrapper'
import { IconIds } from '@/enums'
import { cn } from '@/utils'
import IconWrapper from './IconWrapper'
import { ProtocolsConfigForRatesDashboard } from '@/config/app.config'
import Image from 'next/image'
import SvgMapper from './SvgMapper'
import { cardGradientClasses } from './CardGradient'
import { SideProject } from '@/interfaces'

export default function SideProjectCard({ title, date, description, skills, path }: SideProject) {
    return (
        <LinkWrapper href={path} target="_blank" className={cn(cardGradientClasses, 'gap-1 p-3 md:px-5')}>
            <div className="relative flex w-full flex-col transition duration-100 ease-in-out">
                <div className="flex w-full justify-between">
                    <div className="flex items-center justify-center gap-1 border-b-2 border-transparent transition duration-200 ease-in-out group-hover:border-primary">
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
                {description && <p className="text-sm text-default lg:text-base">{description}</p>}
                <div className="mt-2 flex w-full flex-wrap justify-end gap-1 text-xs">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex w-fit items-center rounded-lg border border-very-light-hover px-1.5 py-0.5 transition duration-200 ease-in-out group-hover:bg-very-light-hover"
                        >
                            <p className="text-nowrap text-inactive group-hover:text-primary">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </LinkWrapper>
    )
}
