import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ScrollToTopButton from "./components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raftar - The Future of Pakistani Racing Games",
  description: "Experience the thrill of racing through iconic Pakistani streets with Raftar!",
  icons: {
    icon: [{ url: "/logo.png" }, new URL("/logo.png", "https://raftar.vercel.app")],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${inter.className} grid-pattern`}>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}

