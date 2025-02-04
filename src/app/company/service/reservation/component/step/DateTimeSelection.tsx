import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export const DateTimeSelection = ({ onSelect }: { onSelect: (date: Date, time: string) => void }) => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [time, setTime] = useState<string>("")

    const handleDateSelect = (newDate: Date | undefined) => {
        if (newDate) {
            setDate(newDate)
            onSelect(newDate, time)
        }
    }

    const handleTimeSelect = (newTime: string) => {
        setTime(newTime)
        if (date) {
            onSelect(date, newTime)
        }
    }

    return (
        <div className="space-y-4">
            <div>
                <Label>날짜 선택</Label>
                <Calendar mode="single" selected={date} onSelect={handleDateSelect} className="rounded-md border mx-auto" />
            </div>
            <div>
                <Label htmlFor="time">시간 선택</Label>
                <Select onValueChange={handleTimeSelect}>
                    <SelectTrigger id="time">
                        <SelectValue placeholder="시간을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
