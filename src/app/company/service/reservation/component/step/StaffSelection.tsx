import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Staff {
    id: string
    name: string
    description: string
    imageUrl: string
}

const staffMembers: Staff[] = [
    {
        id: "staff1",
        name: "김철수",
        description: "10년 경력의 헤어 스타일리스트. 트렌디한 스타일 전문.",
        imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "staff2",
        name: "이영희",
        description: "컬러링 전문가. 자연스러운 염색 스타일을 선호하는 분들께 추천.",
        imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "staff3",
        name: "박지성",
        description: "펌 전문. 다양한 웨이브와 볼륨감 있는 스타일을 만들어냅니다.",
        imageUrl: "/placeholder.svg?height=100&width=100",
    },
]

export const StaffSelection = ({ onSelect }: { onSelect: (staff: string) => void })=> {
    const [selectedStaff, setSelectedStaff] = useState<string>("")

    const handleStaffSelect = (staffId: string) => {
        setSelectedStaff(staffId)
        onSelect(staffId)
    }

    return (
        <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-900">담당 직원 선택</Label>
            <RadioGroup value={selectedStaff} onValueChange={handleStaffSelect}>
                {staffMembers.map((staff) => (
                    <Card
                        key={staff.id}
                        className={`mb-4 cursor-pointer transition-all border-2 ${
                            selectedStaff === staff.id ? "ring-2 ring-yellow-500" : ""
                        }`}
                    >
                        <CardContent className="flex items-center p-4">
                            <RadioGroupItem value={staff.id} id={staff.id} className="sr-only"/>
                            <Label htmlFor={staff.id} className="flex items-center cursor-pointer w-full">
                                <Image
                                    src={staff.imageUrl || "/placeholder.svg"}
                                    alt={staff.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                                    <p className="text-sm text-gray-600">{staff.description}</p>
                                </div>
                            </Label>
                        </CardContent>
                    </Card>
                ))}
            </RadioGroup>
        </div>
    )
}

