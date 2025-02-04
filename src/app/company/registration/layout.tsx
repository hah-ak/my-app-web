import "../../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Company Management System",
    description: "Manage your company information and services",
}

export default function CompanyLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={`${inter.className} bg-gray-50 min-h-screen`}>
        <main className="container mx-auto py-8 px-4">{children}</main>
        </div>
    )
}

