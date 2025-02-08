import { SVGProps } from 'react'

export function SvgSpinners3DotsScaleMiddle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor" // ensures it inherits primary color
            role="img"
            aria-hidden="true"
            {...props}
        >
            <circle cx="4" cy="12" r="1.5">
                <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="1.5;3;1.5" />
            </circle>
            <circle cx="12" cy="12" r="3">
                <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="3;1.5;3" />
            </circle>
            <circle cx="20" cy="12" r="1.5">
                <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="1.5;3;1.5" />
            </circle>
        </svg>
    )
}
