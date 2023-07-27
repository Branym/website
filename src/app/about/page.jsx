import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import imageYuvraj from '@/images/team/yuvraj.jpeg'

import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className=" rounded-4xl py-4 lg:py-8">
      <SectionIntro
        eyebrow="Our culture"
        title="Its our passion to bring your passion to life."
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Deliverability" >
          We prioritize delivering exceptional results, ensuring that our clients' needs are met with precision and excellence.
          </GridListItem>
          <GridListItem title="Efficiency" >
          We embrace efficiency in every aspect of our work, maximizing productivity and minimizing wastage of time and resources.
          </GridListItem>
          <GridListItem title="Innovation" >
            At at the core of our culture, We foster a creative environment where new ideas flourish, driving groundbreaking solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Our Team',
    people: [
      {
        name: 'Yuvraj Midha',
        role: 'Co-Founder',
        image: { src: imageYuvraj },
      },
      {
        name: 'Mahir Gupta',
        role: 'Co-Founder',
        image: { src: imageYuvraj },
      },
    ],
  }
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'Our mission is to provide customer-centric, result-oriented, cost-competitive innovative & functional IT Solutions to our valuable global clients.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="We build great experiences">
        <p>
        Our mission is to provide customer-centric, result-oriented, cost-competitive innovative & functional IT Solutions to our valuable global clients.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our team understand the needs and requirements of our customer and make technology to resolve the needs, with the best UX possible for the target audience. We believe to explore new opportunities and technologies that maximizes the business value, consistent growth and sustainability which enables our clients to become more agile and competitive.
          </p>
          <p>
          With this understanding and skillset, we are helping our clients to bring great products to market in less time and at less cost by collaborating with them in their continued success.
          </p>
        </div>
      </PageIntro>
      <div className='bg-white pt-16 sm:pt-20 lg:pt-24'>
      <Container className="pb-16">
        <StatList>
          <StatListItem value="40+" label="Projects Completed" />
          <StatListItem value="5+" label="Years of Experience" />
          <StatListItem value="20+" label="Satisfied Clients" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
      </div>
    </>
  )
}
