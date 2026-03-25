import "./Footer.css"

export default function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="heading w-full bg-red-600 h-[64px] text-white text-[30px] flex justify-center items-center">HOMEGROWN INDIAN BRAND</div>
                <div className="heading w-full h-[80px] text-[30px] flex justify-center items-center">OVER<span className="font-bold pl-[10px] pr-[10px]">6 Million</span>Happy Customers</div>
                <div className="bg-[#e6e7e8] w-full flex flex-col items-center justify-center gap-4">
                    <div className="know-more hidden justify-between items-center w-full font-[700] text-[#58595b] p-[10px] pb-0">Know more about The Souled Store<i class="fa-solid fa-angle-up"></i></div>
                    <div className="features-section w-full justify-center flex flex-col items-center">
                        <div className="features-wrap w-[100%] pt-8 flex flex-col items-center pl-[60px]">
                            <div className="features grid grid-cols-4 pb-[17px] gap-[28px] w-[95%]">

                                <div className="gap-3 flex flex-col pb-3">
                                    <div className="text-red-500 font-[700] text-[18px]">NEED HELP</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Contact Us</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Track Order</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Returns & Refunds</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">FAQs</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">My Account</div>
                                </div>

                                <div className="gap-3 flex flex-col pb-3">
                                    <div className="text-red-500 font-[700] text-[18px]">COMPANY</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">About Us</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Investor Relation</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Careers</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Gift Vouchers</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Community Initiatives</div>
                                </div>

                                <div className="gap-3 flex flex-col">
                                    <div className="text-red-500 font-[700] text-[18px]">MORE INFO</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">T&C</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Privacy Policy</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Sitemap</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Get Notified</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Blogs</div>
                                </div>

                                <div className="gap-3 flex flex-col">
                                    <div className="text-red-500 font-[700] text-[18px]">STORE NEAR ME</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Mumbai</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Pune</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Bangalore</div>
                                    <div className="font-[700] text-[#58595b] text-[14px]">Hubbali</div>
                                    <div className="font-[700] text-blue-700 text-[14px]">View More</div>
                                </div>

                            </div>
                            <div className="text-[#58595b] w-[95%] text-[15px] flex gap-2 pb-[10px]"><i className="border border-[#58595b] rounded-[50%] p-1 w-[25px] fa-solid fa-indian-rupee-sign"></i>COD Available</div>
                            <div className="text-[#58595b] w-[95%] text-[15px] flex gap-2"><i className="border border-[#58595b] rounded-[50%] p-1 w-[25px] text-[14px] fa-solid fa-arrows-rotate"></i>30 Days Easy Returns & Exchanges</div>
                        </div>
                        <div className="download-apps w-full flex flex-col justify-center items-center gap-2 p-[20px]">
                            <div className="text-[#58595b] font-[800] text-[14px] gap-1 flex items-center"><i className="fa fa-mobile-screen text-[12.4px]"></i>EXPERIENCE THE SOULED STORE APP</div>
                            <div className="flex gap-4">
                                <img className="w-[125px]" src="play-store.png" />
                                <img className="w-[125px]" src="app-store.png" />
                            </div>
                        </div>

                    </div>
                    <div className="social-icons w-[86%] flex justify-end gap-2 p-[12px]">
                        <div className="flex justify-center items-center text-gray-600">Follow Us:</div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-[#6081c0] text-white"><i class="fa-brands fa-facebook-f"></i></div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-[#c03694] text-white"><i class="fa-brands fa-instagram"></i></div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-[#f9b927] text-white"><i class="fa-brands fa-snapchat"></i></div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-black text-white"><i class="fa-brands fa-x-twitter"></i></div>

                    </div>
                    <div className="flex border border-gray-400 w-[86%] justify-between p-5 text-red-600 font-[700]">
                        WHO WE ARE
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className="payments-app-container flex w-[86%] items-center h-[25px] p-7">
                        <div className="wrapper flex items-center w-[70%]">
                            <div className="app w-[34%] text-[14px] text-[#58595b]">100% Secure Payment:</div>
                            <div className="app w-[95%] "><img className="w-full" src="payments-icon.png" /></div>
                        </div>
                        <div className="wrapper flex items-center w-[60%] pl-2 gap-4 border border-l-gray-400">
                            <div className="text-[14px] text-[#58595b]">Shipping Partners:</div>
                            <div className="app w-[50%] flex justify-between">
                            <div className="app w-[23%]"><img className="w-full" src="dtdc.png" /></div>
                            <div className="app w-[23%]"><img className="w-full" src="delivery.png" /></div>
                            <div className="app w-[23%]"><img className="w-full" src="ECOM-Express.png" /></div>
                            <div className="app w-[23%]"><img className="w-full" src="XPRESS.png" /></div>
                            </div>
                        </div>
                    </div>
                        <div className="text-[#58595b] p-5">
                            <i className="fa-regular fa-copyright"></i>
                            <span className="font-bold text-[15px]">The Souled Store 2026-27</span>
                        </div>

                </div>

            </div>
        </>
    )
}