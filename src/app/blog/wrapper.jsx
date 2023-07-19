import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

export default async function BlogArticleWrapper({ children, _segments }) {
  let id = _segments.at(-2)
  let allArticles = await loadMDXMetadata('blog')
  let article = allArticles.find((article) => article.id === id)
  let moreArticles = allArticles
    .filter((article) => article.id !== id)
    .slice(0, 2)

  return (
    <>
      <Container as="article" className="my-24 sm:my-32 lg:my-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-white"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-white">
              by {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>
        </Container>

        <div className='bg-white pt-12 sm:pt-16 lg:pt-20'>
          <Container as="article" className="">
            <FadeIn>
              <MDXComponents.wrapper className="">
                {children}
              </MDXComponents.wrapper>
            </FadeIn>
          </Container>
        </div>
      

      <div className='bg-white'>

      {moreArticles.length > 0 && (
        <PageLinks
          className=""
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
      </div>
    </>
  )
}
