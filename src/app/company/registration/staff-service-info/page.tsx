"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Search, Plus } from "lucide-react"
import Layout from "../_components/Layout"
import {MyCompanyStaff, StaffService, StaffServiceTimeTable} from "@/types/company/staff/types";
import {myCompanyServices, myCompanyStaffs} from "@/app/company/actions";
import {CompanyService} from "@/types/company/types";


const initStaffServiceInfo:StaffService = {
    id: 0,
    service: {
        id : 0, content : "", img : ""
    },
    price: 0,
    currency: "",
    staffExplain: "",
    staffServiceTimeTables: []
}

export default function StaffServiceInfoPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStaff, setSelectedStaff] = useState<string | null>(null)
    const [selectedService, setSelectedService] = useState<string | null>(null)

    const [staffs, setStaffs] = useState<MyCompanyStaff[]>([])
    const [companyServices, setCompanyServices] = useState<CompanyService[]>([])
    const [staffServiceInfo, setStaffServiceInfo] = useState<StaffService>(initStaffServiceInfo)

    useEffect(() => {
        myCompanyStaffs()
            .then(({status, data}) => {
                if (status === 'success') {
                    setStaffs(data)
                }
            })
        myCompanyServices()
            .then(({status, data}) => {
                if (status === 'success') {
                    setCompanyServices(data)
                }
            })
    }, []);

    useEffect(() => {
        if (selectedStaff && selectedService) {
            const existingInfo = staffs
                .filter(value => value.id === Number(selectedStaff))[0]
                ?.services
                .filter(value => value.service.id === Number(selectedService))[0]
            if (existingInfo) {
                setStaffServiceInfo(existingInfo)
            } else {
                setStaffServiceInfo(initStaffServiceInfo)
            }
        }
    }, [selectedStaff, selectedService])

    const handleStaffServiceInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStaffServiceInfo((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleTimeTableChange = (index: number, field: keyof StaffServiceTimeTable, value: string | boolean) => {
        setStaffServiceInfo((prev) => {
            const newTimeTables = [...prev.staffServiceTimeTables]
            newTimeTables[index] = { ...newTimeTables[index], [field]: value }
            return { ...prev, timeTables: newTimeTables }
        })
    }

    const addTimeTable = () => {
        setStaffServiceInfo((prev) => ({
            ...prev,
            timeTables: [
                ...prev.staffServiceTimeTables,
                {
                    dayOfTheWeek: "",
                    startBreakTime: "",
                    endBreakTime: "",
                    exceptionOpenTime: "",
                    exceptionCloseTime: "",
                },
            ],
        }))
    }

    const removeTimeTable = (index: number) => {
        setStaffServiceInfo((prev) => ({
            ...prev,
            timeTables: prev.staffServiceTimeTables.filter((_, i) => i !== index),
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Submitting:", staffServiceInfo)
        // Here you would typically send the data to your backend
    }

    const handleAddNewStaff = () => {
        setSelectedStaff(null)
        setSelectedService(null)
        setStaffServiceInfo(initStaffServiceInfo)
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Staff Service Information</h1>

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Manage Staff</h2>
                    <Button onClick={handleAddNewStaff} className="bg-green-500 hover:bg-green-600 text-white">
                        <Plus className="mr-2 h-4 w-4" /> Add New Staff
                    </Button>
                </div>

                <Card className="border-2 mb-6">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Search className="mr-2 h-5 w-5 text-yellow-500" />
                            Search Staff
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type="text"
                            placeholder="Search staff..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border-2 focus-visible:ring-yellow-500"
                        />
                    </CardContent>
                </Card>

                <Card className="border-2 mb-6">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Briefcase className="mr-2 h-5 w-5 text-yellow-500" />
                            Select Staff and Service
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select onValueChange={setSelectedStaff}>
                            <SelectTrigger className="border-2 focus:ring-yellow-500">
                                <SelectValue placeholder="Select Staff" />
                            </SelectTrigger>
                            <SelectContent>
                                {staffs.map((staff) => (
                                    <SelectItem key={staff.id} value={`${staff.id}`}>
                                        {staff.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select onValueChange={setSelectedService}>
                            <SelectTrigger className="border-2 focus:ring-yellow-500">
                                <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                            <SelectContent>
                                {companyServices.map((service) => (
                                    <SelectItem key={service.id} value={`${service.id}`}>
                                        {service.content}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                {selectedStaff && selectedService && (
                    <Card className="border-2">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                                <Briefcase className="mr-2 h-5 w-5 text-yellow-500" />
                                Staff Service Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
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
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">Time Tables</h3>
                                        <Button
                                            type="button"
                                            onClick={addTimeTable}
                                            variant="outline"
                                            className="border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                                        >
                                            <Plus className="mr-2 h-4 w-4" /> Add Time Table
                                        </Button>
                                    </div>
                                    {staffServiceInfo.staffServiceTimeTables.map((timeTable, index) => (
                                        <Card key={index} className="border-2">
                                            <CardContent className="pt-6 space-y-4">
                                                <Select
                                                    value={`${timeTable.dayOfTheWeek}`}
                                                    onValueChange={(value) => handleTimeTableChange(index, "dayOfTheWeek", value)}
                                                >
                                                    <SelectTrigger className="border-2 focus:ring-yellow-500">
                                                        <SelectValue placeholder="Select Day of the Week" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                                                            (day, i) => (
                                                                <SelectItem key={i} value={String(i + 1)}>
                                                                    {day}
                                                                </SelectItem>
                                                            ),
                                                        )}
                                                    </SelectContent>
                                                </Select>

                                                <div className="grid grid-cols-2 gap-4">
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


                                                <div className="grid grid-cols-2 gap-4">
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


                                                <Button
                                                    type="button"
                                                    onClick={() => removeTimeTable(index)}
                                                    variant="outline"
                                                    className="w-full border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                                >
                                                    Remove Time Table
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                                    {staffServiceInfo.id > 0 ? "Update" : "Create"} Service
                                    Information
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </div>
        </Layout>
    )
}

