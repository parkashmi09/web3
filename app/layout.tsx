import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AuthProvider from "@/components/AuthProvider"
import { ToastProvider } from "@/context/toast-context"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bitbop - Web3 Crypto Platform",
  description: "A comprehensive Web3 platform for cryptocurrency trading, DeFi banking, and more",
  generator: 'v0.dev'
}



// Server component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>

          {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
}