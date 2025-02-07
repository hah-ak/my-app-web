import {Company, CompanyService} from "@/types/company/types";

export type Staff = {
    id : number
    company : Company
    name : string
    position : string
    introduce : string
    services : StaffService[]
}

export type StaffService = {
    id : number
    service : CompanyService
    price : number
    currency : string;
    staffExplain : string;
    staffServiceTimeTables : StaffServiceTimeTable[];
}
export type StaffServiceTimeTable = {
    id : number
    dayOfTheWeek : number
    startBreakTime : string;
    endBreakTime : string;
    exceptionOpenTime : string;
    exceptionCloseTime : string;
}

export type MyCompanyStaff = Omit<Staff, 'company'>

export type SubmitStaff = {
    id: number,
    name: string,
    position: string,
    introduce: string
}