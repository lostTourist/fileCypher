function MainHeader({ backgroundImage }) {
    return (

        <div className="bg-slate-200 dark:bg-slate-800 min-h-screen relative flex-items-center justify-center px-8">


            {/*LOGO*/}
           
            <div className="pt-8 dark:text-slate-200 text-slate-900">
                <h1 className="text-left font-bold text-3xl pb-2 relative">
                    <span className="font-light">file</span>Cypher
                </h1>
                <p>Encrypted Web3 file sharing.</p>
            </div>
           
            {/*begin mint form*/}
            {/*BACKGROUND*/}
            <div className="grid place-items-center mt-10">
                <div className="flex items-center justify-self-center relative">
                    <div className="filter blur-2xl dark:opacity-30 opacity-60 mix-blend-multiply absolute top-48 left-20 w-96 h-96 dark:mix-blend-screen bg-green-300 rounded-full animate-blob animation-delay-2000 overflow-hidden"></div>
                    <div className="filter blur-2xl dark:opacity-30 opacity-60 mix-blend-multiply absolute top-10 left-40 w-96 h-96 dark:mix-blend-screen bg-purple-300 rounded-full animate-blob2 overflow-hidden"></div>
                    <div className="filter blur-2xl dark:opacity-30 opacity-60 mix-blend-multiply absolute top-10 -left-2 w-96 h-96 dark:mix-blend-screen bg-red-300 rounded-full animate-blob3  animation-delay-4000 overflow-hidden"></div>

                    <div className="flex w-full max-w-lg">
                        <div className="shadow-2xl relative text-center m-3 pb-4 rounded-3xl dark:bg-slate-600/80 bg-slate-100/60 ">
                        <div className="relative text-center rounded-t-3xl bg-green-300/70 dark:bg-green-800/70 flex-full flex m-0 w-full ">
                            <div className="m-6 font-strong dark:text-slate-200">
                                <h1 className="font-bold text-xl">Encrypt & Send</h1>
                                <p className="font-light" >Send a file to an Etherium address. The file will be encrypted and only viewable by the receiver through their wallet.</p></div>
                            </div>
                         
                            <div className="p-5 flex-items-center justify-between space-x-8">
                                <div>
                                    <label htmlFor="toWallet" className="block text-sm font-medium text-gray-700">
                                        Receiving Etherium Wallet
                                    </label>
                                    <div className="relative mt-1">

                                        <input
                                            type="text"
                                            name="toWallet"
                                            id="defaultInput"
                                            className="hover:scale-105 px-6 py-3 block w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="receiver address"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-5 flex-items-center justify-between space-x-8">
                                <div>
                                    <label htmlFor="toMsg" className="block text-sm font-medium text-gray-700">
                                        Message (optional)
                                    </label>
                                    <div className="relative mt-1 ">

                                        <input
                                            type="text"
                                            name="toMsg"
                                            id="defaultInput"
                                            className="hover:scale-105 px-6 py-3 block w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="this message will be visable on chain."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex-items-center justify-between space-x-8">
                                <div>
                                    <label htmlFor="usrFile" className="block text-sm font-medium text-gray-700">
                                        Upload file (1GB max)
                                    </label>
                                    <div className="relative mt-1 ">

                                        <input
                                            type="file"
                                            name="usrFile"
                                            id="defaultInput"
                                            className="hover:scale-110 px-6 py-3 block w-full sm:text-sm dark:text-slate-200"
                                            placeholder="only 1 file per transaction"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="p-5 mb-10 flex-items-center justify-between space-x-8">
                                <div
                                    className="absolute dark:bg-gradient-to-br hover:drop-shadow-xl hover:border-2 hover:scale-110 hover:border-slate-500 from-blue-900 to-purple-900 bg-gradient-to-br from-blue-500 to-purple-500 flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 rounded right-1/2 translate-x-1/2"
                                    
                                >
                                    <button
                                        onClick={() => {
                                          
                                        }}
                                    >
                                        <div className="p-4">
                                            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-slate-200">SEND FILE</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/*begin polygon*/}
            <div className="flex absolute bottom-0 right-0 p-8 pb-4 dark:text-slate-200">
                <p className="flex-grow-0 flex-shrink-0 w-16 h-[52px] text-base text-left text-black">
                    built on{" "}
                </p>
                <svg
                    width={134}
                    height={48}
                    viewBox="0 0 134 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-[133px] h-[47px] relative"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M39.1578 24.3337V31.3209C39.1553 31.7567 39.04 32.1843 38.8231 32.562C38.6063 32.9397 38.2954 33.2545 37.9207 33.4757L31.8805 36.9621C31.5063 37.1856 31.0789 37.3035 30.6434 37.3035C30.2079 37.3035 29.7804 37.1856 29.4063 36.9621L23.366 33.4757C22.9914 33.2545 22.6804 32.9397 22.4636 32.562C22.2468 32.1843 22.1315 31.7567 22.129 31.3209V29.3599L25.2216 27.561V30.9699L30.6337 34.1173L36.0458 30.9699V24.6896L30.6337 21.5422L17.9539 28.9023C17.5763 29.1155 17.1503 29.2275 16.7168 29.2275C16.2835 29.2275 15.8574 29.1155 15.4798 28.9023L9.4395 25.4014C9.07063 25.1768 8.76569 24.8608 8.55405 24.4838C8.34247 24.1068 8.23138 23.6816 8.23145 23.249V16.2618C8.23395 15.826 8.34928 15.3984 8.56613 15.0207C8.78291 14.643 9.09389 14.3282 9.46847 14.107L15.5088 10.6206C15.8837 10.3994 16.3108 10.2827 16.7458 10.2827C17.1809 10.2827 17.608 10.3994 17.9829 10.6206L24.0232 14.107C24.3978 14.3282 24.7088 14.643 24.9256 15.0207C25.1424 15.3984 25.2578 15.826 25.2603 16.2618V18.2228L22.1483 20.0096V16.6201L16.7362 13.4727L11.324 16.6201V22.8931L16.7362 26.0406L29.416 18.6805C29.7936 18.4672 30.2196 18.3553 30.6531 18.3553C31.0864 18.3553 31.5125 18.4672 31.8901 18.6805L37.9304 22.1813C38.3029 22.4036 38.6117 22.7185 38.8267 23.0957C39.0418 23.4728 39.1559 23.8993 39.1578 24.3337Z"
                        fill="#7B3FE4"
                    />
                    <path
                        d="M49.9212 33.8609V28.4158C50.5107 29.1591 51.5811 29.5755 52.8205 29.5755C55.9856 29.5755 58.1239 27.3239 58.1239 23.8908C58.1239 20.4577 56.1596 18.2061 53.0839 18.2061C51.6656 18.2061 50.5735 18.7314 49.9187 19.5837V18.3731H46.8889V33.8536L49.9212 33.8609ZM52.446 26.951C50.8079 26.951 49.7399 25.726 49.7399 23.8908C49.7399 22.0556 50.8079 20.8087 52.446 20.8087C54.0382 20.8087 55.1303 22.0193 55.1303 23.8908C55.1303 25.7623 54.0455 26.951 52.446 26.951Z"
                        fill="#0A0B0D"
                    />
                    <path
                        d="M65.0108 29.5755C68.3936 29.5755 70.8094 27.169 70.8094 23.8908C70.8094 20.6126 68.3936 18.2061 65.0108 18.2061C61.6281 18.2061 59.212 20.6102 59.212 23.8908C59.212 27.1713 61.6281 29.5755 65.0108 29.5755ZM65.0108 26.951C63.375 26.951 62.2612 25.7042 62.2612 23.8908C62.2612 22.0774 63.3774 20.8087 65.0108 20.8087C66.644 20.8087 67.7601 22.0532 67.7601 23.8908C67.7601 25.7284 66.6485 26.951 65.0108 26.951Z"
                        fill="#0A0B0D"
                    />
                    <path
                        d="M75.6823 29.4016V13.5918H72.6503V29.4016H75.6823Z"
                        fill="#0A0B0D"
                    />
                    <path
                        d="M84.7983 18.3804L82.5077 25.4863L80.1953 18.3804H77.0907L81.082 29.3117L79.468 33.8609H82.3676L83.9257 29.3601L87.9196 18.3852L84.7983 18.3804Z"
                        fill="#0A0B0D"
                    />
                    <path
                        d="M96.4373 19.4747C95.8257 18.7096 94.7462 18.2061 93.4047 18.2061C90.1966 18.2061 88.2562 20.4577 88.2562 23.8908C88.2562 27.3239 90.1889 29.5755 93.4484 29.5755C94.736 29.5755 95.8912 29.0913 96.4592 28.285V29.7377C96.4592 30.7643 95.7826 31.4857 94.867 31.4857H89.8047V33.8705H95.3476C97.8335 33.8705 99.4912 32.3622 99.4912 30.0645V18.3803H96.4373V19.4747ZM93.929 26.951C92.3131 26.951 91.2452 25.7405 91.2452 23.8908C91.2452 22.0411 92.3131 20.8087 93.929 20.8087C95.5455 20.8087 96.6327 22.0193 96.6327 23.8908C96.6327 25.7623 95.5648 26.951 93.929 26.951Z"
                        fill="#0A0B0D"
                    />
                    <path
                        d="M107.138 29.5755C110.521 29.5755 112.936 27.169 112.936 23.8908C112.936 20.6126 110.521 18.2061 107.138 18.2061C103.756 18.2061 101.339 20.6102 101.339 23.8908C101.339 27.1713 103.756 29.5755 107.138 29.5755ZM107.138 26.951C105.5 26.951 104.388 25.7042 104.388 23.8908C104.388 22.0774 105.5 20.8087 107.138 20.8087C108.776 20.8087 109.888 22.0532 109.888 23.8908C109.888 25.7284 108.774 26.951 107.138 26.951Z"
                        fill="#0A0B0D"
                    />
                    <path
                        d="M117.655 29.4012V23.3654C117.655 21.9442 118.592 20.9177 119.924 20.9177C121.19 20.9177 122.04 21.8861 122.04 23.2128V29.4012H125.094V22.5349C125.094 19.9977 123.481 18.2061 120.987 18.2061C119.482 18.2061 118.262 18.8404 117.651 19.9008V18.3803H114.601V29.4012H117.655Z"
                        fill="#0A0B0D"
                    />
                </svg>
            </div>

            {/*End polygon */}
        </div>

    )
}

export default MainHeader
