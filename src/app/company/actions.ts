'use server'

import {apiAxios} from "@/lib/axios/api";
import * as querystring from "node:querystring";
import {Company, CompanyService, MyCompany} from "@/types/company/types";
import {ApiResult} from "@/types/types";
import {MyCompanyStaff, SubmitStaff} from "@/types/company/staff/types";

export const myCompanyInfo = async () => {
    const {data} = await apiAxios.get<ApiResult<Company>>("/user/company/my/info")
    return data
}
export const myCompanyDetailInfo = async () => {
    const { data } = await apiAxios.get<ApiResult<MyCompany>>("/user/company/my/detail")
    return data
}
export const myCompanyStaffs = async () => {
    const {data} = await apiAxios.get<ApiResult<MyCompanyStaff[]>>("/user/company/my/staffs")
    return data
}
export const myCompanyServices = async () => {
    const {data} = await apiAxios.get<ApiResult<CompanyService[]>>(`/user/company/my/company-service`)
    return data
}


export const createStaff = async (param:SubmitStaff) => {
    const { data } = await apiAxios.post<ApiResult<MyCompany>>("/user/company/staff",param)
    return data;
}
export const updateStaff = async (param:SubmitStaff) => {
    const { data } = await apiAxios.patch<ApiResult<MyCompany>>("/user/company/staff",param)
    return data;
}

export const createCompany = async (param : MyCompany) => {
    const { data } = await apiAxios.post<ApiResult<MyCompany>>("/user/company",param)
    return data;
}
export const updateCompany = async (param : MyCompany) => {
    const { data } = await apiAxios.patch<ApiResult<MyCompany>>("/user/company",param)
    return data;
}

export const companyInfo = async (param:{companyId:number}) => {
    const {data} = await apiAxios.get<Company>(`/user/company?${querystring.encode(param)}`)
    return data
}

