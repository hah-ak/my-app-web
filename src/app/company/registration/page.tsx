import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "./_components/Layout"
import { Building2, Users, Briefcase, Calendar } from "lucide-react"

// This is a mock function. In a real application, you would fetch this data from your backend.
const getCompanyInfo = () => {
    // For demonstration, we'll return null to simulate no registered company.
    // In a real app, you'd return the actual company data if it exists.
    return {
        name:'',
        description:''
    }
}

export default function Home() {
    const companyInfo = getCompanyInfo()

    return (
        <Layout>
            {companyInfo ? (
                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                            <Building2 className="mr-2 h-6 w-6 text-yellow-500" />
                            Company Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg text-gray-700">{companyInfo.name}</p>
                        <p className="text-gray-600">{companyInfo.description}</p>
                        {/* Add more company information here */}
                        <Link href="/company-management">
                            <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">Edit Company Information</Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                            <Building2 className="mr-2 h-6 w-6 text-yellow-500" />
                            Welcome to Company Management System
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg text-gray-700">It looks like you haven`t registered your company information yet.</p>
                        <p className="text-gray-600">To get started, please register your company details.</p>
                        <Link href="/company-management">
                            <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">Register Company</Button>
                        </Link>
                    </CardContent>
                </Card>
            )}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Quick Access</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/company-management" className="transition-transform hover:-translate-y-1">
                        <Button
                            variant="outline"
                            className="w-full h-24 text-lg font-medium border-2 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                        >
                            <Building2 className="mr-2 h-5 w-5 text-yellow-500" />
                            Company Management
                        </Button>
                    </Link>
                    <Link href="/staff" className="transition-transform hover:-translate-y-1">
                        <Button
                            variant="outline"
                            className="w-full h-24 text-lg font-medium border-2 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                        >
                            <Users className="mr-2 h-5 w-5 text-yellow-500" />
                            Staff Management
                        </Button>
                    </Link>
                    <Link href="/staff-service-info" className="transition-transform hover:-translate-y-1">
                        <Button
                            variant="outline"
                            className="w-full h-24 text-lg font-medium border-2 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                        >
                            <Briefcase className="mr-2 h-5 w-5 text-yellow-500" />
                            Staff Service Info
                        </Button>
                    </Link>
                    <Link href="/staff-schedule-table" className="transition-transform hover:-translate-y-1">
                        <Button
                            variant="outline"
                            className="w-full h-24 text-lg font-medium border-2 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
                        >
                            <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
                            Staff Schedule
                        </Button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

