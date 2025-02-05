import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { APP_METADATA } from '../config/app.config'
import { cn } from '../utils'
import Header from '../components/layouts/Header'
import { Suspense } from 'react'
// import Footer from '../components/layouts/Footer'
import { ThemeProvider } from 'next-themes'
import { AppThemes } from '@/enums'
import { Toaster } from 'react-hot-toast'
import NewFooter from '@/components/layouts/NewFooter'
import { MorphingGradientBackground } from '@/components/common/MorphingGradientBackground'

const font = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
    description: APP_METADATA.SITE_DESCRIPTION,
    applicationName: APP_METADATA.SITE_NAME,
    metadataBase: new URL(APP_METADATA.SITE_URL),
    manifest: '/manifest.json',
    appleWebApp: {
        title: APP_METADATA.SITE_NAME,
        capable: true,
        statusBarStyle: 'black-translucent',
    },
    openGraph: {
        type: 'website',
        title: APP_METADATA.SITE_NAME,
        siteName: APP_METADATA.SITE_NAME,
        description: APP_METADATA.SITE_DESCRIPTION,
        url: APP_METADATA.SITE_URL,
        images: '/opengraph-image',
    },
    twitter: {
        card: 'summary_large_image',
        site: APP_METADATA.SOCIALS.X,
        title: APP_METADATA.SITE_NAME,
        description: APP_METADATA.SITE_DESCRIPTION,
        images: '/opengraph-image',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(font.className, 'h-screen w-screen overflow-auto text-lg text-default bg-background')}>
                <ThemeProvider attribute="class" defaultTheme={AppThemes.LIGHT} disableTransitionOnChange themes={Object.values(AppThemes)}>
                    <MorphingGradientBackground>
                        <Header className="z-50" />
                        <Suspense
                            fallback={
                                <div className="flex h-full w-full items-center justify-center">
                                    <p className="text-orange-500">Loading...</p>
                                </div>
                            }
                        >
                            {children}
                        </Suspense>
                        <NewFooter />
                        <Toaster position="bottom-center" reverseOrder={false} />
                    </MorphingGradientBackground>
                </ThemeProvider>
            </body>
        </html>
    )
}
