'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState, useCallback } from 'react'

// does not work on mobile (<md)
export function FadeUp({ children, delay = 0, ...rest }: { children: ReactNode; delay?: number }) {
    const [isMobile, setIsMobile] = useState(false)

    const checkMobile = useCallback(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    useEffect(() => {
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [checkMobile])
    if (isMobile) {
        return <div {...rest}>{children}</div>
    }

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
