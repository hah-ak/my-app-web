import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export const ServiceSelection = ({ onSelect }: { onSelect: (service: string) => void }) => {
    return (
        <div className="space-y-4">
            <Label htmlFor="service" className="text-lg font-semibold text-gray-900">
                서비스 선택
            </Label>
            <Select onValueChange={onSelect}>
                <SelectTrigger id="service" className="border-2 focus:ring-yellow-500">
                    <SelectValue placeholder="서비스를 선택해주세요"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="service1">헤어 커트</SelectItem>
                    <SelectItem value="service2">염색</SelectItem>
                    <SelectItem value="service3">파마</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

