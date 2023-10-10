import './globals.css'
import '../public/fonts.css'
import type { Metadata } from 'next'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Tarkhineh | restaurant',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header/>
        <main className='md:container mx-0'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
