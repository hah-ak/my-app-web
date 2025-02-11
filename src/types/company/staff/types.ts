import {WeekTimeTable, Company, ExceptionTimeTable} from "@/types/company/types";

export type Staff = {
    id: number
    company: Company
    name: string
    position: string
    introduce: string
    services: StaffService[]
    weekTimetables: WeekTimeTable[]
    exceptionTimetables: ExceptionTimeTable[]
}

export type StaffService = {
    id: number
    serviceId: number
    price: number
    currency: string
    staffExplain: string
}


export type MyCompanyStaff = Omit<Staff, 'company'>

export type SubmitStaff = {
    id: number,
    name: string,
    position: string,
    introduce: string
}