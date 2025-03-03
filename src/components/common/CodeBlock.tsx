'use client'

import { useTheme } from 'next-themes'
import { BundledLanguage, codeToHtml } from 'shiki'

// https://shiki.style/packages/next
export async function CodeBlock(props: { children: string; lang: BundledLanguage }) {
    const { resolvedTheme } = useTheme()
    const out = await codeToHtml(props.children, {
        lang: props.lang,
        theme: `github-${resolvedTheme}`,
    })

    return <div dangerouslySetInnerHTML={{ __html: out }} />
}
