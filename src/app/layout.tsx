// import './globals.css'
import 'focus-visible'
import '@/styles/tailwind.css'

import { Header } from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
