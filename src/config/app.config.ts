import { AppPagePaths, AppThemes, IconIds } from '@/enums'
import { InterfaceAppLink } from '@/interfaces'

export const APP_METADATA = {
    SITE_AUTHOR: 'fberger',
    SITE_NAME: 'fberger.xyz',
    SITE_DESCRIPTION: 'Connecting the dots TradFi <> DeFi',
    SITE_URL: 'https://fberger.xyz/',
    SOCIALS: {
        X: 'fberger_xyz',
        TELEGRAM: 'fberger_xyz',
        GITHUB: 'fberger-xyz',
        LINKEDIN: 'francis-berger-a2404094',
        ENS: 'fran6.eth',
    },
    PROFILE_PICTURE: 'https://pbs.twimg.com/profile_images/1824850421078220800/jWMhjkyv_400x400.jpg',
    MAIL: 'tba@protonmail.com',
}

export const APP_THEMES: Partial<Record<AppThemes, { index: number; iconId: IconIds }>> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}

export const APP_PAGES: InterfaceAppLink[] = [
    {
        name: 'Home',
        path: AppPagePaths.HOME,
        inHeader: true,
        enabled: true,
        description: '',
        sublinks: [],
    },
    {
        name: 'Projects',
        path: AppPagePaths.PROJECTS,
        inHeader: true,
        enabled: true,
        description: '',
        sublinks: [
            {
                name: 'Seeds',
                path: AppPagePaths.PROJECTS_SEEDS,
                inHeader: false,
                enabled: false,
                sublinks: [],
            },
            {
                name: 'RabbyKit',
                path: AppPagePaths.PROJECTS_CONNECT_RABBYKIT,
                inHeader: false,
                enabled: true,
                sublinks: [],
            },
            {
                name: 'Safes',
                path: AppPagePaths.PROJECTS_SAFES,
                inHeader: false,
                enabled: true,
                sublinks: [],
            },
            {
                name: 'ETFs',
                path: AppPagePaths.PROJECTS_ETFS,
                inHeader: false,
                enabled: true,
                sublinks: [],
            },
            {
                name: 'NFT Stonks',
                path: AppPagePaths.PROJECTS_NFT_STONKS,
                inHeader: false,
                enabled: true,
                sublinks: [],
            },
        ],
    },
    {
        name: 'XP',
        path: AppPagePaths.XP,
        inHeader: false,
        enabled: true,
        sublinks: [],
    },
]
