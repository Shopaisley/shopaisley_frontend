import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fonts } from './fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopAisley',
  description: 'Anything you can buy',
}

import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


