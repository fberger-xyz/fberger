export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const isCurrentPath = (pathname: string, pagePath: string) => (pagePath === '/' ? pathname === pagePath : pathname.startsWith(pagePath))
