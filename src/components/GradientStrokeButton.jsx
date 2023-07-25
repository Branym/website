import Link from 'next/link'
import clsx from 'clsx'

export function GradientStrokeButton({ invert, href, className, children, ...props }) {
  className = clsx(
    'inline-flex !rounded-lg px-8 py-1.5 text-sm font-semibold transition bg-black bg-neutral-950 text-white hover:bg-neutral-800/0',
    className
  )

  return (
    <div className='relative bg-gradient-to-r from-blue-500 to-indigo-700 p-px rounded-lg'>
      <div className='absolute h-full w-full top-0 left-0 -z-10 scale-110 blur-xl opacity-40 bg-gradient-to-r from-blue-500 to-indigo-700 p-px rounded-lg'></div>
      {href ? <Link href={href} className={className} {...props}>
        {children}
      </Link> : <button className={className} {...props}>
        {children}
      </button>}
    </div>
  )
}
