import './globals.css';
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Script src="https://kit.fontawesome.com/72aeedc907.js" crossorigin="anonymous" />
      </body>
    </html>
  )
}
