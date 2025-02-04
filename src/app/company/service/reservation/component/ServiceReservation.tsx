"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { StaffSelection } from "@/app/company/service/reservation/component/step/StaffSelection"
import { ServiceSelection } from "@/app/company/service/reservation/component/step/ServiceSelection"
import { DateTimeSelection } from "@/app/company/service/reservation/component/step/DateTimeSelection"
import { PersonalRequest } from "@/app/company/service/reservation/component/step/PersonalRequest"
import { useToast } from "@/hooks/use-toast"
import { submitReservation } from "@/app/company/service/reservation/actions"
import { Check } from "@/app/company/service/reservation/component/step/Check"

const steps = ["담당 직원 선택", "서비스 선택", "날짜 및 시간 선택", "개인 정보 입력", "예약 확인"]

export type ServiceReservationType = {
    staff: string
    service: string
    date: Date
    time: string
    name: string
    email: string
    phone: string
}

export const ServiceReservation = ({ services }: { services: any }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [reservationData, setReservationData] = useState<ServiceReservationType>({
        staff: "",
        service: "",
        date: new Date(),
        time: "",
        name: "",
        email: "",
        phone: "",
    })
    const { toast } = useToast()

    const updateReservationData = (data: Partial<ServiceReservationType>) => {
        setReservationData((prev) => ({ ...prev, ...data }))
    }

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

    const handleSubmit = async () => {
        try {
            const result = await submitReservation(reservationData)
            if (result.success) {
                toast({
                    title: "예약 완료",
                    description: result.message,
                })
                // Reset to initial state after successful reservation
                setCurrentStep(0)
                setReservationData({
                    staff: "",
                    service: "",
                    date: new Date(),
                    time: "",
                    name: "",
                    email: "",
                    phone: "",
                })
            }
        } catch (e) {
            toast({
                title: "예약 실패",
                description: "예약 중 오류가 발생했습니다. 다시 시도해 주세요.",
                variant: "destructive",
            })
        }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <StaffSelection onSelect={(staffId) => updateReservationData({ staff: staffId })} />
            case 1:
                return <ServiceSelection onSelect={(service) => updateReservationData({ service })} />
            case 2:
                return <DateTimeSelection onSelect={(date, time) => updateReservationData({ date, time })} />
            case 3:
                return <PersonalRequest onSubmit={(name, email, phone) => updateReservationData({ name, email, phone })} />
            case 4:
                return <Check reservationData={reservationData} />
            default:
                return null
        }
    }

    return (

        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">서비스 예약</h1>
            <Card className="border-2">
                <CardHeader className="border-b bg-yellow-50">
                    <CardTitle className="text-2xl font-bold text-gray-900">{steps[currentStep]}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <Progress
                        value={((currentStep + 1) / steps.length) * 100}
                        className="mb-4 bg-yellow-200"
                        // indicatorColor="bg-yellow-500"
                    />
                    {renderStep()}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                    <Button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        variant="outline"
                        className="border-2 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                        이전
                    </Button>
                    <Button
                        onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        {currentStep === steps.length - 1 ? "예약 완료" : "다음"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ServiceReservation

