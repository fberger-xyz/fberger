import { AppPagePaths, AppThemes, IconIds, SupportedProtocolsForRatesDashboard } from '@/enums'
import { InterfaceAppLink } from '@/interfaces'

export const APP_METADATA = {
    SITE_AUTHOR: 'fberger.xyz',
    SITE_NAME: 'fberger.xyz',
    SITE_DESCRIPTION: 'Skin in the game.',
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

export const IS_DEV = process.env.NODE_ENV === 'development'

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
        sublinks: [],
    },
    {
        name: 'Articles',
        path: AppPagePaths.ARTICLES,
        inHeader: true,
        description: '',
        sublinks: [],
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
        title: 'APYs',
        description: 'Live money markets metrics',
        date: 'Jan 2025',
        ttc: 'WIP 🚧',
        skills: ['Aave', 'Morpho', 'Fluid', 'Liquity'],
    },
    {
        path: 'https://trustee.fund',
        title: 'Trustee 💸',
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

export const ProtocolsConfigForRatesDashboard: Record<
    string,
    { iconId?: IconIds; name: string; logoUri: string; integrated: boolean; system: string }
> = {
    [SupportedProtocolsForRatesDashboard.AAVE_V3]: {
        name: 'Aave v3',
        iconId: IconIds.AAVE,
        logoUri: 'https://assets.coingecko.com/coins/images/12645/standard/aave-token-round.png?1720472354',
        integrated: true,
        system: 'Pools',
    },
    [SupportedProtocolsForRatesDashboard.MORPHO]: {
        name: 'Morpho vaults',
        iconId: undefined,
        logoUri: 'https://assets.coingecko.com/coins/images/29837/standard/Morpho-token-icon.png?1726771230',
        integrated: true,
        system: 'Vaults',
    },
    [SupportedProtocolsForRatesDashboard.SPARK]: {
        name: 'Spark',
        iconId: IconIds.SPARK,
        logoUri: 'https://icons.llamao.fi/icons/protocols/spark',
        integrated: false,
        system: 'TBA',
    },
    [SupportedProtocolsForRatesDashboard.COMPOUND]: {
        name: 'Compound v3',
        iconId: IconIds.COMPOUND,
        logoUri: '',
        integrated: true,
        system: 'Pools',
    },
    [SupportedProtocolsForRatesDashboard.FLUID]: {
        name: 'Fluid',
        iconId: undefined,
        logoUri: 'https://icons.llamao.fi/icons/protocols/fluid',
        integrated: true,
        system: 'Vaults',
    },
}
