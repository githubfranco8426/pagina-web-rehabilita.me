import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import { MotionProvider } from '@/components/motion-provider'
import { brand } from '@/lib/brand'
import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://rehabilitame.cl'),
  title: 'Rehabilítame Kids | Desarrollo temprano en Iquique',
  description:
    'Kinesiología y Fonoaudiología infantil para acompañar el desarrollo temprano, el movimiento y la comunicación en Iquique.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/b12/avatar.png',
  },
  openGraph: {
    title: 'Rehabilítame Kids | Desarrollo temprano en Iquique',
    description: 'Movimiento, comunicación y juego. Acompañamos el desarrollo temprano junto a tu familia.',
    images: [],
    locale: 'es_CL',
    url: '/',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#164e4a',
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
    'Equipo de Kinesiología y Fonoaudiología con objetivos coordinados. Atención en Iquique y Alto Hospicio, a domicilio, en consulta y online según el caso.',
  url: 'https://rehabilitame.cl',
  image: 'https://rehabilitame.cl/images/b12/avatar.png',
  logo: 'https://rehabilitame.cl/images/b12/avatar.png',
  telephone: `+${brand.contact.whatsappConsultas}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Iquique',
    addressRegion: 'Tarapacá',
    addressCountry: 'CL',
  },
  areaServed: ['Iquique', 'Alto Hospicio'],
  medicalSpecialty: ['Kinesiología respiratoria', 'Kinesiología maxilofacial', 'Fonoaudiología'],
  sameAs: [brand.contact.instagramUrl],
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
    <html lang="es">
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
