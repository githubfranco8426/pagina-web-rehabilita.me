import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import { MotionProvider } from '@/components/motion-provider'
import { brand } from '@/lib/brand'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rehabilitame.cl'),
  title: 'rehabilita.me · Kinesiología respiratoria y fonoaudiología en Iquique',
  description:
    'Kinesiología respiratoria, maxilofacial y fonoaudiología en Iquique. Atención en consulta, a domicilio y online. Agenda tu hora por WhatsApp.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/logo-oficial.jpg',
  },
  openGraph: {
    title: 'rehabilita.me · Kinesiología y fonoaudiología en Iquique',
    description: 'Cuidamos cómo respiras y cómo te comunicas. Atención en consulta, a domicilio y online.',
    images: ['/images/logo-oficial.jpg'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

// Datos estructurados (Schema.org) para que Google entienda que somos un
// centro de salud local: dirección, teléfono, especialidades. Ayuda al
// posicionamiento local y a que Maps/Ads muestren la info correcta.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: brand.name,
  legalName: brand.legalName,
  description:
    'Kinesiología respiratoria, maxilofacial y fonoaudiología en Iquique. Atención en consulta, a domicilio y online.',
  url: 'https://rehabilitame.cl',
  image: 'https://rehabilitame.cl/images/logo-oficial.jpg',
  telephone: `+${brand.contact.whatsappConsultas}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: brand.contact.address,
    addressLocality: 'Iquique',
    addressRegion: 'Tarapacá',
    addressCountry: 'CL',
  },
  areaServed: ['Iquique', 'Alto Hospicio'],
  medicalSpecialty: ['Kinesiología respiratoria', 'Kinesiología maxilofacial', 'Fonoaudiología'],
  sameAs: [brand.contact.instagramUrl],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '20:00',
  },
}

// Google tag (GA4 + Google Ads). No se activa hasta que definas
// NEXT_PUBLIC_GA_ID (G-XXXXXXX) y, opcionalmente, NEXT_PUBLIC_GOOGLE_ADS_ID
// (AW-XXXXXXX) en .env.local o en las variables de entorno de Vercel.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
                ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
              `}
            </Script>
          </>
        )}
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(structuredData)}
        </Script>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
