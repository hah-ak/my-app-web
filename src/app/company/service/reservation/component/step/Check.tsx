import {ServiceReservationType} from "@/app/company/service/reservation/component/ServiceReservation";

export const Check = (
    {reservationData}:
    {reservationData:ServiceReservationType}) =>
{
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold">예약 정보 확인</h3>
        <p>담당 직원: {reservationData.staff}</p>
        <p>서비스: {reservationData.service}</p>
        <p>날짜: {reservationData.date.toLocaleDateString()}</p>
        <p>시간: {reservationData.time}</p>
        <p>이름: {reservationData.name}</p>
        <p>이메일: {reservationData.email}</p>
        <p>전화번호: {reservationData.phone}</p>
    </div>
}