"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import Layout from "../_components/Layout"

interface StaffMember {
    companyId: string
    name: string
    rank: string
    introduce: string
}

function StaffForm() {
    const [staff, setStaff] = useState<StaffMember>({
        companyId: "",
        name: "",
        rank: "",
        introduce: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStaff((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCompanySelect = (value: string) => {
        setStaff((prev) => ({ ...prev, companyId: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(staff)
        // Here you would typically send the data to your backend
    }

    return (
        <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Staff Management</h1>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Users className="mr-2 h-5 w-5 text-yellow-500" />
                            Staff Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select onValueChange={handleCompanySelect}>
                            <SelectTrigger className="border-2 focus:ring-yellow-500">
                                <SelectValue placeholder="Select Company" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Company 1</SelectItem>
                                <SelectItem value="2">Company 2</SelectItem>
                                {/* Add more companies as needed */}
                            </SelectContent>
                        </Select>

                        <Input
                            name="name"
                            value={staff.name}
                            onChange={handleChange}
                            placeholder="Staff Name"
                            className="border-2 focus-visible:ring-yellow-500"
                        />

                        <Input
                            name="rank"
                            value={staff.rank}
                            onChange={handleChange}
                            placeholder="Staff Rank"
                            className="border-2 focus-visible:ring-yellow-500"
                        />

                        <Textarea
                            name="introduce"
                            value={staff.introduce}
                            onChange={handleChange}
                            placeholder="Staff Introduction"
                            className="border-2 focus-visible:ring-yellow-500"
                        />
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6 rounded-lg">
                    Submit Staff Information
                </Button>
            </form>
        </div>
    )
}

export default function StaffPage() {
    return (
        <Layout>
            <StaffForm />
        </Layout>
    )
}

