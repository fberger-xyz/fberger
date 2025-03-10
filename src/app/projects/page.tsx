import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'
import { sideProjectList } from '@/config/app.config'
import SideProjectCard from '@/components/common/SideProjectCard'

export const metadata = generatePageMetadata(AppPagePaths.PROJECTS)

export default function Page() {
    return (
        <PageWrapper>
            <SectionWrapper title="Side projects" ulClassname="gap-3">
                <p className="text-inactive">Those I can publicly speak about</p>
                {sideProjectList.map((project, index) => (
                    <SideProjectCard key={index} {...project} />
                ))}
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.HOME} next={AppPagePaths.ARTICLES} />
        </PageWrapper>
    )
}
