import type { Metadata } from 'next'
import {Schibsted_Grotesk, Markazi_Text} from 'next/font/google'
import './global.css'
import LightRays from '@/components/LightRays'
import Navbar from '@/components/Navbar'


const schibstedGrotesk = Schibsted_Grotesk ({
  variable: '--font-schibsted-grotesk',
  subsets: ["latin"]
})

const markaziText = Markazi_Text ({
  variable: '--font-markazi-text',
  subsets: ["latin"]
}) 

export const metadata: Metadata = {
  title: 'An event app',
  description:  'An event app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${schibstedGrotesk} ${markaziText} min-h-screen antialiased`}>
        <Navbar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
              <LightRays
                  raysOrigin="top-center-offset"
                  raysColor="#d25b5b"
                  raysSpeed={1.0}
                  lightSpread={0.9}
                  rayLength={1.8}
                  followMouse={true}
                  mouseInfluence={0.8}
                  noiseAmount={0.0}
                  distortion={0.01}
              />
        </div>
        <main>
      {children}
        </main>
      </body>
    </html>
  )
}