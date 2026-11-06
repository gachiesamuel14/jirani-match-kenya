import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jirani Match Kenya | Connect Nearby',
  description: 'Location-based dating for Kenyans. Match with people near you by county, interests, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-kenyan-green via-black to-kenyan-red min-h-screen text-white`}>
        {children}
      </body>
    </html>
  )
}