"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Minus, Plus, Users} from "lucide-react"
import Layout from "../../_components/Layout"
import {MyCompanyStaff, StaffService} from "@/types/company/staff/types";
import {ExceptionTimeTable, WeekTimeTable} from "@/types/company/types";

export default function StaffRegisterPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const staffId = searchParams.get("id")
    const [staff, setStaff] = useState<MyCompanyStaff>({
        id: 0,
        name: "",
        position: "",
        introduce: "",
        services: [],
        weekTimetables: [],
        exceptionTimetables: [],
    })

    useEffect(() => {
        if (staffId) {
            // Fetch staff data based on staffId
            // For now, we'll use mock data
            setStaff({
                id: Number.parseInt(staffId),
                name: "John Doe",
                position: "Manager",
                introduce: "Experienced manager",
                services: [],
                weekTimetables: [],
                exceptionTimetables: [],
            })
        }
    }, [staffId])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStaff((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const addService = () => {
        setStaff((prev) => ({
            ...prev,
            services: [...prev.services, { id: Date.now(), serviceId: 0, price: 0, currency: "", staffExplain: "" }],
        }))
    }

    const removeService = (id: number) => {
        setStaff((prev) => ({
            ...prev,
            services: prev.services.filter((service) => service.id !== id),
        }))
    }

    const handleServiceChange = (id: number, field: keyof StaffService, value: string | number) => {
        setStaff((prev) => ({
            ...prev,
            services: prev.services.map((service) =>
                service.id === id ? { ...service, [field]: field === "price" ? Number(value) : value } : service,
            ),
        }))
    }

    const addWeekTimetable = () => {
        setStaff((prev) => ({
            ...prev,
            weekTimetables: [
                ...prev.weekTimetables,
                { id: Date.now(), dayOfTheWeek: 1, openTime: "", closeTime: "", startBreaktime: "", endBreaktime: "" },
            ],
        }))
    }

    const removeWeekTimetable = (id: number) => {
        setStaff((prev) => ({
            ...prev,
            weekTimetables: prev.weekTimetables.filter((timetable) => timetable.id !== id),
        }))
    }

    const handleWeekTimetableChange = (id: number, field: keyof WeekTimeTable, value: string | number) => {
        setStaff((prev) => ({
            ...prev,
            weekTimetables: prev.weekTimetables.map((timetable) =>
                timetable.id === id ? { ...timetable, [field]: field === "dayOfTheWeek" ? Number(value) : value } : timetable,
            ),
        }))
    }

    const addExceptionTimetable = () => {
        setStaff((prev) => ({
            ...prev,
            exceptionTimetables: [
                ...prev.exceptionTimetables,
                { id: Date.now(), endTime: "", startTime: "", dayClose: false, date: "", reason: "" },
            ],
        }))
    }

    const removeExceptionTimetable = (id: number) => {
        setStaff((prev) => ({
            ...prev,
            exceptionTimetables: prev.exceptionTimetables.filter((timetable) => timetable.id !== id),
        }))
    }

    const handleExceptionTimetableChange = (id: number, field: keyof ExceptionTimeTable, value: string | boolean) => {
        setStaff((prev) => ({
            ...prev,
            exceptionTimetables: prev.exceptionTimetables.map((timetable) =>
                timetable.id === id ? { ...timetable, [field]: value } : timetable,
            ),
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the data to your backend
        console.log("Submitting staff data:", staff)
        // After submission, redirect to the staff management page
        router.push("/company/registration/staff")
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    {staffId ? "Update Staff Member" : "Register New Staff Member"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Card className="border-2">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                                <Users className="mr-2 h-5 w-5 text-yellow-500" />
                                Staff Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                name="name"
                                value={staff.name}
                                onChange={handleChange}
                                placeholder="Staff Name"
                                className="border-2 focus-visible:ring-yellow-500"
                            />

                            <Input
                                name="position"
                                value={staff.position}
                                onChange={handleChange}
                                placeholder="Staff Position"
                                className="border-2 focus-visible:ring-yellow-500"
                            />

                            <Textarea
                                name="introduce"
                                value={staff.introduce}
                                onChange={handleChange}
                                placeholder="Staff Introduction"
                                className="border-2 focus-visible:ring-yellow-500"
                            />

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Services</h3>
                                {staff.services.map((service) => (
                                    <Card key={service.id} className="p-4 border-2">
                                        <div className="space-y-2">
                                            <Input
                                                value={service.serviceId.toString()}
                                                onChange={(e) => handleServiceChange(service.id, "serviceId", e.target.value)}
                                                placeholder="Service ID"
                                                type="number"
                                                className="border-2 focus-visible:ring-yellow-500"
                                            />
                                            <Input
                                                value={service.price.toString()}
                                                onChange={(e) => handleServiceChange(service.id, "price", e.target.value)}
                                                placeholder="Price"
                                                type="number"
                                                className="border-2 focus-visible:ring-yellow-500"
                                            />
                                            <Input
                                                value={service.currency}
                                                onChange={(e) => handleServiceChange(service.id, "currency", e.target.value)}
                                                placeholder="Currency"
                                                className="border-2 focus-visible:ring-yellow-500"
                                            />
                                            <Textarea
                                                value={service.staffExplain}
                                                onChange={(e) => handleServiceChange(service.id, "staffExplain", e.target.value)}
                                                placeholder="Staff Explanation"
                                                className="border-2 focus-visible:ring-yellow-500"
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => removeService(service.id)}
                                                variant="outline"
                                                className="w-full border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Minus className="mr-2 h-4 w-4" /> Remove Service
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                                <Button
                                    type="button"
                                    onClick={addService}
                                    variant="outline"
                                    className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Add Service
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Week Timetables</h3>
                                {staff.weekTimetables.map((timetable) => (
                                    <Card key={timetable.id} className="p-4 border-2">
                                        <div className="space-y-2">
                                            <Select
                                                onValueChange={(value) => handleWeekTimetableChange(timetable.id, "dayOfTheWeek", value)}
                                                value={timetable.dayOfTheWeek.toString()}
                                            >
                                                <SelectTrigger className="border-2 focus:ring-yellow-500">
                                                    <SelectValue placeholder="Select Day of Week" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                                                        (day, index) => (
                                                            <SelectItem key={index} value={(index + 1).toString()}>
                                                                {day}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <div className="grid grid-cols-2 gap-2">
                                                <Input
                                                    type="time"
                                                    value={timetable.openTime}
                                                    onChange={(e) => handleWeekTimetableChange(timetable.id, "openTime", e.target.value)}
                                                    className="border-2 focus-visible:ring-yellow-500"
                                                />
                                                <Input
                                                    type="time"
                                                    value={timetable.closeTime}
                                                    onChange={(e) => handleWeekTimetableChange(timetable.id, "closeTime", e.target.value)}
                                                    className="border-2 focus-visible:ring-yellow-500"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <Input
                                                    type="time"
                                                    value={timetable.startBreaktime ?? ''}
                                                    onChange={(e) => handleWeekTimetableChange(timetable.id, "startBreaktime", e.target.value)}
                                                    className="border-2 focus-visible:ring-yellow-500"
                                                />
                                                <Input
                                                    type="time"
                                                    value={timetable.endBreaktime ?? ''}
                                                    onChange={(e) => handleWeekTimetableChange(timetable.id, "endBreaktime", e.target.value)}
                                                    className="border-2 focus-visible:ring-yellow-500"
                                                />
                                            </div>
                                            <Button
                                                type="button"
                                                onClick={() => removeWeekTimetable(timetable.id)}
                                                variant="outline"
                                                className="w-full border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Minus className="mr-2 h-4 w-4" /> Remove Week Timetable
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                                <Button
                                    type="button"
                                    onClick={addWeekTimetable}
                                    variant="outline"
                                    className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Add Week Timetable
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Exception Timetables</h3>
                                {staff.exceptionTimetables.map((timetable) => (
                                    <Card key={timetable.id} className="p-4 border-2">
                                        <div className="space-y-2">
                                            <Input
                                                type="date"
                                                value={timetable.date}
                                                onChange={(e) => handleExceptionTimetableChange(timetable.id, "date", e.target.value)}
                                                className="border-2 focus-visible:ring-yellow-500"
                                            />
                                            <div className="grid grid-cols-2 gap-2">
                                                <Input
                                                    type="time"
                                                    value={timetable.startTime}
                                                    onChange={(e) => handleExceptionTimetableChange(timetable.id, "startTime", e.target.value)}
                                                    className="border-2 focus-visible:ring-yellow-500"
                                                />
                                                <Input
                                                    type="time"
                                                    value={timetable.endTime}
                                                    onChange={(e) => handleExceptionTimetableChange(timetable.id, "endTime", e.target.value)}
                                                    className="border-2 focus-visible:ring-yellow-500"
                                                />
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    id={`dayClose-${timetable.id}`}
                                                    checked={timetable.dayClose}
                                                    onChange={(e) => handleExceptionTimetableChange(timetable.id, "dayClose", e.target.checked)}
                                                    className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                                                />
                                                <label htmlFor={`dayClose-${timetable.id}`} className="text-sm font-medium text-gray-700">
                                                    Day Closed
                                                </label>
                                            </div>
                                            <Input
                                                value={timetable.reason}
                                                onChange={(e) => handleExceptionTimetableChange(timetable.id, "reason", e.target.value)}
                                                placeholder="Reason"
                                                className="border-2 focus-visible:ring-yellow-500"
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => removeExceptionTimetable(timetable.id)}
                                                variant="outline"
                                                className="w-full border-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Minus className="mr-2 h-4 w-4" /> Remove Exception Timetable
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                                <Button
                                    type="button"
                                    onClick={addExceptionTimetable}
                                    variant="outline"
                                    className="w-full border-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Add Exception Timetable
                                </Button>
                            </div>

                            <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                                {staffId ? "Update Staff Member" : "Register Staff Member"}
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </Layout>
    )
}

