'use server'

import {apiAxios} from "@/lib/axios/api";
import {ServiceReservationType} from "@/app/company/service/reservation/component/ServiceReservation";

export const submitReservation = async (param:ServiceReservationType) => {
    const {data} = await apiAxios.post("",param)
    return data
}

export const getServices = async () => {
    const { data } = await apiAxios.post("/api/company/staff/list");
    return data
}