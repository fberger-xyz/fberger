import { IconIds } from '@/enums'
import CarbonSun from '../icons/carbonSun.icon'
import MdiWeatherNight from '../icons/mdi.weather.night.icon'
import IconWrapper from './IconWrapper'
import { SvgSpinners3DotsScaleMiddle } from '../icons/svg-spinner.loading-dots'

export default function SvgMapper(props: { icon: IconIds; className?: string }) {
    if (props.icon === IconIds.THEME_LIGHT) return <CarbonSun className={props.className} />
    if (props.icon === IconIds.THEME_DARK) return <MdiWeatherNight className={props.className} />
    if (props.icon === IconIds.LOADING_DOTS) return <SvgSpinners3DotsScaleMiddle className={props.className} />
    return <IconWrapper icon={props.icon} className={props.className} />
}
