import '@/public/globals.css';
import Navbar from '@/components/navbar'
import { ReactNode } from 'react';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
