const Page = () => {
    return (
        <>
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Dashboard</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button
                            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#111418] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                        >
                            <div className="text-[#111418]" data-icon="MagnifyingGlass" data-size="24px"
                                 data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                     viewBox="0 0 256 256">
                                    <path
                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">New
                    services</h2>
                <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                            data-icon="Plus" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Add a new
                                service</p>
                            <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">2 days ago</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <div className="text-[#111418] flex size-7 items-center justify-center" data-icon="ArrowRight"
                             data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                            data-icon="Plus" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Add a new
                                service</p>
                            <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">3 days ago</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <div className="text-[#111418] flex size-7 items-center justify-center" data-icon="ArrowRight"
                             data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your
                    services</h2>
                <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">Company
                        incorporation in Delaware</p>
                    <div className="shrink-0">
                        <div className="flex size-7 items-center justify-center">
                            <div className="size-3 rounded-full bg-[#078838]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">Registered agent
                        in Delaware</p>
                    <div className="shrink-0">
                        <div className="flex size-7 items-center justify-center">
                            <div className="size-3 rounded-full bg-[#078838]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">EIN number</p>
                    <div className="shrink-0">
                        <div className="flex size-7 items-center justify-center">
                            <div className="size-3 rounded-full bg-[#078838]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                    <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">Business
                        license</p>
                    <div className="shrink-0">
                        <div className="flex size-7 items-center justify-center">
                            <div className="size-3 rounded-full bg-[#078838]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex px-4 py-3">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1980e6] text-white text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">See all your services</span>
                    </button>
                </div>
                <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
                    <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]" href="#">
                        <div className="text-[#637588] flex h-8 items-center justify-center" data-icon="House"
                             data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
                    </a>
                    <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#111418]"
                       href="#">
                        <div className="text-[#111418] flex h-8 items-center justify-center" data-icon="Briefcase"
                             data-size="24px" data-weight="fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-[#111418] text-xs font-medium leading-normal tracking-[0.015em]">Services</p>
                    </a>
                    <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]" href="#">
                        <div className="text-[#637588] flex h-8 items-center justify-center" data-icon="Person"
                             data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                 viewBox="0 0 256 256">
                                <path
                                    d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
                    </a>
                </div>
                <div className="h-5 bg-white"></div>
            </div>
        </>
    )
}

export default Page