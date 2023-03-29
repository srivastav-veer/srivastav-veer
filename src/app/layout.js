import './globals.css'

export const metadata = {
  title: 'Veer Shrivastav - Entrepreneur | Technologist | Explorer',
  description: 'Veer Shrivastav is an Entrepreneur by nature',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
