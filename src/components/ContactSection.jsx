import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import SayHi from './SayHi'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 md:rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="w-full">
            <h2 className="font-display text-3xl font-medium text-white/100 [text-wrap:balance] sm:text-5xl">
              Let's chat
            </h2>
            <div className='mt-12'>
              <SayHi/>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
