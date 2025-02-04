"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Minus, Building2, Briefcase, Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "../_components/Layout"

interface CompanyService {
    content: string
    img: string
}

interface BusinessWeekTimeTable {
    dayOfTheWeek: string
    openTime: string
    closeTime: string
    startBreakTime: string
    endBreakTime: string
}

interface ExceptionTimeTable {
    date: string
    time: string
    reason: string
}

function CompanyManagementForm() {
    const [company, setCompany] = useState({
        name: "",
        simpleExp: "",
        holidayWork: false,
        taxId: "",
    })

    const [services, setServices] = useState<CompanyService[]>([{ content: "", img: "" }])
    const [businessWeekTimeTables, setBusinessWeekTimeTables] = useState<BusinessWeekTimeTable[]>([])
    const [exceptionBusinessTimeTables, setExceptionBusinessTimeTables] = useState<ExceptionTimeTable[]>([])
    const [exceptionDayOffTimeTables, setExceptionDayOffTimeTables] = useState<ExceptionTimeTable[]>([])

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setCompany((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleServiceChange = (index: number, field: keyof CompanyService, value: string) => {
        setServices((prev) => {
            const newServices = [...prev]
            newServices[index] = { ...newServices[index], [field]: value }
            return newServices
        })
    }

    const addService = () => {
        setServices((prev) => [...prev, { content: "", img: "" }])
    }

    const removeService = (index: number) => {
        setServices((prev) => prev.filter((_, i) => i !== index))
    }

    const handleBusinessWeekTimeTableChange = (index: number, field: keyof BusinessWeekTimeTable, value: string) => {
        setBusinessWeekTimeTables((prev) => {
            const newTimeTables = [...prev]
            newTimeTables[index] = { ...newTimeTables[index], [field]: value }
            return newTimeTables
        })
    }

    const addBusinessWeekTimeTable = () => {
        setBusinessWeekTimeTables((prev) => [
            ...prev,
            { dayOfTheWeek: "", openTime: "", closeTime: "", startBreakTime: "", endBreakTime: "" },
        ])
    }

    const removeBusinessWeekTimeTable = (index: number) => {
        setBusinessWeekTimeTables((prev) => prev.filter((_, i) => i !== index))
    }

    const handleExceptionTimeTableChange = (
        setter: React.Dispatch<React.SetStateAction<ExceptionTimeTable[]>>,
        index: number,
        field: keyof ExceptionTimeTable,
        value: string,
    ) => {
        setter((prev) => {
            const newTimeTables = [...prev]
            newTimeTables[index] = { ...newTimeTables[index], [field]: value }
            return newTimeTables
        })
    }

    const addExceptionTimeTable = (setter: React.Dispatch<React.SetStateAction<ExceptionTimeTable[]>>) => {
        setter((prev) => [...prev, { date: "", time: "", reason: "" }])
    }

    const removeExceptionTimeTable = (
        setter: React.Dispatch<React.SetStateAction<ExceptionTimeTable[]>>,
        index: number,
    ) => {
        setter((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ company, services, businessWeekTimeTables, exceptionBusinessTimeTables, exceptionDayOffTimeTables })
        // Here you would typically send the data to your backend
    }

    return (
        <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Company Management</h1>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Building2 className="mr-2 h-5 w-5 text-yellow-500" />
                            Company Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            name="name"
                            value={company.name}
                            onChange={handleCompanyChange}
                            placeholder="Company Name"
                            className="border-2 focus-visible:ring-yellow-500"
                        />
                        <Textarea
                            name="simpleExp"
                            value={company.simpleExp}
                            onChange={handleCompanyChange}
                            placeholder="Simple Explanation"
                            className="border-2 focus-visible:ring-yellow-500"
                        />
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="holidayWork"
                                name="holidayWork"
                                checked={company.holidayWork}
                                onCheckedChange={(checked) => setCompany((prev) => ({ ...prev, holidayWork: checked as boolean }))}
                                className="border-2 text-yellow-500"
                            />
                            <label htmlFor="holidayWork" className="text-sm text-gray-700">
                                Holiday Work
                            </label>
                        </div>
                        <Input
                            name="taxId"
                            value={company.taxId}
                            onChange={handleCompanyChange}
                            placeholder="Tax ID"
                            className="border-2 focus-visible:ring-yellow-500"
                        />
                    </CardContent>
                </Card>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Briefcase className="mr-2 h-5 w-5 text-yellow-500" />
                            Company Services
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {services.map((service, index) => (
                            <div key={index} className="p-4 border-2 rounded-lg">
                                <Input
                                    value={service.content}
                                    onChange={(e) => handleServiceChange(index, "content", e.target.value)}
                                    placeholder="Service Content"
                                    className="mb-2 border-2 focus-visible:ring-yellow-500"
                                />
                                <Input
                                    value={service.img}
                                    onChange={(e) => handleServiceChange(index, "img", e.target.value)}
                                    placeholder="Image URL"
                                    className="border-2 focus-visible:ring-yellow-500"
                                />
                                {index > 0 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => removeService(index)}
                                        className="mt-2 border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <Minus className="mr-2 h-4 w-4" /> Remove Service
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={addService}
                            className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Service
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Clock className="mr-2 h-5 w-5 text-yellow-500" />
                            Business Week Time Tables
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {businessWeekTimeTables.map((timeTable, index) => (
                            <div key={index} className="p-4 border-2 rounded-lg">
                                <Select onValueChange={(value) => handleBusinessWeekTimeTableChange(index, "dayOfTheWeek", value)}>
                                    <SelectTrigger className="border-2 focus:ring-yellow-500">
                                        <SelectValue placeholder="Select Day of the Week" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => (
                                            <SelectItem key={i} value={String(i + 1)}>
                                                {day}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <Input
                                        type="time"
                                        value={timeTable.openTime}
                                        onChange={(e) => handleBusinessWeekTimeTableChange(index, "openTime", e.target.value)}
                                        placeholder="Open Time"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        type="time"
                                        value={timeTable.closeTime}
                                        onChange={(e) => handleBusinessWeekTimeTableChange(index, "closeTime", e.target.value)}
                                        placeholder="Close Time"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        type="time"
                                        value={timeTable.startBreakTime}
                                        onChange={(e) => handleBusinessWeekTimeTableChange(index, "startBreakTime", e.target.value)}
                                        placeholder="Start Break Time"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        type="time"
                                        value={timeTable.endBreakTime}
                                        onChange={(e) => handleBusinessWeekTimeTableChange(index, "endBreakTime", e.target.value)}
                                        placeholder="End Break Time"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                </div>
                                {index > 0 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => removeBusinessWeekTimeTable(index)}
                                        className="mt-2 border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <Minus className="mr-2 h-4 w-4" /> Remove Time Table
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={addBusinessWeekTimeTable}
                            className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Business Week Time Table
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Calendar className="mr-2 h-5 w-5 text-yellow-500" />
                            Exception Time Tables
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Exception Business Time Tables</h3>
                            {exceptionBusinessTimeTables.map((timeTable, index) => (
                                <div key={index} className="p-4 border-2 rounded-lg">
                                    <Input
                                        type="date"
                                        value={timeTable.date}
                                        onChange={(e) =>
                                            handleExceptionTimeTableChange(setExceptionBusinessTimeTables, index, "date", e.target.value)
                                        }
                                        placeholder="Date"
                                        className="mb-2 border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        type="time"
                                        value={timeTable.time}
                                        onChange={(e) =>
                                            handleExceptionTimeTableChange(setExceptionBusinessTimeTables, index, "time", e.target.value)
                                        }
                                        placeholder="Time"
                                        className="mb-2 border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        value={timeTable.reason}
                                        onChange={(e) =>
                                            handleExceptionTimeTableChange(setExceptionBusinessTimeTables, index, "reason", e.target.value)
                                        }
                                        placeholder="Reason"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                    {index > 0 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => removeExceptionTimeTable(setExceptionBusinessTimeTables, index)}
                                            className="mt-2 border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                            <Minus className="mr-2 h-4 w-4" /> Remove Exception Business Time Table
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => addExceptionTimeTable(setExceptionBusinessTimeTables)}
                                className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                            >
                                <Plus className="mr-2 h-4 w-4" /> Add Exception Business Time Table
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Exception Day Off Time Tables</h3>
                            {exceptionDayOffTimeTables.map((timeTable, index) => (
                                <div key={index} className="p-4 border-2 rounded-lg">
                                    <Input
                                        type="date"
                                        value={timeTable.date}
                                        onChange={(e) =>
                                            handleExceptionTimeTableChange(setExceptionDayOffTimeTables, index, "date", e.target.value)
                                        }
                                        placeholder="Date"
                                        className="mb-2 border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        type="time"
                                        value={timeTable.time}
                                        onChange={(e) =>
                                            handleExceptionTimeTableChange(setExceptionDayOffTimeTables, index, "time", e.target.value)
                                        }
                                        placeholder="Time"
                                        className="mb-2 border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        value={timeTable.reason}
                                        onChange={(e) =>
                                            handleExceptionTimeTableChange(setExceptionDayOffTimeTables, index, "reason", e.target.value)
                                        }
                                        placeholder="Reason"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                    {index > 0 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => removeExceptionTimeTable(setExceptionDayOffTimeTables, index)}
                                            className="mt-2 border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                            <Minus className="mr-2 h-4 w-4" /> Remove Exception Day Off Time Table
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => addExceptionTimeTable(setExceptionDayOffTimeTables)}
                                className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                            >
                                <Plus className="mr-2 h-4 w-4" /> Add Exception Day Off Time Table
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6 rounded-lg">
                    Submit Company Information
                </Button>
            </form>
        </div>
    )
}

export default function CompanyManagementPage() {
    return (
        <Layout>
            <CompanyManagementForm />
        </Layout>
    )
}