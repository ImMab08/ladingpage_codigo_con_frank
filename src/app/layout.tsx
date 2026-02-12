import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Pixelify_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify',
})


export const metadata: Metadata = {
  title: 'Código con Frank | Inicio',
  description: 'Clases personalizadas de programación. Aprende desarrollo web, software y más con mentorías personalizadas.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${pixelify.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      
        {children}

      </body>
    </html>
  )
}
