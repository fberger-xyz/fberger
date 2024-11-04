import { create } from 'zustand'
import { InterfaceAppLink } from '../interfaces'
import { AppPagePaths } from '../enums'
import { APP_METADATA } from '../config/app.config'

export const useAppStore = create<{
    name: string
    version: string
    env: string
    debug: boolean
    initialized: boolean
    loading: boolean
    links: InterfaceAppLink[]
    about: {
        self: boolean
        cs: boolean
        stationf: boolean
        ts: boolean
    }
    actions: {
        about: {
            display: (section: 'self' | 'cs' | 'stationf' | 'ts') => void
        }
    }
    computeds: Record<string, () => void>
}>((set) => ({
    name: APP_METADATA.SITE_NAME,
    version: '0.0.0',
    env: String(process.env.NEXT_PUBLIC_APP_ENV),
    debug: process.env.NEXT_PUBLIC_APP_DEBUG === 'true',
    loading: false,
    initialized: false,
    links: [
        {
            name: 'home',
            path: AppPagePaths.HOME,
            enabled: true,
            sublinks: [],
        },
        {
            name: 'projects',
            path: AppPagePaths.PROJECTS,
            enabled: true,
            sublinks: [
                {
                    name: 'Aptos Liquidation Bot',
                    path: AppPagePaths.PROJECTS_APTOS_LIQUIDATION_BOT,
                    enabled: true,
                    sublinks: [],
                },
                {
                    name: 'RabbyKit',
                    path: AppPagePaths.PROJECTS_CONNECT_RABBYKIT,
                    enabled: true,
                    sublinks: [],
                },
                {
                    name: 'Safes',
                    path: AppPagePaths.PROJECTS_SAFES_TRADES,
                    enabled: true,
                    sublinks: [],
                },
                {
                    name: 'Farside',
                    path: AppPagePaths.PROJECTS_FARSIDE,
                    enabled: true,
                    sublinks: [],
                },
                {
                    name: 'NFT Stonks',
                    path: AppPagePaths.PROJECTS_NFT_STONKS,
                    enabled: true,
                    sublinks: [],
                },
            ],
        },
        {
            name: 'cv',
            path: AppPagePaths.ABOUT,
            enabled: true,
            sublinks: [],
        },
    ],
    about: {
        self: false,
        cs: false,
        stationf: false,
        ts: false,
    },
    actions: {
        about: {
            display: (section) => set((state) => ({ about: { ...state.about, [section]: !state.about[section] } })),
        },
    },
    computeds: {},
}))
