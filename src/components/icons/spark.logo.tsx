import React, { SVGProps } from 'react'

export default function SparkSVG(props: SVGProps<SVGSVGElement>) {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" fill="none">
            <path
                fill="url(#a)"
                d="M16.092 14.458h8.595c.33 0 .397-.45.096-.587l-8.69-3.959V1.284c0-.322-.431-.428-.58-.142l-3.572 6.88-3.96-1.819c-.378-.153-.611.155-.482.42l2.36 4.87H1.265c-.33 0-.397.45-.097.588l8.69 3.958v8.629c0 .322.432.427.58.142l3.573-6.88 3.96 1.819c.378.153.61-.156.482-.42l-2.36-4.87Z"
            />
            <defs>
                <linearGradient id="a" x1="20.265" x2="4.79" y1="7.272" y2="19.141" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FA43BD" />
                    <stop offset="1" stopColor="#FFA930" />
                </linearGradient>
            </defs>
        </svg>
    )
}
