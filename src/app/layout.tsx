import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Franky Vargas | Aprende a Programar',
  description: 'Clases personalizadas de programación con Franky Vargas. Aprende desarrollo web, software y más con mentorías 1:1.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
      
        {children}

      </body>
    </html>
  )
}
