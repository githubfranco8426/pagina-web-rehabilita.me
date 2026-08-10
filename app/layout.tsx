import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'rehabilita.me · Kinesiología respiratoria y fonoaudiología en Iquique',
  description:
    'Kinesiología respiratoria, maxilofacial y fonoaudiología en Iquique. Atención en hospital, a domicilio y en consulta particular. Agenda tu hora por WhatsApp.',
  icons: {
    icon: '/images/logo-oficial.jpg',
  },
  openGraph: {
    title: 'rehabilita.me · Kinesiología y fonoaudiología en Iquique',
    description: 'Cuidamos cómo respiras y cómo te comunicas. Atención en hospital, a domicilio y en consulta particular.',
    images: ['/images/logo-oficial.jpg'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
