import React from 'react'
import { GradientStrokeButton } from './GradientStrokeButton'
import { Button } from './Button'

export default function ViewProject({link, caption}) {
  return (
    <div className='p-6 md:p-12 w-full bg-neutral-950 rounded-xl flex gap-8 flex-col md:flex-row justify-between items-center'>
        <div className='text-white'> 
            <h3 className='text-lg font-bold text-center md:text-left'>{caption}</h3>
        </div>
        <div>
            <Button href={link} target="_blank" invert className={'!px-8 !py-3 flex items-center gap-4'}>
                <div>Visit</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </Button>
        </div>
    </div>
  )
}
