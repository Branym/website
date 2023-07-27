import { RootLayout } from '@/components/RootLayout'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Branym Technologies',
    default: 'Innovative Web Solutions for the Modern Digital Landscape.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout invert>{children}</RootLayout>
        <Analytics/>
      </body>
    </html>
  )
}
