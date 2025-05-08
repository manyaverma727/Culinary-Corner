import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Culinary Delights - Food Blog Platform",
  description: "Discover the art of cooking with our expert recipes and culinary tips.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}