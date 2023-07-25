import Link from 'next/link'
import clsx from 'clsx'

export function GradientStroke({ invert, href, className, gradient= 'bg-gradient-to-r from-gray-700 from-10% via-55% to-80% via-gray-200 to-gray-700', children, ...props }) {
  className = clsx(
    'relative p-px rounded-lg',
    gradient,
    className
  )
  return (
    <div className={className}>
      {/* <div className={gradient + ' absolute h-full w-full top-0 left-0 -z-10 scale-110 blur-2xl opacity-60 bg-inherit p-px rounded-lg'}></div> */}
      {children}
    </div>
  )
}
