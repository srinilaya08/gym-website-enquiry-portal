import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Happy Wellness & Fitness | Start Your Transformation Today',
  description:
    'Premium gym and fitness training in Armoor, Nizamabad. Expert trainers, modern equipment, and personalized guidance for your fitness goals.',
}

export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}