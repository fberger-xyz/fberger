'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps extends HTMLMotionProps<'div'> {
    children: ReactNode
    delay?: number
}

// todo: does not work on mobile
export function FadeUp({ children, delay = 0, ...rest }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay }}
            viewport={{ once: true, amount: 0.1 }} // animates when 10% visible
            {...rest}
        >
            {children}
        </motion.div>
    )
}
