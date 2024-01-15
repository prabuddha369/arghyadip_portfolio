import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arghyadip Biswas',
  description: 'I am Arghyadip Biswas, a certified fitness coach, nutrition expert, and calisthenics coach. My expertise spans exercise physiology, nutrition science, and bodyweight training. I design personalized workout programs, offer comprehensive nutrition guidance, and specialize in dynamic calisthenics routines. Committed to continuous learning, I aim to inspire positive transformations in individuals, fostering holistic well-being. Join me on the journey to optimal health and vitality!',
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
