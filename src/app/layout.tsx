import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
  icons: {
    icon: 'https://i.imgur.com/UKGl5Qk.png', // Or '/favicon.png' if local
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={outfit.variable}>{children}</body>
    </html>
  )
}
