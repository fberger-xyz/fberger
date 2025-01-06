import { create } from 'zustand'
import { APP_METADATA } from '../config/app.config'

export const useAppStore = create<{
    name: string
    version: string
    env: string
    debug: boolean
    initialized: boolean
    loading: boolean
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
