'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps extends HTMLMotionProps<'div'> {
    children: ReactNode
    delay?: number
}

export function FadeUpItem({ children, delay = 0, ...rest }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay }}
            {...rest} // Spread props for additional motion.div properties
        >
            {children}
        </motion.div>
    )
}

export default function FadeUpList({ children, delay = 0, ...rest }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay }}
            viewport={{ once: true }}
            {...rest} // Spread props for additional motion.div properties
        >
            {children}
        </motion.div>
    )
}
