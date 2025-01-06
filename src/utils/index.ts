import { APP_PAGES } from '@/config/app.config'
import { AppPagePaths } from '@/enums'

export * from './cn.util'
export * from './error.util'
export * from './date.util'
export * from './format.util'

export const getPageConfig = (path: AppPagePaths) => {
    for (let pageIndex = 0; pageIndex < APP_PAGES.length; pageIndex++) {
        if (APP_PAGES[pageIndex].path === path) return APP_PAGES[pageIndex]
        for (let subPageIndex = 0; subPageIndex < APP_PAGES[pageIndex].sublinks.length; subPageIndex++) {
            if (APP_PAGES[pageIndex].sublinks[subPageIndex].path === path) return APP_PAGES[pageIndex].sublinks[subPageIndex]
        }
    }
    return APP_PAGES[0]
}
