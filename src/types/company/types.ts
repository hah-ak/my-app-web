export type Company = {
    id:number
    name:string
    simpleExp:string
    taxId:number
    companyId:number
}
export interface CompanyService {
    id:number
    content:string;
    img:string;
}
export interface BusinessWeekTimeTable {
    id:number
    dayOfTheWeek:number
    openTime:string
    closeTime:string
    startBreaktime:string | null
    endBreaktime:string | null
}

export interface ExceptionTimeTable {
    id:number
    date: string
    endTime: string
    startTime: string
    dayClose: boolean
    reason: string
}

export type MyCompany = {
    company:Company
    services:CompanyService[]
    businessWeekTimeTable:BusinessWeekTimeTable[]
    exceptionBusinessTimeTable:ExceptionTimeTable[]
}