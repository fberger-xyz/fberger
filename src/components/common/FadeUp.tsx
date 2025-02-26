'use client'

import dynamic from 'next/dynamic'
import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps extends HTMLMotionProps<'div'> {
    children: ReactNode
    delay?: number
}

function FadeUpComponent({ children, delay = 0, ...rest }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay }}
            viewport={{ once: true, amount: 0.1 }} // animates only when 10% visible
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export const FadeUp = dynamic(() => Promise.resolve(FadeUpComponent), { ssr: false })
