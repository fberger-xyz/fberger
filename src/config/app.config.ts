import { AppThemes, IconIds } from '@/enums'

export const APP_METADATA = {
    EMOJI: '👨‍💻',
    SITE_NAME: 'fberger',
    SITE_INFO: 'SITE_INFO',
    SITE_DESCRIPTION: 'SITE_DESCRIPTION',
    SITE_URL: 'https://fberger.vercel.app/',
    SOCIAL_TWITTER: 'TWITTER',
    ENS: 'fran6.eth',
}

export const APP_THEMES: Record<AppThemes, { index: number; iconId: IconIds }> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}
