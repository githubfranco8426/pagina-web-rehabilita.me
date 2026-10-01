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
  title: 'Rehabilitación a domicilio en Iquique y Alto Hospicio | rehabilita.me',
  description:
    'Rehabilitación especializada en tu hogar en Iquique y Alto Hospicio. Kinesiología y Fonoaudiología para recuperación post hospitalización, neurológica y respiratoria.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/logo-oficial.jpg',
  },
  openGraph: {
    title: 'Rehabilitación especializada en tu hogar | rehabilita.me',
    description: 'Kinesiología y Fonoaudiología a domicilio en Iquique y Alto Hospicio. Cuéntanos tu caso y te orientamos.',
    images: [{ url: '/images/domicilio-paciente.webp', alt: 'Atención de rehabilitación en el hogar' }],
    locale: 'es_CL',
    url: '/',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1b365d',
}

// Datos estructurados (Schema.org) para que Google entienda que somos un
// centro de salud local: dirección, teléfono, especialidades. Ayuda al
// posicionamiento local y a que Maps/Ads muestren la info correcta.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://rehabilitame.cl/#centro',
  name: brand.name,
  legalName: brand.legalName,
  description:
    'Rehabilitación especializada a domicilio en Iquique y Alto Hospicio. Kinesiología y Fonoaudiología, con atención en consulta y online según el caso.',
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
