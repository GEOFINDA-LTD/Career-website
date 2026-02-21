import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GEOFINDA Tech Hub - Career Opportunities in Technology',
  description: 'Discover innovative tech career paths with GEOFINDA. Access 25+ technology programs, mentorship, and real-world industry experience. Start your journey today.',
  keywords: ['tech careers', 'technology programs', 'mentorship', 'career development', 'tech internships'],
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'GEOFINDA Tech Hub - Your Path to Tech Success',
    description: 'Explore technology career programs with mentorship and industry exposure',
    images: [{ url: '/logo.png', width: 512, height: 512 }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4CC3E0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
