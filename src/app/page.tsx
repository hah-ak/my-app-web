import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MainLayout from "./_components/MainLayout"
import { Building2, MessageSquare, Calendar, Search, ArrowRight } from "lucide-react"

export default function Home() {
  return (
      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Welcome to ConnectBiz</h1>
          <p className="text-xl text-center text-gray-700 mb-8">Your bridge to seamless company-customer interactions</p>

          <Card className="mb-8 border-2 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Discover Our Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-4">
                ConnectBiz is designed to streamline communication between businesses and their customers. From service
                bookings to real-time chat, we`re here to enhance your customer experience.
              </p>
              <Link href="/company/registration/company-management">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                  <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
                  Service Reservations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Book services from your favorite companies with ease.</p>
                <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                  <MessageSquare className="mr-2 h-5 w-5 text-yellow-500" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Communicate directly with companies in real-time.</p>
                <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                  <Search className="mr-2 h-5 w-5 text-yellow-500" />
                  Product Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Find the products and services you need quickly.</p>
                <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                  <Building2 className="mr-2 h-5 w-5 text-yellow-500" />
                  Company Profiles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Explore detailed company profiles and offerings.</p>
                <Link href="/company/registration">
                  <Button variant="outline" className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                    View Companies
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to enhance your business-customer relationships?
            </h2>
            <Link href="/company/registration">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">
                Register Your Company
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
  )
}

