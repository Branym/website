import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert, href, className, children, ...props }) {
  className = clsx(
    'inline-flex rounded-lg px-4 py-1.5 text-sm font-semibold transition',
    className,
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  )

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
