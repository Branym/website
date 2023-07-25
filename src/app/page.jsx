import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import cofoundersLogo from '@/images/clients/cofounders.png'
import bgusLogo from '@/images/clients/bgus.png'
import clynkLogo from '@/images/clients/clynk.png'
import education10xLogo from '@/images/clients/education10x.png'
import jauracoLogo from '@/images/clients/jauraco.png'
import polarisLogo from '@/images/clients/polaris.png'
import tagglabsLogo from '@/images/clients/tagglabs.png'
import zuloLogo from '@/images/clients/zulo.png'

import imageLaptop from '@/images/laptop.jpg'
import featureImage from '@/images/feature_art.jpg'


import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { GradientStrokeButton } from '@/components/GradientStrokeButton'
import { GradientStroke } from '@/components/GradientStroke'

const clients = [
  ['Co-Founders Planet', cofoundersLogo, 'w-64'],
  ['BG Unified Solutions', bgusLogo, 'w-[8rem]'],
  ['Zulo', zuloLogo, 'w-28'],
  ['Education10x', education10xLogo, 'w-56'],
  ['Jauraco Fine Jewels', jauracoLogo, 'w-56'],
  ['Clynk Mediaworks', clynkLogo, 'w-[9rem]'],
  ['Polaris Medifabrics', polarisLogo, 'w-48'],
  ['Tagglabs', tagglabsLogo, 'w-48'],
]

async function Banner() {
  
  let banner = (await loadMDXMetadata('work')).filter(item => item?.id === 'zulo')[0]

  return (
    <div className="relative overflow-hidden bg-black border mt-24 sm:mt-24 lg:mt-32 rounded-3xl">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8">
        
        {/* <div className="z-5 hidden bg-gradient-to-r from-black to-black/0 xl:block absolute inset-0 left-0 h-full -mr-8" /> */}
        <div className="z-20 lg:col-span-5 xl:col-span-6 flex items-center lg:pl-12 lg:pr-0 px-8">
          <div className="mx-auto flex flex-col gap-6 items-between max-w-3xl pt-12 lg:py-12 xl:py-20 xl:pl-8">
              <div className="flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 bg-white text-gray-700 hover:text-gray-700/70 font-bold cursor-pointer">
                  Case Study
                </div>
              </div>
              <h1 className="text-4xl font-sans font-bold tracking-tight text-white sm:text-5xl">
                {banner.title}
              </h1>
            {/* <p className="mt-6 text-lg leading-8 text-white">
            An app that offers exclusive content to its users. The project aimed to create an intuitive and engaging interface for users to browse and access the ...
            </p> */}
            <div className="flex items-center gap-x-6 xl:mt-8 xl:mb-64">
              <a href="#" className="text-md font-semibold leading-6 text-white">
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-7 xl:absolute xl:inset-0 xl:left-1/3 xl:mr-0">
          <Image
            className=" w-full object-contain xl:object-cover object-right-bottom xl:object-right-top lg:aspect-auto sm:h-[28rem] lg:h-full"
            src={featureImage}
            alt=""
            unoptimized
          />
        </div>
        
     
        
      </div>
    </div>
  )
}

function Clients() {
  return (
    <div className="rounded-4xl py-12 sm:py-16">
      <Container>
        <FadeIn className="lg:hidden flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid items-center justify-items-center grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4 lg:mt-16"
          >
            {clients.map(([client, logo, classes]) => (
              <li key={client} className=''>
                <FadeIn className="">
                  <Image src={logo} alt={client} className={clsx('object-contain scale-[0.9] transition duration-700 hover:scale-[0.95] cursor-pointer', classes)} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.thumbnail}
                      alt={caseStudy.client}
                      className="h-full w-full aspect-[1/1] object-cover rounded-[1rem]"
                      unoptimized
                    />
                  </Link>
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}
                <p className="mt-6 px-4 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                {/* <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p> */}
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {

  let caseStudies = (await loadMDXMetadata('work')).filter(item => item?.featured)

  return (
    <>
    <div className='pt-24 sm:pt-32 md:pt-48'>

      <Container className="lg:text-center">
        <FadeIn className="max-w-6xl mx-auto">
          <div className='flex lg:justify-center mb-8'>
            <GradientStroke className={"!rounded-full"}>
              <div className='text-white p-1 px-12 lg:px-24 bg-neutral-900 rounded-full'>
                Welcome to Branym Technologies
              </div>
            </GradientStroke>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white [text-wrap:balance] sm:text-7xl">
            Great Experience Design can boost your Business upto 35%
          </h1>
          <p className="mt-6 text-md mx-auto max-w-4xl text-white">
          Studies show that a great customer experience has the potential to boost your business by up to 35%. Invest in creating memorable interactions that foster loyalty, satisfaction, and growth.
          </p>
          <div className='flex gap-2 lg:justify-center py-6 mx-auto'>
            {/* <Button invert className="py-3 px-6">See Our Work</Button> */}
            <GradientStrokeButton className="py-4">
              <div className='flex items-center gap-x-4'>
                <div>See Our Work</div>
                <div>➞</div>
              </div>
            </GradientStrokeButton>
          </div>
        </FadeIn>
      </Container>

      <Container>
        <Banner/>
      </Container>

      </div>
      <div className='bg-white py-32 -mt-64'></div>
      <div className='bg-white'>
        <Clients />

        <Testimonial
          className="mt-24 sm:mt-32 lg:mt-20"
          client={{ name: 'Phobia', logo: zuloLogo }}
          imageClass={'h-12 w-auto'}
        >
          The team at Studio went above and beyond with our onboarding, even
          finding a way to access the user’s microphone without triggering one of
          those annoying permission dialogs.
        </Testimonial>

        <CaseStudies caseStudies={caseStudies} />

        {/* <Services /> */}

        <ContactSection />
      </div>
    </>
  )
}
