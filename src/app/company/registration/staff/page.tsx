"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {Users, Plus, Edit, Trash, Search, ChevronUp, ChevronDown} from "lucide-react"
import Layout from "../_components/Layout"
import {MyCompanyStaff} from "@/types/company/staff/types";
import {myCompanyStaffs} from "@/app/company/actions";
import React from "react"

export default function StaffManagementPage() {
    const router = useRouter()
    const [staffMembers, setStaffMembers] = useState<MyCompanyStaff[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStaff, setSelectedStaff] = useState<number | null>(null)

    useEffect(() => {
        myCompanyStaffs()
            .then(({status, data}) => {
                if (status === 'success') setStaffMembers(data)
            })
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredStaffMembers = staffMembers.filter(
        (staff) =>
            staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.introduce.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const handleEdit = (id: number) => {
        router.push(`/company/registration/staff/register?id=${id}`)
    }

    const handleDelete = (id: number) => {
        // Implement delete functionality
        setStaffMembers((prev) => prev.filter((staff) => staff.id !== id))
    }
    const toggleStaffDetails = (id: number) => {
        setSelectedStaff(selectedStaff === id ? null : id)
    }

    return (
        <Layout>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Staff Management</h1>

                <Card className="mb-6 border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-yellow-500" />
                Staff Members
              </span>
                            <Button
                                onClick={() => router.push("/company/registration/staff/register")}
                                className="bg-green-500 hover:bg-green-600"
                            >
                                <Plus className="mr-2 h-4 w-4" /> Add New Staff
                            </Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center mb-4">
                            <Search className="mr-2 h-5 w-5 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search staff members..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="border-2 focus-visible:ring-yellow-500"
                            />
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Position</TableHead>
                                    <TableHead>Introduce</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredStaffMembers.map((staff) => (
                                    <React.Fragment key={staff.id}>
                                    <TableRow

                                        className="cursor-pointer hover:bg-gray-100"
                                        onClick={() => toggleStaffDetails(staff.id)}
                                    >
                                        <TableCell>{staff.name}</TableCell>
                                        <TableCell>{staff.position}</TableCell>
                                        <TableCell>{staff.introduce.substring(0, 50)}...</TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleEdit(staff.id)
                                                }}
                                                variant="outline"
                                                className="mr-2"
                                            >
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleDelete(staff.id)
                                                }}
                                                variant="outline"
                                                className="text-red-500"
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                            {selectedStaff === staff.id ? (
                                                <ChevronUp className="ml-2 h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="ml-2 h-4 w-4" />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                        {selectedStaff === staff.id && (
                                            <TableRow>
                                                <TableCell colSpan={4}>
                                                    <div className="bg-gray-50 p-4 rounded-md">
                                                        <h3 className="font-bold mb-2">Detailed Information</h3>
                                                        <p>
                                                            <strong>Name:</strong> {staff.name}
                                                        </p>
                                                        <p>
                                                            <strong>Position:</strong> {staff.position}
                                                        </p>
                                                        <p>
                                                            <strong>Introduction:</strong> {staff.introduce}
                                                        </p>
                                                        <h4 className="font-semibold mt-2">Services:</h4>
                                                        <ul className="list-disc pl-5">
                                                            {staff.services.map((service) => (
                                                                <li key={service.id}>
                                                                    Service ID: {service.serviceId}, Price: {service.price} {service.currency}
                                                                    <p className="text-sm text-gray-600">{service.staffExplain}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <h4 className="font-semibold mt-2">Week Timetables:</h4>
                                                        <ul className="list-disc pl-5">
                                                            {staff.weekTimetables.map((timetable) => (
                                                                <li key={timetable.id}>
                                                                    Day: {timetable.dayOfTheWeek}, Open: {timetable.openTime}, Close:{" "}
                                                                    {timetable.closeTime}
                                                                    <p className="text-sm text-gray-600">
                                                                        Break: {timetable.startBreaktime} - {timetable.endBreaktime}
                                                                    </p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {staff.exceptionTimetables.length > 0 && (
                                                            <>
                                                                <h4 className="font-semibold mt-2">Exception Timetables:</h4>
                                                                <ul className="list-disc pl-5">
                                                                    {staff.exceptionTimetables.map((timetable) => (
                                                                        <li key={timetable.id}>
                                                                            Date: {timetable.date},{" "}
                                                                            {timetable.dayClose
                                                                                ? "Closed"
                                                                                : `Open: ${timetable.startTime}, Close: ${timetable.endTime}`}
                                                                            <p className="text-sm text-gray-600">Reason: {timetable.reason}</p>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}

