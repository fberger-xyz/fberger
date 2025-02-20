import { create } from 'zustand'

export const useAppStore = create<{
    showMobileMenu: boolean
    setShowMobileMenu: (showMobileMenu: boolean) => void
}>()((set) => ({
    showMobileMenu: false,
    setShowMobileMenu: (showMobileMenu) => set(() => ({ showMobileMenu })),
}))
