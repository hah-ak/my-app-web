import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

type ServiceType= {
    serviceName: string
}

type ContextType = {
    service : ServiceType
    setService: Dispatch<SetStateAction<ServiceType>>
}

export const ServiceContext = createContext<ContextType>({
    service: {
        serviceName:""
    },
    setService : () => {}
})

export const ServiceProvider = (
    {
        children,
        init,
    }: {
        children: ReactNode;
        init: ServiceType;
    }
) => {
    const [service, setService] = useState(init)
    return (
        <ServiceContext.Provider value={{service, setService}}>
            {children}
        </ServiceContext.Provider>
    )
}