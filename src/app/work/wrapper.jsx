import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { TagList, TagListItem } from '@/components/TagList'
import ViewProject from '@/components/ViewProject'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

export default async function CaseStudyLayout({ children, _segments }) {
  let id = _segments.at(-2)
  let allCaseStudies = await loadMDXMetadata('work')
  let caseStudy = allCaseStudies.find((caseStudy) => caseStudy.id === id)
  let moreCaseStudies = allCaseStudies
    .filter((caseStudy) => caseStudy.id !== id)
    .slice(0, 2)

  return (
    <>
      <article className="">
        <header>
          <PageIntro eyebrow="Case Study" title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200  sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-white sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Client</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <div className='bg-white pt-12 sm:pt-16 lg:pt-20'>
          <Container className="">
            <FadeIn>
              <MDXComponents.wrapper>
                {caseStudy?.link &&  <ViewProject
                  link={caseStudy.link?.url}
                  caption={caseStudy.link?.caption}
                />}
                {children}
                <div className='typography'>
                  <h2 className=''>What we did</h2>
                </div>
                {caseStudy?.services && <TagList>
                  {caseStudy?.services.map((item, index) =><TagListItem key={index}>{item}</TagListItem>)}
                </TagList>}
                {caseStudy?.testimonial && <Blockquote
                  className="mt-16 max-w-3xl mx-auto"
                  author={caseStudy?.testimonial.author}
                  image={{ src: caseStudy.clientImage }}
                >
                  {caseStudy.testimonial.content}
                </Blockquote>}
                
              </MDXComponents.wrapper>
            </FadeIn>
          </Container>
        
        </div>
      </article>

      <div className='bg-white pt-8 sm:pt-12 lg:pt-16'>
        {moreCaseStudies.length > 0 && (
          <PageLinks
            className=""
            title="More case studies"
            pages={moreCaseStudies}
          />
        )}

        <ContactSection />
      </div>
    </>
  )
}
