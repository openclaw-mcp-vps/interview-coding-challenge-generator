import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Coding Challenge Generator',
  description: 'Generate custom coding challenges for interviews — role-specific problems, test cases, and evaluation rubrics powered by AI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="48ccd8af-1248-42b6-b319-2a59ffb426f0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
