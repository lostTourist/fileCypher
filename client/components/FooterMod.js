function FooterMod() {
    return (
        <div className="w-full">
            <div className=" py-2 mt-5 m-x-3 min-h-[50px] w-full bg-slate-200 drop-shadow-2xl text-slate-900">
                <div className="px-8 mx-auto">

                    <div className="flex flex-col md:flex-row justify-between my-4">

                        {/* LOGO */}
                        <div className="flex mb-4">
                            <div className="">
                                <p className="text-left text-3xl font-bold">
                                    <span className="font-light">lens</span>Book
                                </p>
                                <p className="text-left text-xs">Decentralized NFT Books and Novels<br /><strong>Publisher & Marketplace</strong></p>
                                <div className="flex flex-row my-4">
                                    <div className="mr-2">
                                    <svg
    
                                        width={42}
                                        height={42}
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[42px] h-[42px] relative"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M27.006 19.95C27.006 21.231 26.061 22.281 24.864 22.281C23.688 22.281 22.722 21.231 22.722 19.95C22.722 18.669 23.667 17.619 24.864 17.619C26.061 17.619 27.006 18.669 27.006 19.95ZM17.199 17.619C16.002 17.619 15.057 18.669 15.057 19.95C15.057 21.231 16.023 22.281 17.199 22.281C18.396 22.281 19.341 21.231 19.341 19.95C19.362 18.669 18.396 17.619 17.199 17.619ZM39.375 4.326V42C34.0845 37.3247 35.7765 38.8723 29.631 33.159L30.744 37.044H6.93C4.557 37.044 2.625 35.112 2.625 32.718V4.326C2.625 1.932 4.557 0 6.93 0H35.07C37.443 0 39.375 1.932 39.375 4.326ZM33.39 24.234C33.39 17.472 30.366 11.991 30.366 11.991C27.342 9.723 24.465 9.786 24.465 9.786L24.171 10.122C27.741 11.214 29.4 12.789 29.4 12.789C24.4116 10.055 18.5519 10.0545 13.713 12.18C12.936 12.537 12.474 12.789 12.474 12.789C12.474 12.789 14.217 11.13 17.997 10.038L17.787 9.786C17.787 9.786 14.91 9.723 11.886 11.991C11.886 11.991 8.862 17.472 8.862 24.234C8.862 24.234 10.626 27.279 15.267 27.426C15.267 27.426 16.044 26.481 16.674 25.683C14.007 24.885 12.999 23.205 12.999 23.205C13.3079 23.4212 13.8173 23.7015 13.86 23.73C17.4046 25.715 22.4395 26.3653 26.964 24.465C27.699 24.192 28.518 23.793 29.379 23.226C29.379 23.226 28.329 24.948 25.578 25.725C26.208 26.523 26.964 27.426 26.964 27.426C31.605 27.279 33.39 24.234 33.39 24.234V24.234Z"
                                            fill="black"
                                        />
                                    </svg>
                                    </div>
                                    <div>
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[42px] h-[42px] relative"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M37.6827 12.4456C37.7094 12.8186 37.7094 13.1918 37.7094 13.5649C37.7094 24.9443 29.0482 38.056 13.2183 38.056C8.34135 38.056 3.81093 36.6435 0 34.1918C0.692918 34.2717 1.35909 34.2984 2.07867 34.2984C6.10271 34.2984 9.80708 32.9393 12.7652 30.6207C8.98095 30.5408 5.80962 28.0623 4.71696 24.6512C5.25 24.7311 5.78296 24.7844 6.34266 24.7844C7.11547 24.7844 7.88837 24.6777 8.60787 24.4913C4.66372 23.6917 1.70551 20.2273 1.70551 16.0433V15.9367C2.85141 16.5763 4.184 16.9761 5.59634 17.0293C3.2778 15.4836 1.75883 12.8453 1.75883 9.86051C1.75883 8.26156 2.18515 6.79582 2.93139 5.51663C7.16871 10.74 13.538 14.1511 20.6801 14.5242C20.5469 13.8846 20.4669 13.2185 20.4669 12.5522C20.4669 7.8085 24.3045 3.94434 29.0747 3.94434C31.5532 3.94434 33.7917 4.98367 35.3641 6.66261C37.3095 6.28953 39.1749 5.56995 40.8273 4.58393C40.1876 6.58271 38.8285 8.26164 37.043 9.32755C38.7753 9.1411 40.4542 8.6613 41.9998 7.99512C40.8274 9.70063 39.3616 11.2196 37.6827 12.4456V12.4456Z"
                                            fill="black"
                                        />
                                    </svg>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* PRIMARY NAV */}
                        <div className="flex text- ">
                            <div className="flex flex-col items-left">
                                <a href="#" className=" hover:text-slate-500">Market</a>
                                <a href="#" className=" hover:text-slate-500">Dashboard</a>
                                <a href="#" className=" hover:text-slate-500">Write</a>
                                <a href="#" className=" hover:text-slate-500">Publish</a>
                                <a href="#" className=" hover:text-slate-500">FAQ</a>
                            </div>

                            <div className="flex flex-col items-left ml-20 md:mr-40">
                                <a href="#" className=" hover:text-slate-500">Market</a>
                                <a href="#" className=" hover:text-slate-500">Dashboard</a>
                                <a href="#" className=" hover:text-slate-500">Write</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FooterMod