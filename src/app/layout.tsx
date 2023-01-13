import Navbar from './components/header/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
