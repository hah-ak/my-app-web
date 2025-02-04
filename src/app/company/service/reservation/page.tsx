import {getServices} from "@/app/company/service/reservation/actions";
import {ServiceReservation} from "@/app/company/service/reservation/component/ServiceReservation";

const Page = async () => {
    const services = await getServices();
    return (
        <ServiceReservation services={services} />
    )
}

export default Page