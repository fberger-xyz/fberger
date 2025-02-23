import { AppPagePaths, IconIds } from '../enums'

export interface InterfaceAppLink {
    name: string
    path: AppPagePaths
    inHeader: boolean
    icon?: IconIds
    description?: string
    sublinks: InterfaceAppLink[]
}

export interface APIResponse<Data> {
    data?: Data
    error: string
}

export interface SideProject {
    path: string
    title: string
    description: string
    date: string
    skills: string[]
}
