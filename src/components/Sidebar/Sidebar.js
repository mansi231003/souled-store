import { useState,useEffect } from "react"
import "./Sidebar.css"
import { closeSidebar, openSidebar } from "../../Redux/CartSlice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductSlider from "../Product slider/ProductSlider";
import Categories from "../Categories/Categories";
import { menSidebarData, womenSidebarData, sneakersSidebarData } from "../../data/sidebarData";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const isOpen = useSelector(state => state.cart.isSidebarOpen);
    const dispatch = useDispatch();
    const type = useSelector(state => state.cart.sidebarType);

    const handleTabChange = (type) => {
        dispatch(openSidebar(type));
    };

    let data;

    if (type === "men") data = menSidebarData;
    else if (type === "women") data = womenSidebarData;
    else if (type === "sneakers") data = sneakersSidebarData;

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const [shopAllOpen, setShopAllOpen] = useState(true);
    const [moreOpen, setMoreOpen] = useState(false);
    
    useEffect(() => {
        setShopAllOpen(true);
        setMoreOpen(false);
    }, [type]);

    return (
        <>

            <div className={`w-full h-full fixed flex overflow-hidden top-0 z-[999] transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
                <div onClick={() => dispatch(closeSidebar())} className="fixed w-full top-0 h-full bg-[rgba(0,0,0,0.4)]"></div>
                <div className="w-[500px] bg-white z-[9999] overflow-y-auto sidebar">

                    <div className="flex justify-between pt-[17px] pl-[14px] pr-[15px] pb-[13px]">
                        <div className="img-container w-[80px] flex items-center"><img className="img" src="souledimg.webp" alt="" /></div>
                        <Link to="/registration"><div onClick={() => dispatch(closeSidebar())} className="border border-[#158b8d] rounded-[6px] w-[200px] flex justify-center items-center pt-[13px] pb-[13px] pl-[11px] pr-[11px]">Log In/Register</div></Link>
                        <div onClick={() => dispatch(closeSidebar())} className="flex justify-center items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </div>
                    </div>
                    <div className="bg-[#148c8d] text-white flex justify-center items-center pt-[9px] pb-[10px] pl-[31px] pr-[29px] rounded-br-[16px] rounded-bl-[16px] gap-3">
                        <span className="text-[16px]">Earn 10% Cashback on Every App Order</span>
                        <div className="w-[24px] h-[24px] rounded-[5px] border-[#18a7a8] border shadow-[0px_1px_2px_0px_#0b0b0b]"><img src="play-strore.png" alt="" /></div>
                        <div className="w-[24px] h-[24px] rounded-[5px] border-[#18a7a8] border shadow-[0px_1px_2px_0px_#0b0b0b]"><img src="appstore.png" alt="" /></div>

                    </div>
                    <div className="flex justify-between p-4 shadow-[0px_4px_4px_0px_#dce9ea]">
                        <div onClick={() => handleTabChange("men")} className={`${type === "men" ? "text-[#148c8d] font-[700]" : "text-[#8a8a8a]"} w-full text-[17px] flex justify-center items-center cursor-pointer`}>MEN</div>
                        <div onClick={() => handleTabChange("women")} className={`${type === "women" ? "text-[#148c8d] font-[700]" : "text-[#8a8a8a]"} w-full text-[17px] flex justify-center items-center cursor-pointer`}>WOMEN</div>
                        <div onClick={() => handleTabChange("sneakers")} className={`${type === "sneakers" ? "text-[#148c8d] font-[700]" : "text-[#8a8a8a]"} w-full text-[17px] flex justify-center items-center cursor-pointer`}>SNEAKERS</div>
                    </div>

                    <div className="p-[16px] pb-0 slider"><ProductSlider products={data.products} sidebar /></div>

                    <div onClick={() => setShopAllOpen(!shopAllOpen)} className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border-t border-dashed cursor-pointer">Shop All
                        <svg
                            className={`transition-transform duration-300 ${shopAllOpen ? "rotate-180" : ""
                                }`}
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${shopAllOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="flex justify-between p-5 pt-0">Categories</div>
                        <div onClick={() => dispatch(closeSidebar())} className="category-section"><Categories cards={data.categories} tag={type}/></div>
                    </div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Top Wear<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    {/* <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Bottom Wear<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div> */}
                    {/* <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">All Accessories</div> */}
                    <div className="slider p-[16px] pb-0"><ProductSlider products={data.products} sidebar /></div>
                    {/* <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Official Merch<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div> */}
                    <Link to="sneakersPage"><div onClick={() => dispatch(closeSidebar())} className="flex gap-[3px] text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Sneakers<span className="text-red-500 text-[10px]">New Drops</span></div></Link>
                    {/* <div className="flex gap-[3px] text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">TSS Plus Size<span className="text-[10px]">XL,XXL&XXXL</span></div> */}
                    {/* <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Juniors<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div> */}
                    {/* <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Markdowns</div> */}
                    {/* <div className="flex justify-between text-[17px] font-[700] p-4 text-[rgba(0,120,122)] border-t-[#e5e5e5] border border-dashed">MY MEMBERSHIP</div> */}
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Stores Near Me</div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Track My Order?</div>
                    <div onClick={() => setMoreOpen(!moreOpen)} className="cursor-pointer flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">More <svg
                        className={`transition-transform duration-700 ${moreOpen ? "rotate-180" : ""
                            }`}
                        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                    </svg></div>
                    <div className={`cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${moreOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>

                        <Link to="registration"><div onClick={() => dispatch(closeSidebar())} className="cursor-pointer flex justify-between p-4 border-t-[#e5e5e5] border border-dashed">My Account</div></Link>
                        <Link to="registration"><div onClick={() => dispatch(closeSidebar())} className="cursor-pointer flex justify-between p-4 border-t-[#e5e5e5] border border-dashed">Contact us</div></Link>
                    </div>

                </div>
            </div>
        </>
    )
}
