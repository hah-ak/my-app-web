import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react" // Added import for React

export const PersonalRequest = ({ onSubmit }: { onSubmit: (name: string, email: string, phone: string) => void })=> {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        onSubmit(formData.get("name") as string, formData.get("email") as string, formData.get("phone") as string)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">이름</Label>
                <Input id="name" name="name" placeholder="이름을 입력해주세요" required />
            </div>
            <div>
                <Label htmlFor="email">이메일</Label>
                <Input id="email" name="email" type="email" placeholder="이메일을 입력해주세요" required />
            </div>
            <div>
                <Label htmlFor="phone">전화번호</Label>
                <Input id="phone" name="phone" type="tel" placeholder="전화번호를 입력해주세요" required />
            </div>
        </form>
    )
}

