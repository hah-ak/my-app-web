"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Clock, Plus, Minus } from "lucide-react"
import Layout from "../_components/Layout"

interface TimeTableEntry {
    dayOfTheWeek: string
    startBreakTime: string
    endBreakTime: string
    sameBusinessTime: boolean
    exceptionOpenTime: string
    exceptionCloseTime: string
}

interface StaffServiceInfo {
    staffId: string
    serviceId: string
    price: string
    currency: string
    staffExplain: string
}

function StaffServiceInfoForm() {
    const [staffServiceInfo, setStaffServiceInfo] = useState<StaffServiceInfo>({
        staffId: "",
        serviceId: "",
        price: "",
        currency: "",
        staffExplain: "",
    })

    const [timeTables, setTimeTables] = useState<TimeTableEntry[]>([
        {
            dayOfTheWeek: "",
            startBreakTime: "",
            endBreakTime: "",
            sameBusinessTime: false,
            exceptionOpenTime: "",
            exceptionCloseTime: "",
        },
    ])

    const handleStaffServiceInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStaffServiceInfo((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleStaffSelect = (value: string) => {
        setStaffServiceInfo((prev) => ({ ...prev, staffId: value }))
    }

    const handleServiceSelect = (value: string) => {
        setStaffServiceInfo((prev) => ({ ...prev, serviceId: value }))
    }

    const handleTimeTableChange = (index: number, field: keyof TimeTableEntry, value: string | boolean) => {
        setTimeTables((prev) => {
            const newTimeTables = [...prev]
            newTimeTables[index] = { ...newTimeTables[index], [field]: value }
            return newTimeTables
        })
    }

    const addTimeTable = () => {
        setTimeTables((prev) => [
            ...prev,
            {
                dayOfTheWeek: "",
                startBreakTime: "",
                endBreakTime: "",
                sameBusinessTime: false,
                exceptionOpenTime: "",
                exceptionCloseTime: "",
            },
        ])
    }

    const removeTimeTable = (index: number) => {
        setTimeTables((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ staffServiceInfo, timeTables })
        // Here you would typically send the data to your backend
    }

    return (
        <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Staff Service Information</h1>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Briefcase className="mr-2 h-5 w-5 text-yellow-500" />
                            Service Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select onValueChange={handleStaffSelect}>
                            <SelectTrigger className="border-2 focus:ring-yellow-500">
                                <SelectValue placeholder="Select Staff" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Staff 1</SelectItem>
                                <SelectItem value="2">Staff 2</SelectItem>
                                {/* Add more staff as needed */}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={handleServiceSelect}>
                            <SelectTrigger className="border-2 focus:ring-yellow-500">
                                <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Service 1</SelectItem>
                                <SelectItem value="2">Service 2</SelectItem>
                                {/* Add more services as needed */}
                            </SelectContent>
                        </Select>

                        <Input
                            name="price"
                            value={staffServiceInfo.price}
                            onChange={handleStaffServiceInfoChange}
                            type="number"
                            placeholder="Price"
                            className="border-2 focus-visible:ring-yellow-500"
                        />

                        <Input
                            name="currency"
                            value={staffServiceInfo.currency}
                            onChange={handleStaffServiceInfoChange}
                            placeholder="Currency"
                            className="border-2 focus-visible:ring-yellow-500"
                        />

                        <Textarea
                            name="staffExplain"
                            value={staffServiceInfo.staffExplain}
                            onChange={handleStaffServiceInfoChange}
                            placeholder="Staff Explanation"
                            className="border-2 focus-visible:ring-yellow-500"
                        />
                    </CardContent>
                </Card>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Clock className="mr-2 h-5 w-5 text-yellow-500" />
                            Service Time Tables
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {timeTables.map((timeTable, index) => (
                            <div key={index} className="p-4 border-2 rounded-lg">
                                <Select onValueChange={(value) => handleTimeTableChange(index, "dayOfTheWeek", value)}>
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
                                        value={timeTable.startBreakTime}
                                        onChange={(e) => handleTimeTableChange(index, "startBreakTime", e.target.value)}
                                        placeholder="Start Break Time"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                    <Input
                                        type="time"
                                        value={timeTable.endBreakTime}
                                        onChange={(e) => handleTimeTableChange(index, "endBreakTime", e.target.value)}
                                        placeholder="End Break Time"
                                        className="border-2 focus-visible:ring-yellow-500"
                                    />
                                </div>

                                <div className="flex items-center space-x-2 mt-2">
                                    <input
                                        type="checkbox"
                                        id={`sameBusinessTime-${index}`}
                                        checked={timeTable.sameBusinessTime}
                                        onChange={(e) => handleTimeTableChange(index, "sameBusinessTime", e.target.checked)}
                                        className="rounded border-2 border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                    />
                                    <label htmlFor={`sameBusinessTime-${index}`} className="text-sm text-gray-700">
                                        Same as Business Hours
                                    </label>
                                </div>

                                {!timeTable.sameBusinessTime && (
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <Input
                                            type="time"
                                            value={timeTable.exceptionOpenTime}
                                            onChange={(e) => handleTimeTableChange(index, "exceptionOpenTime", e.target.value)}
                                            placeholder="Exception Open Time"
                                            className="border-2 focus-visible:ring-yellow-500"
                                        />
                                        <Input
                                            type="time"
                                            value={timeTable.exceptionCloseTime}
                                            onChange={(e) => handleTimeTableChange(index, "exceptionCloseTime", e.target.value)}
                                            placeholder="Exception Close Time"
                                            className="border-2 focus-visible:ring-yellow-500"
                                        />
                                    </div>
                                )}

                                {index > 0 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => removeTimeTable(index)}
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
                            onClick={addTimeTable}
                            className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Time Table
                        </Button>
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6 rounded-lg">
                    Submit Service Information
                </Button>
            </form>
        </div>
    )
}

export default function StaffServiceInfoPage() {
    return (
        <Layout>
            <StaffServiceInfoForm />
        </Layout>
    )
}

