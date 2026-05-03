import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QueryCraft – Visual SQL Builder',
  description: 'Build complex SQL queries with drag and drop. No SQL skills required.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c6469d5-1cf1-4c34-a9f8-3a51f7c48c4b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
