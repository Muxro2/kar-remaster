import '@/public/globals.css';
import Navbar from '@/components/navbar'
import { ReactNode } from 'react';
import Image from 'next/image';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>

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
                          <div className="h-35 bg-black pl-4 pt-6">
                        <h2 className="text-xl font-bold">
                              Karina Prezeau
                        </h2>
                        <h2 className="text-lg">
                              Photography & Graphic Design
                        </h2>
                  </div>
      </body>
    </html>
  );
}
