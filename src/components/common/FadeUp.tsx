'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface FadeUpProps extends HTMLMotionProps<'div'> {
    children: ReactNode
    delay?: number
}

// does not work on mobile (<md)
export function FadeUp({ children, delay = 0, ...rest }: FadeUpProps) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768) // md breakpoint

        // check on mount and on resize
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (isMobile) return children

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
