import '@/public/globals.css';
import Navbar from '@/components/navbar'

export default function RootLayout({children}: any) {
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
