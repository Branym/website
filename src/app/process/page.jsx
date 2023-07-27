import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Understanding the Core" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
            <b className='text-lg'>Research</b><br/>
            We begin by deeply understanding your project requirements, goals, and objectives. 
            Our team engages in comprehensive discussions to gather insights into your business needs, 
            target audience, and desired outcomes. By understanding the project's scope, we lay a 
            solid foundation for the development process.
        </p>
        <p>
          <b className='text-lg'>Prototyping</b><br/>
          Once we have a clear understanding of your project, we move on to designing the 
          prototype. Our skilled designers create a visual representation of the software's user 
          interface (UI) and user experience (UX). This prototype serves as a blueprint, allowing 
          you to visualize the final product and provide valuable input.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Research and Planning</TagListItem>
        <TagListItem>Wireframing</TagListItem>
        <TagListItem>User surveys</TagListItem>
        <TagListItem>Prototyping</TagListItem>
        <TagListItem>A/B Testing</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Crafting with the Right Stack" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With the prototype approved, our development team employs the most appropriate technology stack to build your web software.
        </p>
        <p>
          <b className='text-lg'>Development</b><br/>
          We leverage our expertise in various programming languages, frameworks, and databases to ensure optimal 
          performance, scalability, and security. Throughout the development phase, we follow best practices and 
          coding standards to deliver a robust and efficient solution.
        </p>
        <p>
        <b className='text-lg'>Testing</b><br/>
        Quality assurance is a vital step in our web software development process. Our dedicated QA team rigorously 
        tests the software to identify and rectify any bugs, glitches, or performance issues. We conduct functional 
        testing, compatibility testing, and usability testing to ensure the software meets your expectations. 
        
        </p>
      </div>

      <Blockquote
        author={{ name: 'Mahir Gupta', role: 'CTO @ Branym Technolgoies' }}
        className="mt-12"
      >
       We conduct regular feedback sessions to address any concerns and incorporate necessary improvements.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Ascending to New Heights" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
      
        <p>
          Once the software passes rigorous testing, we move on to the deployment phase. Our team 
          ensures a smooth transition from development to live production environment, setting 
          up servers, configuring databases, and optimizing performance. We provide comprehensive 
          documentation, including user manuals and technical guides, to assist you in 
          utilizing and maintaining the software effectively.
        </p>
        
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          We employ rigorous testing protocols to ensure the reliability and quality of our products and services.
        </ListItem>
        <ListItem title="Infrastructure">
          Our agency utilizes cutting-edge infrastructure to deliver efficient and scalable solutions to our clients.
        </ListItem>
        <ListItem title="Support and Documentation">
          We provide comprehensive support and well-documented resources to assist our clients throughout their journey with us.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 sm:mt-32  lg:mt-40 ">

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

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
        At Branym, we follow these essential steps in our web software development process to deliver top-notch solutions tailored to your specific needs. From understanding your project to deployment and documentation, we are committed to excellence, ensuring your web software exceeds expectations.
        </p>
      </PageIntro>

     <div className='bg-white'>

      <div className="pt-24 space-y-24 [counter-reset:section] sm:pt-32 sm:space-y-32 lg:pt-40 lg:space-y-40">
          <Discover />
          <Build />
          <Deliver />
        </div>

        <Values />

        <ContactSection />

     </div>
    </>
  )
}
