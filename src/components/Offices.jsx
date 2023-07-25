import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Main Office" invert={invert}>
          1296, Ardee City, Sec. 52
          <br />
          Gurgoan, India
        </Office>
      </li>
      <li>
        <Office name="Secondary Office" invert={invert}>
          63 L Block, Sri Ganganagar
          <br />
           Rajasthan, 335001
        </Office>
      </li>
    </ul>
  )
}
