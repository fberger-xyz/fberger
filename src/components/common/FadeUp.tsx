'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps extends HTMLMotionProps<'div'> {
    children: ReactNode
    delay?: number
}

export function FadeUp({ children, delay = 0, ...rest }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay }}
            {...rest} //sSpread props for additional motion.div properties
        >
            {children}
        </motion.div>
    )
}
