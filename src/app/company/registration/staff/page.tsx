"use client"

import React, {useEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Users} from "lucide-react"
import Layout from "../_components/Layout"
import {createStaff, myCompanyStaffs} from "@/app/company/actions";
import {MyCompanyStaff, SubmitStaff} from "@/types/company/staff/types";

function StaffForm({ onSubmit }: { onSubmit: (staff: SubmitStaff) => void }) {
    const [staff, setStaff] = useState<SubmitStaff>({
        id: 0,
        name: "",
        position: "",
        introduce: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStaff((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ ...staff })
        // setStaff({ id: "", companyId: "", name: "", rank: "", introduce: "" })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-2">
                <CardHeader>
                    <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                        <Users className="mr-2 h-5 w-5 text-yellow-500" />
                        Register New Staff
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

                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                        Register Staff
                    </Button>
                </CardContent>
            </Card>
        </form>
    )
}

function StaffList({ staffMembers }: { staffMembers: MyCompanyStaff[] }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {staffMembers.map((staff) => (
                <AccordionItem key={staff.id} value={`${staff.id}`}>
                    <AccordionTrigger className="hover:bg-yellow-50">
                        <div className="flex justify-between items-center w-full">
                            <span>{staff.name}</span>
                            <span className="text-sm text-gray-500">{staff.position}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="p-4 bg-gray-50">
                            <p className="text-sm text-gray-700">{staff.introduce}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default function StaffPage() {
    const [staffMembers, setStaffMembers] = useState<MyCompanyStaff[]>([])

    useEffect(() => {
        myCompanyStaffs()
            .then(({status, data}) => {
                if (status === 'success') {
                    setStaffMembers(data)
                }
            })
    }, []);

    const handleAddStaff = (newStaff: SubmitStaff) => {
        const convertNewStaff = {
            ...newStaff,
            services : []
        }
        createStaff(newStaff)
            .then(({status}) => {
                if (status === 'success') {
                    setStaffMembers((prev) => [...prev, convertNewStaff])
                }
            })
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Staff Management</h1>

                <StaffForm onSubmit={handleAddStaff} />

                <Card className="mt-8 border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center text-xl font-medium text-gray-900">
                            <Users className="mr-2 h-5 w-5 text-yellow-500" />
                            Registered Staff Members
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {staffMembers.length > 0 ? (
                            <StaffList staffMembers={staffMembers} />
                        ) : (
                            <p className="text-center text-gray-500">No staff members registered yet.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}

