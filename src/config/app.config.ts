import { AppPagePaths, AppThemes, IconIds } from '@/enums'
import { InterfaceAppLink } from '@/interfaces'

export const APP_METADATA = {
    SITE_AUTHOR: 'fberger',
    SITE_NAME: 'fberger.xyz',
    SITE_DESCRIPTION: 'Connecting the dots TradFi <> DeFi. Skin in the game.',
    SITE_URL: 'https://fberger.xyz/',
    SOCIALS: {
        X: 'fberger_xyz',
        TELEGRAM: 'fberger_xyz',
        GITHUB: 'fberger-xyz',
        LINKEDIN: 'francis-berger-a2404094',
        ENS: 'fran6.eth',
    },
    PROFILE_PICTURE: 'https://pbs.twimg.com/profile_images/1876521476062412800/QJGGbg2j_400x400.jpg',
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
        description: '',
        sublinks: [],
    },
    {
        name: 'Projects',
        path: AppPagePaths.PROJECTS,
        inHeader: true,
        description: '',
        sublinks: [
            // {
            //     name: 'Seeds',
            //     path: AppPagePaths.PROJECTS_SEEDS,
            //     inHeader: false,
            //     sublinks: [],
            // },
            // {
            //     name: 'RabbyKit',
            //     path: AppPagePaths.PROJECTS_CONNECT_RABBYKIT,
            //     inHeader: false,
            //     sublinks: [],
            // },
            // {
            //     name: 'Safes',
            //     path: AppPagePaths.PROJECTS_SAFES,
            //     inHeader: false,
            //     sublinks: [],
            // },
            // {
            //     name: 'ETFs',
            //     path: AppPagePaths.PROJECTS_ETFS,
            //     inHeader: false,
            //     sublinks: [],
            // },
            // {
            //     name: 'NFT Stonks',
            //     path: AppPagePaths.PROJECTS_NFT_STONKS,
            //     inHeader: false,
            //     sublinks: [],
            // },
        ],
    },
    {
        name: 'XP',
        path: AppPagePaths.XP,
        inHeader: true,
        sublinks: [],
    },
]

export const projectsList = [
    {
        path: 'https://apy.fberger.xyz',
        title: 'APY',
        description: 'Live money markets metrics',
        date: 'Jan 2025',
        ttc: 'WIP 🚧',
        skills: ['Aave', 'Morpho', 'Fluid', 'Liquity'],
    },
    {
        path: 'https://trustee.fund',
        title: 'Trustee',
        description: 'Dynamic management for busy holders',
        date: 'Dec 2024',
        ttc: '+3 weeks',
        skills: ['Telegram', 'OpenAI', 'Safe', 'Debank', 'Arbitrum'],
    },
    {
        path: 'https://etfs.fberger.xyz',
        title: 'ETFs',
        description: 'Better farside',
        date: 'Nov 2024',
        ttc: '4 days',
        skills: ['Next', 'Prisma', 'Inngest', 'Grammy', 'Vercel'],
    },
    {
        path: 'https://seeds.fberger.xyz',
        title: 'Seeds',
        description: 'Simple cipher to store your seed phrase',
        date: 'Nov 2024',
        ttc: '< 1 day',
        skills: ['BIP39', 'Rot Cipher'],
    },
    {
        path: 'https://safes.fberger.xyz',
        title: 'Safes',
        description: '[WIP] entrypoint to manage several safes',
        date: 'Nov 2024',
        ttc: '< 1 day',
        skills: ['Next', 'Gnosis Safe', '1inch', 'Cowswap'],
    },
    {
        path: 'https://connect.fberger.xyz',
        title: 'Auth',
        description: 'RabbyKit + Next Auth via SIWE (template)',
        date: 'Nov 2024',
        ttc: '< 1 day',
        skills: ['Next', 'RabbyKit', 'Wagmi'],
    },
    {
        path: 'https://alpha.fberger.xyz',
        title: 'Alpha',
        description: '[WIP] Alpha sources, without noise',
        date: 'Nov 2024',
        ttc: '< 1 day',
        skills: ['Next'],
    },
    {
        path: 'https://www.linkedin.com/posts/francis-berger-a2404094_degen-web3-nft-activity-6879062483768795136-WomP/?utm_source=share&utm_medium=member_desktop',
        title: 'NFT stonks',
        description: 'OpenSea trades recap w/ P&L',
        date: 'Oct 2021',
        ttc: '3 weeks',
        skills: ['Vue.js', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud'],
    },
]
