import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-yellow-500">🤝</span>
                            <span className="text-2xl font-bold text-gray-900">ConnectBiz</span>
                        </Link>
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-gray-600 hover:text-gray-900">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <Link href="/company/registration/company-management">
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Company Login</Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
    )
}

