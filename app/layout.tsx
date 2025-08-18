import '@/public/globals.css';
import Navbar from '@/app/ui/navbar'
import { ReactNode } from 'react';
import Image from 'next/image';
import { font_primary } from '@/app/lib/fonts'
import Footer from '@/app/ui/Footer'



export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`${font_primary.className} antialiased`}>

          <Navbar/>

          <div className='fixed inset-0 z-[-1]'>
          <Image
            src="/images/background.jpg"
            alt="background"
            fill
            className='object-cover'
            />
          </div>
          


        <main className='relative z-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
