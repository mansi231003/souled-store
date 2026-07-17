import { useState } from "react"
import "./Footer.css"

export default function Footer() {
    const [hide, setHide] = useState(false);
    const [showWhoWeAre, setShowWhoWeAre] = useState(false);

    return (
        <>
            <div className="footer-section">
                <div className="heading w-full bg-red-600 h-[64px] text-white text-[30px] flex justify-center items-center">HOMEGROWN INDIAN BRAND</div>
                <div className="heading w-full h-[80px] text-[30px] flex justify-center items-center">OVER<span className="font-bold pl-[10px] pr-[10px]">6 Million</span>Happy Customers</div>
                <div onClick={() => setHide(!hide)} className="know-more z-[999999] bg-[#e6e7e8] hidden justify-between items-center w-full font-[700] text-[#58595b] p-[10px] cursor-pointer">Know more about The Souled Store<i className={`${hide ? "rotate-180 fa-solid fa-angle-up" : "fa-solid fa-angle-up"}`}></i></div>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out bg-[#e6e7e8] w-full flex flex-col items-center justify-center gap-4 ${hide ? "max-h-0 opacity-0" : "max-h-[3000px] opacity-100"
                    }`}>
                    <div className="features-section w-full justify-center flex flex-col items-center">
                        <div className="features-wrap w-[100%] pt-8 flex flex-col items-center pl-[60px]">
                            <div className="features grid grid-cols-4 pb-[17px] gap-[28px] w-[95%]">

                                <div className="gap-3 flex flex-col pb-3 cursor-pointer">
                                    <div className="text-red-500 font-[700] text-[18.5px]">NEED HELP</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Contact Us</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Track Order</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Returns & Refunds</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">FAQs</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">My Account</div>
                                </div>

                                <div className="gap-3 flex flex-col pb-3 cursor-pointer">
                                    <div className="text-red-500 font-[700] text-[18.5px]">COMPANY</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">About Us</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Investor Relation</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Careers</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Gift Vouchers</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Community Initiatives</div>
                                </div>

                                <div className="gap-3 flex flex-col cursor-pointer">
                                    <div className="text-red-500 font-[700] text-[18.5px]">MORE INFO</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">T&C</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Privacy Policy</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Sitemap</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Get Notified</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Blogs</div>
                                </div>

                                <div className="gap-3 flex flex-col cursor-pointer">
                                    <div className="text-red-500 font-[700] text-[18.5px]">STORE NEAR ME</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Mumbai</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Pune</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Bangalore</div>
                                    <div className="font-[700] text-[#58595b] text-[14.5px] hover:text-red-500 transition-colors">Hubbali</div>
                                    <div className="font-[700] text-blue-700 text-[14.5px]">View More</div>
                                </div>

                            </div>
                            <div className="text-[#58595b] w-[95%] text-[15px] flex gap-2 pb-[10px]"><i className="border border-[#58595b] rounded-[50%] p-1 w-[25px] fa-solid fa-indian-rupee-sign"></i>COD Available</div>
                            <div className="text-[#58595b] w-[95%] text-[15px] flex gap-2"><i className="border border-[#58595b] rounded-[50%] p-1 w-[25px] text-[14px] fa-solid fa-arrows-rotate"></i>30 Days Easy Returns & Exchanges</div>
                        </div>
                        <div className="download-apps w-full flex flex-col justify-center items-center gap-2 p-[20px]">
                            <div className="text-[#58595b] font-[800] text-[14px] gap-1 flex items-center"><i className="fa fa-mobile-screen text-[12.4px]"></i>EXPERIENCE THE SOULED STORE APP</div>
                            <div className="flex gap-4">
                                <img className="w-[125px]" src="/play-store.png" alt="" />
                                <img className="w-[125px]" src="/app-store.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="social-icons w-[86%] flex justify-end gap-2 p-[12px]">
                        <div className="flex justify-center items-center text-gray-600">Follow Us:</div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-[#6081c0] text-white"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-[#c03694] text-white"><i className="fa-brands fa-instagram"></i></div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-[#f9b927] text-white"><i className="fa-brands fa-snapchat"></i></div>
                        <div className="border rounded-[50%] w-[35px] h-[35px] flex justify-center items-center p-2 bg-black text-white"><i className="fa-brands fa-x-twitter"></i></div>

                    </div>
                    <div className="border border-gray-400 w-[86%] justify-between p-5">
                        <div onClick={() => setShowWhoWeAre(!showWhoWeAre)} className="flex justify-between text-red-600 font-[700] cursor-pointer">
                            WHO WE ARE
                            <i className={`fa-solid ${showWhoWeAre ? "fa-minus" : "fa-plus"} flex items-center`}></i>
                        </div>
                        <div className={`overflow-hidden transition-all duration-700 ease-in-out text-[#58595b] text-[15.5px] w-[98%] text-justify ${showWhoWeAre? "max-h-[2000px] opacity-100 pt-4": "max-h-0 opacity-0 pt-0"}`}>
                                The Souled Store was born out of the simple idea of loving what you do - following your soul - and, of course, our love for puns (sold/ souled). Our philosophy is just as simple- life is short, don't spend it doing something you don't like. From our products to our website, from our office culture to the way we interact with our customers, this philosophy's a part of everything we do.
                            In June 2013, The Souled Store was founded by four people, with just a cupboard full of t-shirts (probably as big as yours). Although we've grown from cupboards to warehouses, a lot of things have remained the same. Our core values are now shared not by just four people, but by a team that's now grown to over a hundred people.
                            The Neighbourhood Store Vibe
                            We aspire to be your favourite, friendly neighbourhood store. We curate all your favourite designs and make them available on various products ranging from t-shirts, bags, and badges to phone covers, stickers, notebooks, and more. We're always enthusiastic and kicked about interacting with everyone- whether it's handling queries over email and social media or interacting with our fans at various events, workshops, and stalls. Why? Because we care. A recent study by our in-house, prize-winning, and totally unbiased researchers showed that visiting www.thesouledstore.com causes excessive happiness, and could increase your lifespan by up to 7.5%.
                        </div>
                    </div>
                    <div className="payments-app-container flex w-[86%] items-center h-[25px] p-7">
                        <div className="wrapper flex items-center w-[70%]">
                            <div className="app w-[34%] text-[14px] text-[#58595b]">100% Secure Payment:</div>
                            <div className="app w-[95%] "><img className="w-full" src="/payments-icon.png" alt="" /></div>
                        </div>
                        <div className="wrapper flex items-center w-[60%] pl-2 gap-4 border border-l-gray-400">
                            <div className="text-[14px] text-[#58595b]">Shipping Partners:</div>
                            <div className="app w-[50%] flex justify-between">
                                <div className="app w-[23%]"><img className="w-full" src="/dtdc.png" alt="" /></div>
                                <div className="app w-[23%]"><img className="w-full" src="/delivery.png" alt="" /></div>
                                <div className="app w-[23%]"><img className="w-full" src="/ECOM-Express.png" alt="" /></div>
                                <div className="app w-[23%]"><img className="w-full" src="/XPRESS.png" alt="" /></div>
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