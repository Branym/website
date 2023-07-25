import React from 'react'
import { Button } from './Button'
import { GradientStrokeButton } from './GradientStrokeButton'

export default function SayHi() {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className='pr-0 z-10 py-2 lg:pr-2 w-full'>
            <GradientStrokeButton href="/contact" className={"!w-full !px-10 !py-8 font-display !text-lg md:!text-3xl border border-blue-600 hover:bg-blue-900/20"}>
                <div className='w-full flex gap-2 justify-between'>
                <div>hi@branym.com</div>
                <div>➞</div>
                </div>
            </GradientStrokeButton>
        </div>
        <div className='pr-0 py-2 lg:pl-2 w-full'>
        <Button href="/contact" className={"!w-full !px-10 !py-8 font-display !text-lg md:!text-2xl border"}>
            <div className='w-full flex gap-6 items-center'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div>+91 7087362779</div>
            
            </div>
        </Button>
        </div>
    </div>
  )
}
