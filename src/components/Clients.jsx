import cofoundersLogo from '@/images/clients/cofounders.png'
import bgusLogo from '@/images/clients/bgus.png'
import clynkLogo from '@/images/clients/clynk.png'
import education10xLogo from '@/images/clients/education10x.png'
import jauracoLogo from '@/images/clients/jauraco.png'
import polarisLogo from '@/images/clients/polaris.png'
import tagglabsLogo from '@/images/clients/tagglabs.png'
import zuloLogo from '@/images/clients/zulo.png'
import clsx from 'clsx'
import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import Image from 'next/image'




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

export default function Clients() {
  return (
    <div className="rounded-4xl pt-12 sm:pt-16">
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
                  <Image 
                        src={logo} 
                        alt={client} 
                        className={clsx('object-contain scale-[0.9] transition duration-700 hover:scale-[0.95] cursor-pointer', classes)}  
                        height={80}
                        width={280}
                        sizes='(max-width:1024px) 50vw, 25vw'
                    />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}