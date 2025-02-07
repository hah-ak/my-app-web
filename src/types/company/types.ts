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
    startbreakTime:string
    endbreakTime:string
}

export interface ExceptionTimeTable {
    id:number
    date: string
    time: string
    reason: string
}

export type MyCompany = {
    company:Company
    services:CompanyService[]
    businessWeekTimeTable:BusinessWeekTimeTable[]
    exceptionDayOffTimeTable:ExceptionTimeTable[]
    exceptionBusinessTimeTable:ExceptionTimeTable[]
}